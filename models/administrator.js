'use strict';

const mongoose = require('mongoose');

const _u = require('../commons/cryptoUtil');
const acl = require('../lib/acl');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    _id: {type: String},
    name: {type: String},
    deleted: {type: Boolean},
});

const resourceSchema = new Schema({
    _id: {type: String},
    name: String,
    deleted: {type: Boolean},
})

const allowSchema = new Schema({
    role: {type: String},
    resource: {type: String},
    permissions: {type: [String]},
    deleted: {type: Boolean},
})

allowSchema.pre('save', function (next) {
    acl.allow(this.role, this.resource, this.permissions)
        .then(() => next())
        .catch(next)
})

allowSchema.pre('remove', function (next) {
    acl.removeAllow(this.role, this.resource, this.permissions)
        .then(() => next())
        .catch(next)
})

exports.AdminRole = mongoose.model('AdminRole', roleSchema);
exports.AdminResource = mongoose.model('AdminResource', resourceSchema);
exports.AdminAllow = mongoose.model('AdminAllow', allowSchema);

const schema = new Schema({
    name: {type: String, required: true},
    hashedPassword: {type: String, required: true, select: false},
    salt: {type: String, required: true, select: false},
    email: {type: String, required: true},
    cellphone: {type: String, required: true},
    roles: {type: [String], ref: 'AdminRole'},
    deleted: {type: Boolean},
});

schema.index({cellphone: 1}, {unique: true});
schema.index({email: 1}, {unique: true});

schema.pre('save', function (next) {
    if (!this.isModified('roles')) return next();
    const id = this._id.toString();
    acl.userRoles(id)
        .then(roles => acl.removeUserRoles(id, roles))
        .then(() => acl.addUserRoles(id, this.roles))
        .then(() => next())
        .catch(next)
})

schema.pre('remove', function (next) {
    acl.removeUserRoles(this._id.toString(), this.roles)
        .then(() => next())
        .catch(next)
})

schema.virtual('password')
    .set(function setPassword(password) {
        if (!password) return;
        this._password = _u.sha1Sign(password);
        this.salt = _u.makeSalt();
        this.hashedPassword = _u.hashPassword(this._password, this.salt);
    })
    .get(function getPassword() {
        return this._password;
    });


schema.methods = {
    authenticate(plainText) {
        return _u.hashPassword(plainText, this.salt) === this.hashedPassword;
    },
};

schema.statics = {
    login(username, password) {
        return this
            .findOne({
                $or: [
                    {cellphone: username},
                    {email: username},
                ],
            })
            .select('+hashedPassword +salt')
            .exec()
            .then(admin => {
                if (!admin) throw new Error('user_not_found');
                if (!admin.authenticate(password)) throw new Error('invalid_password');
                return admin;
            })
    },
};

exports.Administrator = mongoose.model('Administrator', schema);
