"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchmea = exports.updatePasswordSchema = exports.patchUserSchema = exports.showUserSchema = exports.patchMeSchema = exports.postLoginUserSchema = exports.postRegisterUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
;
;
exports.postRegisterUserSchema = {
    body: joi_1.default.object({
        first_name: joi_1.default.string().required(),
        last_name: joi_1.default.string().required(),
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    }),
};
exports.postLoginUserSchema = {
    body: joi_1.default.object({
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    }),
};
exports.patchMeSchema = {
    body: joi_1.default.object({
        first_name: joi_1.default.string(),
        last_name: joi_1.default.string(),
        username: joi_1.default.string(),
    }),
};
exports.showUserSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string(),
    }),
};
exports.patchUserSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string(),
    }),
    body: joi_1.default.object({
        first_name: joi_1.default.string().required(),
        last_name: joi_1.default.string().required(),
        username: joi_1.default.string().required(),
    }),
};
exports.updatePasswordSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string(),
    }),
    body: joi_1.default.object({
        password: joi_1.default.string().required(),
    }),
};
exports.deleteUserSchmea = {
    params: joi_1.default.object({
        id: joi_1.default.string(),
    }),
};
