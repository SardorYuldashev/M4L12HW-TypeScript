"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteListSchema = exports.patchListSchema = exports.getListSchema = exports.postListSchema = void 0;
const joi_1 = __importDefault(require("joi"));
;
;
exports.postListSchema = {
    body: joi_1.default.object({
        name: joi_1.default.string().required(),
    }),
};
exports.getListSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string().required(),
    }),
};
exports.patchListSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        name: joi_1.default.string(),
    }),
};
exports.deleteListSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string().required(),
    }),
};
