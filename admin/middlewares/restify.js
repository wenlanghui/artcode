'use strict';

const _ = require('lodash');
const Promise = require('bluebird');

function genFuzzySearchRegexp(text, mode) {
    switch (mode) {
        case '^-*':
            return new RegExp(`^${text}.*`)
        case '*-*':
            return new RegExp(`.*${text}.*`)
        case '^-*-*':
            return new RegExp(`${text.split('').join('.*')}.*`)
        case '*-*-*':
            return new RegExp(`.*${text.split('').join('.*')}.*`)
        default:
            return new RegExp(`^${text}.*`)
    }
}

function getAdminDataList(Model, query, pagination, filters) {
    let q = Model.find(filters);

    if (query.sort) {
        q = q.sort(query.sort);
    }

    if (pagination.limit) {
        q = q.limit(pagination.limit);
    }
    if (pagination.skip >= 0) {
        q = q.skip(pagination.skip);
    }
    return q.execAsync();
}

function getAdminDataCount(Model, query, filters) {
    // filters.deleted = { $ne : true}
    return Model.count(filters).execAsync();
}

function getAdminDataListAndCount(Model, query, pagination, populates) {
    let filters;
    try {
        filters = JSON.parse(query.filters);
    } catch (e) {
        filters = {};
    }

    // 支持某些字段的模糊匹配需求，key表示需要模糊查询的字段，mode表示模糊的方式，See `genFuzzySearchRegexp`
    // query.fuzzySearchFields = [{key:'title', mode: '*-*'}, {key:'author', mode: '*-*'}]
    if (query.fuzzySearchFields && Array.isArray(query.fuzzySearchFields)) {
        for (const fieldInfo of query.fuzzySearchFields) {
            if (filters[fieldInfo.key]) {
                filters[fieldInfo.key] = genFuzzySearchRegexp(filters[fieldInfo.key], fieldInfo.mode)
            }
        }
    }

    // 支持按时间段进行过滤，需要将时间字符串转换成Date类型
    // query.dateFields = ['updated'] 指明Date类型字段
    // query.update = {$gte: '', $lte: '', $eq: ''} 指明查询条件，
    if (query.dateFields && Array.isArray(query.dateFields)) {
        for (const dateField of query.dateFields) {
            if (query[dateField]) {
                if (filters[dateField]) {
                    throw new Error(`dateField: ${dateField} already exists in query.filters`)
                }

                const dateFilter = query[dateField]
                for (let key in dateFilter) {
                    dateFilter[key] = new Date(dateFilter[key])
                }

                filters[dateField] = dateFilter
            }
        }
    }
    console.log(query, filters);
    return Promise.props({
        docs: getAdminDataList(Model, query, pagination, filters).then((docs)=> {
            if (!populates)  return docs

            if (!Array.isArray(populates)) {
                populates = [populates]
            }
            const _docs = _.map(docs, (doc) => doc.toObject())
            return Promise.each(populates, (populate) => {
                const alias = populate.alias || `_${populate.ref}`
                _.each(_docs, (doc) => {
                    doc[alias] = doc[populate.ref]
                })
                return Model.populate(_docs, {
                    path: alias,
                    select: populate.parameter,
                    model: populate.model
                }).then(function (docs) {
                    return Promise.resolve(docs)
                })
            }).return(_docs)

        }),
        count: getAdminDataCount(Model, query, filters),
    });
}

function getStack(func, hooks) {
    const name = func.name;
    const stack = [];
    if (hooks.pre[name]) stack.push(hooks.pre[name]);
    stack.push(func);
    if (hooks.post[name]) stack.push(hooks.post[name]);
    return stack;
}


module.exports = function restify(name, Model, router, hooks, plugin) {
    hooks = hooks || {};
    plugin = plugin || {}
    hooks.pre = hooks.pre || {};
    hooks.post = hooks.post || {};

    if (!plugin.middleFunc) {
        plugin.middleFunc = function (req, res, next) {
            next()
        }
    }

    if (!plugin.afterFunc) {
        plugin.afterFunc = function (req, res, data) {
            return res.json(data)
        }
    }

    router.get.apply(router, [`/${name}`].concat(plugin.middleFunc, getStack(function getAll(req, res, next) {
        console.log(req.query)
        getAdminDataListAndCount(Model, req.query, req.locals.pagintion, plugin.populate)
            .then((result) => {
                console.log(result,'docdddddddd')
                return plugin.afterFunc(req, res, result)
            })
            .catch(next)
    }, hooks)))

    router.get.apply(router, [`/${name}/:_id`].concat(plugin.middleFunc, getStack(function getOne(req, res, next) {
        Model.findById(req.params._id)
            .execAsync()
            .then((doc) => {
                console.log(doc,'docdddddddd')
                if (!doc) throw new Error(`${name}_not_exists`, {explain: '不存在'});
                return plugin.afterFunc(req, res, doc)
            })
            .catch(next)
    }, hooks)));

    router.put.apply(router, [`/${name}/:_id`].concat(getStack(function update(req, res, next) {
        Model.findById(req.params._id)
            .execAsync()
            .then((doc) => {
                if (!doc) throw new Error(`${name}_not_exists`, {explain: '不存在'});
                Object.assign(doc, req.body);
                return Promise.promisify(doc.save.bind(doc))()
            })
            .then(doc => {
                return plugin.afterFunc(req, res, {success: true} || doc)
            })
            .catch(next)
    }, hooks)));

    router.post.apply(router, [`/${name}`].concat(getStack(function create(req, res, next) {
        console.log(req.body)
        Model.create(req.body)
            .then(doc => {
                res.status(201).json(doc)
            })
            .catch(next)
    }, hooks)));

    router.delete.apply(router, [`/${name}/:_id`].concat(getStack(function remove(req, res, next) {
        if (req.locals.physicalRemove) {
            return Model.findOneAndRemove({_id: req.params._id})
                .execAsync()
                .then(doc => {
                    if (!doc) throw new Error(`${name}_not_exists`, {explain: '不存在'});
                    res.status(202).json({success: true});
                })
                .catch(next)
        }

        const deleteSet = req.locals && req.locals.deleteSet || {deleted: true};
        Model
            .update({
                _id: req.params._id,
            }, {
                $set: deleteSet,
            })
            .execAsync()
            .then(() => {
                res.status(202).json({success: true});
            })
            .catch(next)
    }, hooks)));
}

module.exports.getAdminDataListAndCount = getAdminDataListAndCount
