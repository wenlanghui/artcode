'use strict';

const _ = require('lodash')
const Administrator = require('../../models').Administrator
const AdminRole = require('../../models').AdminRole
const AdminResource = require('../../models').AdminResource
const AdminAllow = require('../../models').AdminAllow

const adminstratorService = require('../services/administrator')
const restify = require('../middlewares/restify');

const hooks = {
    pre: {
        remove(req, res, next) {
            req.locals.physicalRemove = true;
            return next();
        },
    }
}
/**
 * @api {post} /login 登录
 * @apiDescription 登录
 * @apiName login
 * @apiGroup Administrator
 *
 * @apiUse PublicParam
 *
 * @apiPermission User
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "success":true,
 *         "doc":
 *         {
 *              "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODU4YzNmOWM2ZWNiZmN
jMWIyODJlODQiLCJuYW1lIjoi5YiY5YWo5LquIiwiY2VsbHBob25lIjoiMTgyMTc1MjUwMTEiLCJlbWFpbCI6ImxpdXFsQDEzOTEuY29tIiwiaWF0IjoxNTA0MzYzNDc2LCJleHAiOjE1MDY5NTU0NzZ9
.eIwZPb72MIiPpAAz1Eya6Nl5CfGxei2U27IOp0oh7qs",
 *              "user":
 *              {
 *                  "_id":"5858c3f9c6ecbfcc1b282e84",
 *                  "name":"admin",
 *                  "cellphone":"17816893944",
 *                  "email":"admin@admin.com"
 *              }
 *          }
 *      }
 */
function login(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    adminstratorService.login(username, password)
        .then((admin) => {
            console.log(admin)
            res.status(200).json({success: true, doc: admin});
        })
        // .catch((err) => {
        //     if (err.message === 'invalid_password') {
        //         return res.status(200).json({
        //             success: false,
        //             message: '密码错误'
        //         })
        //     }
        //     return next(err)
        // })
}

function password(req, res, next) {
    adminstratorService.password(req.user, req.body)
        .then((admin) => {
            if (admin) {
                res.status(201).json({success:true})
            }
        })
        .catch(next)
}

function logout(req, res, next) {
    adminstratorService.login(req.params.userId)
        .then((admin) => {
            res.status(202).json(admin);
        })
        .catch(next)
}


const permissions = [{
    _id: 'get',
    name: '获取',
}, {
    _id: 'put',
    name: '修改',
}, {
    _id: 'post',
    name: '创建',
}, {
    _id: 'delete',
    name: '删除',
},];

function getPermissions(req, res, next) {
    res.json(permissions)
}

function getPermission(req, res, next) {
    const p = _.find(permissions, {_id: req.params._id});
    if (!p) next(new Error('not_found'))
    res.json(p);
}

exports.register = (router) => {
    restify('administrators', Administrator, router, hooks);
    restify('roles', AdminRole, router, hooks);
    restify('resources', AdminResource, router, hooks);
    restify('allows', AdminAllow, router, hooks);

    router.get('/permissions', getPermissions);
    router.get('/permissions/:_id', getPermission);

    router.post('/sessions', login);
    router.delete('/sessions/:userId', logout);

    router.post('/password', password);
}
