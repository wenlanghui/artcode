'use strict';

const ACL = require('acl');
const redisClient = require('./redis/client').defaultClient;

module.exports = new ACL(new ACL.redisBackend(redisClient, 'zs-acl'));
