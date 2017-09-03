'use strict';

const Promise = require('bluebird');
const acl = require('../../lib/acl');
const unless = ['sessions', 'welfares-upload-icon'];

module.exports = (opts) => {
    return function aclMiddleware(req, res, next) {
        const resource = req._parsedUrl.pathname.split('/')[1];

        if (unless.indexOf(resource) > -1) {
            return next();
        }

        const userId = req.user._id;
        const action = req.method.toLowerCase();

        Promise
            .all([
                acl.userRoles(userId),
                acl.isAllowed(userId, resource, action),
            ])
            .spread((roles, allowed) => {
                // if (roles.indexOf('root') === -1 && !allowed) {
                //     const e = new Error('not_allow')
                //     e.statusCode = 403;
                //     return next(e)
                // }
                next();
            })
            .catch(next);
    }
}
