'use strict';

const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const responseTime = require('response-time')
const expressValidator = require('express-validator')
const cors = require('cors')

const config = require('../lib/config-load')()
const routes = require('./route')

const app = express()

app.set('json spaces', 0)
app.set('trust proxy', config.trustProxy || '10.0.0.0/8')
app.use(cors({
    origin: [/localhost/, /\.zs/, /\.zhuishushenqi\.com/],
    methods: [
        'GET',
        'POST',
        'DELETE',
        'PUT',
        'PATCH',
        'OPTIONS'
    ],
    allowedHeaders: [
        'Origin',
        'Content-Type',
        'Accept',
        'Authorization',
        'X-HTTP-Method-Override',
        'x-requested-with'
    ],
    exposedHeaders: [
        'X-Total-Count',
    ],
    credentials: true,
}));
app.use(responseTime())
app.use(compression({
    level: 9,
    memLevel: 9
}))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({limit:'2mb'}))

app.use(expressValidator({}))

app.get('/online', function (req, res) {
    res.end()
})

routes(app)

app.use(function (req, res, next) {
    const err = new Error('not_found')
    err.statusCode = 404;
    next(err);
})

app.use(function (err, req, res, next) {
    if (err && err.name === 'UnauthorizedError') {
        err.statusCode = 403;
    }
    if (err && err.message === 'jwt expired') {
        err.statusCode = 403;
    }
    const data = {
        success: false,
        message: err.message,
        detail: err.detail,
    }

    if (process.env.NODE_ENV !== 'production') {
        console.error(err);
    }

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json(data)
})

const server = app.listen(process.env.PORT || 9999, function () {
    console.log('App listen on port', server.address().port)
})

return app
