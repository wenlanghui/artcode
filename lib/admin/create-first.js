'use strict';

const Promise = require('bluebird');

const Administrator = require('../../models/').Administrator;
const AdminAllow = require('../../models/').AdminAllow;
const AdminRole = require('../../models/').AdminRole;
const AdminResource = require('../../models/').AdminResource;
const BookMark = require('../../models/').BookMark;

function addData(){
    return Promise.all([
        AdminRole.create([{_id: 'administrator',name: '管理员',}, {_id: 'root',name: '系统管理员',}]),
        AdminResource.create([{_id: 'roles',name: '角色',}, {_id: 'allows',name: '权限配置',}, 
                            {_id: 'administrators',name: '管理员账户',}, {_id: 'resources',name: '资源',}, 
                            {_id: 'permissions',name: '权限',},]),
    ]).then(() => {
        return Promise.all([
            Administrator.create({name: 'admin',password: '123456',email: 'admin@admin.com',cellphone: '17816893944',roles: ['root'],}),
            Administrator.create({name: 'nick',password: '123456',email: 'nick@nick.com',cellphone: '17816893900',roles: ['root'],}),
            AdminAllow.create(['roles','allows','administrators','resources','permissions',]
            .map((r) => {
                return {role: 'administrator',resource: r,permissions: ['get','put','post','delete'],}    
            })),
        ])
    }).then(() => process.exit())
}


function clearData(){
    return Promise.all([
        AdminRole.remove().exec(),
        AdminResource.remove().exec(),
        Administrator.remove().exec(),
        AdminAllow.remove().exec(),
    ]).then(() => {})
}

function initData(){
    return clearData().then((obj) => {
        return addData()
    })
}

initData()
