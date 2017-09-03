'use strict';

const acl = require('./middlewares/acl');
const auth = require('./middlewares/auth');
const pagination = require('./middlewares/pagination');

const controllers = [
    require('./controllers/administrator'),
    require('./controllers/bookMark'),
];

module.exports = function (app) {
    app.use(auth.getAdminJWT());
    app.use(acl());
    app.use((req, res, next) => {
        req.locals = req.locals || {};
        return next();
    })
    app.use(pagination());

    for (let ctrl of controllers) {
        ctrl.register(app);
    }
}
