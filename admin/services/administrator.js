'use strict';

const _ = require('lodash')
const Promise = require('bluebird')
const _u = require('../../commons/cryptoUtil');

const Administrator = require('../../models').Administrator
const auth = require('../middlewares/auth')


exports.login = function login(username, password) {
    return Administrator.login(username, password)
        .then((admin) => {
            const user = _.pick(admin, '_id', 'name', 'cellphone', 'email');
            const token = auth.getJWTForAdmin(user);
            return {token, user};
        })
}

exports.password = function password(user, body) {
    return Administrator.login(user.email, body.oldPassword)
        .then((admin) => {
            if (admin) {
                this._password = _u.sha1Sign(body.newPassword);
                this.salt = _u.makeSalt();
                this.hashedPassword = _u.hashPassword(this._password, this.salt);
                const con = {
                    salt: this.salt,
                    hashedPassword: this.hashedPassword
                }
                return Administrator.findByIdAndUpdate(user._id,con)
                    .exec()
                    .then(obj => obj)
            }
        })
}

exports.logout = function logout(userId) {
    return Promise.resolve({});
}
