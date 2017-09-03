'use strict';

const debug = require('debug')('gleeman:mongoose');
var mongoose = require('mongoose')

// var mpromise = require('mongoose/node_modules/mpromise')
// mpromise.prototype.catch = function (fn) {
//     return this.then(null, fn)
// }

var Promise = require('bluebird')

require('mongoose-querystream-worker')

Promise.promisifyAll(mongoose)

var config = require('../lib/config-load')()
var nconf = require('nconf')

var poolSize = nconf.get('MONGO_POOL_SIZE') || 5;
debug(`mongo pool size set to ${poolSize}`);

!(function () {
    if (mongoose.connection.readyState !== 0) return

    const connectString = config.mongodb
    const options = {
        replset: {
            rs_name: 'swarm',
            replicaSet: 'swarm',
            poolSize: poolSize,
            strategy: nconf.get('mongoOption:strategy') || 'ping',
            socketOptions: {
                connectTimeoutMS: nconf.get('mongoOption:connectTimeoutMS') || 30000,
                keepAlive: nconf.get('mongoOption:keepAlive') || 1000,
            }
        },
        db: {
            readPreference: nconf.get('mongoOption:readPreference') || 'secondaryPreferred',
        },
        server: {
            poolSize: poolSize,
            slaveOk: true,
            auto_reconnect: true
        }
    };

    return mongoose.connectAsync(connectString, options)
        .then(function () {
            debug('Mongoose connected to: ' + connectString)
        })
        .catch(function (err) {
            console.log('ERROR connecting to: ' + connectString + '. ' + err)
        })
}())


var models = {
    Administrator: require('./administrator').Administrator,
    AdminRole: require('./administrator').AdminRole,
    AdminResource: require('./administrator').AdminResource,
    AdminAllow: require('./administrator').AdminAllow,
    BookMark: require('./bookMark').BookMark,
};

// require('../module/purge-cache').init(models)

module.exports = models
