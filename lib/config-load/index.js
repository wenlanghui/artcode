'use strict';

const path = require('path')
const fs = require('fs')
const moment = require('moment-timezone')
const nconf = require('nconf')
const _ = require('lodash')

moment.tz.setDefault('Asia/Shanghai');

nconf.use('memory')
nconf.env()

var config

var env = nconf.get('NODE_ENV') || 'development'
var projectRoot = path.resolve(__dirname, '..', '..')
nconf.set('NODE_ENV', env)
nconf.set('projectRoot', projectRoot)

const CONFIG_DIR = path.resolve(nconf.get('CONFIG_DIR') || projectRoot);
nconf.set('ABSOLUTE_CONFIG_DIR', CONFIG_DIR)

function loadConfig() {
    if (config) return config

    if (isTest()) {
        config = require(`${CONFIG_DIR}/config.test.json`)

        if (!config.mongodb.match('test')) {
            throw new Error('测试环境使用的数据库名必须包含 test')
        }
        nconf.set('NODE_ENV', 'test')
    } else {
        config = require(`${CONFIG_DIR}/config.json`)
    }

    nconf.defaults(config)

    return config
}

function isTest() {
    var test = false
    process.argv.forEach(function (arg) {
        if (arg.match(/mocha|test/)) test = true
    })

    return test
}

loadConfig();

loadConfig.nconf = nconf;
module.exports = loadConfig;

