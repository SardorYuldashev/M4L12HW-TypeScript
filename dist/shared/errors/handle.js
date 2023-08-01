"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
exports.default = (err, req, res, next) => {
    let status = 500;
    if (err instanceof index_1.BadRequestError)
        status = 400;
    else if (err instanceof index_1.UnauthorizedError)
        status = 401;
    else if (err instanceof index_1.ForbiddenError)
        status = 403;
    else if (err instanceof index_1.NotFoundError)
        status = 404;
    res.status(status).json({ error: err.message });
};
