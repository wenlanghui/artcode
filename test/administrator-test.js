const Promise = require('bluebird');
const chai = require('chai');
chai.use(require('chai-properties'));
const expect = chai.expect;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Administrator = require('../models/').Administrator;
const AdminAllow = require('../models/').AdminAllow;
const AdminRole = require('../models/').AdminRole;
const AdminResource = require('../models/').AdminResource;
const administratorApi = require('../admin/controllers/administrator');

describe('login test ', function () {
    function clearData() {
        return Promise.all([
            Administrator.remove().exec(),
            AdminAllow.remove().exec(),
            AdminRole.remove().exec(),
            AdminResource.remove().exec(),
        ]).then((obj) => {
            return Promise.all([
                AdminRole.create([
                    {_id: 'administrator',name: '管理员',}, 
                    {_id: 'root',name: '系统管理员',},
                ]),
                AdminResource.create([
                    {_id: 'roles',name: '角色',}, 
                    {_id: 'allows',name: '权限配置',}, 
                    {_id: 'administrators',name: '管理员账户',}, 
                    {_id: 'resources',name: '资源',}, 
                    {_id: 'permissions',name: '权限',},
                ]),
            ])
            .then(() => {
                return Promise.all([
                    Administrator
                        .create({
                            name: 'admin',
                            password: '123456',
                            email: 'admin@admin.com',
                            cellphone: '17816893944',
                            roles: ['root'],
                        }),
                    AdminAllow.create([
                        'roles',
                        'allows',
                        'administrators',
                        'resources',
                        'permissions',
                    ].map((r) => {
                        return {
                            role: 'administrator',
                            resource: r,
                            permissions: [
                                'get',
                                'put',
                                'post',
                                'delete'
                            ],
                        }
                    })),
                ])
            })
            .then(() => {})
        }) 
    }
    
    before(function () {
        return clearData   
    })

    it('验证数据是否存入数据库' ,(done)=>{
        return AdminRole.find().exec().then(data => {
            console.log(data)
            expect(data).to.have.length(2)
            const obj1 = data[0]
            expect(obj1._id).to.eql('administrator')
        })
    })
})