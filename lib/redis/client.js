'use strict';

const config = require('../config-load')();
const nconf = require('nconf')
const Redis = require('ioredis')
// const _ = require('lodash')
// const Command = require('ioredis').Command

const showFriendlyErrorStack = nconf.get('NODE_ENV') !== 'production';

exports.defaultClient = new Redis({
    host: nconf.get('redis:host'),
    port: nconf.get('redis:port'),
    db: nconf.get('redis:db') || 0,
    showFriendlyErrorStack,
    dropBufferSupport: true,
    lazyConnect: true,
});

// exports.dbIndexClient = new Redis({
//     host: nconf.get('redisIndex:host'),
//     port: nconf.get('redisIndex:port'),
//     db: nconf.get('redisIndex:db') || 0,
//     showFriendlyErrorStack,
//     dropBufferSupport: true,
//     lazyConnect: true,
// });

// const serverList = nconf.get('cacheServerList')
// const userShelfServerList = nconf.get('cacheUserShelfServerList')


// exports.cacheRedisList = _.map(serverList, server => {
//     return new Redis({
//         host: server.host,
//         port: server.port,
//         db: server.db || 0,
//         showFriendlyErrorStack,
//         dropBufferSupport: true,
//         lazyConnect: true,
//     });
// });

// exports.cacheUserShelfRedisList = _.map(userShelfServerList, server => {
//     return new Redis({
//         host: server.host,
//         port: server.port,
//         db: server.db || 0,
//         showFriendlyErrorStack,
//         dropBufferSupport: true,
//         lazyConnect: true,
//         password: server.password
//     });
// });

// const rateLimitClient = _.sample(exports.cacheUserShelfRedisList).duplicate();
// const purchaseClient = _.sample(exports.cacheUserShelfRedisList).duplicate();
// const cpSourceMapClient = _.sample(exports.cacheUserShelfRedisList).duplicate();
// const userShelfClient = _.sample(exports.cacheUserShelfRedisList).duplicate();

// exports.getClientForRateLimiter = function () {
//     return rateLimitClient;
// }

// exports.getClientForPurchase = function () {
//     return purchaseClient;
// }

// exports.getClientForCpSourceMap = function () {
//     return cpSourceMapClient;
// }

// exports.getClientForUserShelf = function () {
//     return userShelfClient;
// }

// exports.getClientForChapter = function () {
//     return new Redis({
//         host: nconf.get('cache:host'),
//         port: nconf.get('cache:port'),
//         db: 0,
//         showFriendlyErrorStack,
//         dropBufferSupport: true,
//         lazyConnect: true,
//     });
// }

// exports.redisCommand = Command;
