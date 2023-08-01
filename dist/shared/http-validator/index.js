"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const httpValidator = ({ body, params, query }, schema) => {
    if (body) {
        const { error } = schema.body.validate(body);
        if (error)
            throw new errors_1.BadRequestError(error);
    }
    ;
    if (params) {
        const { error } = schema.params.validate(params);
        if (error)
            throw new errors_1.BadRequestError(error);
    }
    ;
    if (query) {
        const { error } = schema.query.validate(query);
        if (error)
            throw new errors_1.BadRequestError(error);
    }
    ;
};
exports.default = httpValidator;
