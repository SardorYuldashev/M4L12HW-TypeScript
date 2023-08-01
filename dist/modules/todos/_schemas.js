"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoSchema = exports.patchTodoSchema = exports.getTodoSchema = exports.postTodoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
;
;
exports.postTodoSchema = {
    body: joi_1.default.object({
        text: joi_1.default.string().required(),
        list: joi_1.default.string().required(),
    }),
};
exports.getTodoSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string().required(),
    }),
};
exports.patchTodoSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string().required(),
    }),
    body: joi_1.default.object({
        text: joi_1.default.string(),
        is_done: joi_1.default.boolean(),
        list: joi_1.default.string(),
    }),
};
exports.deleteTodoSchema = {
    params: joi_1.default.object({
        id: joi_1.default.string().required(),
    }),
};
