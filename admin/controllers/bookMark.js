'use strict';

const _ = require('lodash');
const BookMark = require('../../models').BookMark;
const restify = require('../middlewares/restify');

/**
 * @api {get} /private 获取我的书签
 * @apiDescription 获取我的书签
 * @apiName private
 * @apiGroup BookMark
 *
 * @apiUse PublicParam
 *
 * @apiPermission User
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "docs":
 *      [
 *          {
 *              "_id":"59aac646917274909b4be116",
 *              "title":"测试二",
 *              "url":"http://apidocjs.com/",
 *              "owner":"private",
 *              "userId":"5858c3f9c6ecbfcc1b282e84",
 *              "__v":0,
 *              "status":0,
 *              "created":"2017-09-02T14:55:02.689Z",
 *              "updated":"2017-09-02T14:55:02.689Z"
 *          },
 *          {
 *              "_id":"59aac05e917274909b4be115",
 *              "title":"测试一",
 *              "url":"https://www.google.com",
 *              "owner":"public",
 *              "userId":"5858c3f9c6ecbfcc1b282e84",
 *              "__v":0,
 *              "status":0,
 *              "created":"2017-09-02T14:29:50.392Z",
 *              "updated":"2017-09-02T14:34:34.963Z"
 *          }
 *      ],
 *      "count":2
 *    }
 */

 /**
 * @api {post} /private 添加书签
 * @apiDescription 添加书签
 * @apiName private1
 * @apiGroup BookMark
 *
 * @apiUse PublicParam
 *
 * @apiParam {String} title 标题
 * @apiParam {String} url 链接
 * @apiParam {String} owner 类型(public:公共,priavte:私有)
 * 
 * @apiPermission User
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "success":true,
 *     }
 */
const hooksPrivate = {
    pre: {
        getAll(req, res, next){
            req.query = {
                sort: '-_id',
                filters: JSON.stringify({userId: req.user._id})
            }
            return next()
        },
        remove(req, res, next) {
            req.locals.physicalRemove = true;
            return next();
        },
        create(req, res, next){
            req.body.userId = req.user._id;
            return next()
        },
        update(req, res, next){
            req.body.updated = new Date();
            return next()
        }
    }
}

/**
 * @api {get} /public 获取公共书签
 * @apiDescription 获取公共书签
 * @apiName public
 * @apiGroup BookMark
 *
 * @apiUse PublicParam
 *
 * @apiPermission User
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      "docs":
 *      [
 *          {
 *              "_id":"59aac05e917274909b4be115",
 *              "title":"测试一",
 *              "url":"https://www.google.com",
 *              "owner":"public",
 *              "userId":"5858c3f9c6ecbfcc1b282e84",
 *              "__v":0,
 *              "status":0,
 *              "created":"2017-09-02T14:29:50.392Z",
 *              "updated":"2017-09-02T14:34:34.963Z"
 *          }
 *      ],
 *      "count":1}
 */
const hooksPublic = {
    pre: {
        getAll(req, res, next){
            req.query = {
                sort: '-_id',
                filters: JSON.stringify({owner: 'public'})
            }
            return next()
        },
    }
}

exports.register = (router) => {
    restify('public', BookMark, router, hooksPublic);
    restify('private', BookMark, router, hooksPrivate);
}