'use strict';

module.exports = () => {
    return function pagination(req, res, next) {
        req.locals.pagintion = {
            skip: Number(req.query.skip),
            limit: Number(req.query.limit)
        };

        res.setPagination = function setPagination(data) {
            // res.set('X-Total-Count', data.count);
            // res.json(data.docs)
            res.json(data)
        };
        next();
    }
}
