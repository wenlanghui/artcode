const jwt = require('express-jwt');
const jsonWebToken = require('jsonwebtoken');
const nconf = require('nconf');

require('../../lib/config-load/index')();

exports.getJWTForAdmin = function getJWTForAdmin(payload) {
    return jsonWebToken.sign(
        payload, nconf.get('jwt:adminSecret'),
        {
            // algorithm: 'RS256',
            expiresIn: nconf.get('jwt:adminExpiresIn'),
        }
    );
}

exports.getAdminJWT = function getAdminJWT() {
    return jwt({
        secret: nconf.get('jwt:adminSecret'),
        getToken: function fromHeaderOrQuerystring (req) {
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                return req.headers.authorization.split(' ')[1];
            } else if (req.query && req.query.token) {
                return removeBearer(req.query.token);
            }
            return null;
        }
    }).unless({
        path: ['/sessions','/welfares-upload-icon'],
    })

    function removeBearer(authToken) {
        if (authToken && authToken.split(' ')[0] === 'Bearer') {
            return authToken.split(' ')[1];
        }
        return authToken
    }
}
