'use strict';

const crypto = require('crypto');
const assert = require('assert');

exports.sha1Sign = function sha1Sign(src) {
    const sha1 = crypto.createHash('sha1');
    sha1.update(src);
    return sha1.digest('hex').toString();
}

exports.makeSalt = function makeSalt() {
    return crypto.randomBytes(16).toString('base64');
}

exports.hashPassword = function hashPassword(password, salt) {
    assert(password && salt, 'pwd or salt missing');
    const _salt = new Buffer(salt, 'base64');
    return crypto.pbkdf2Sync(password, _salt, 10000, 64).toString('base64');
}
