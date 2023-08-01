"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const errors_1 = require("../errors");
const isLoggedIn = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            throw new errors_1.UnauthorizedError('Unauthorized.');
        }
        ;
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt.secret, { ignoreExpiration: false });
        req.user = decoded.user;
        next();
    }
    catch (error) {
        next(new errors_1.UnauthorizedError(error.message));
    }
    ;
};
exports.default = isLoggedIn;
