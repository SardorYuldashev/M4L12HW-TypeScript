"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.default = joi_1.default.object({
    offset: joi_1.default.number().integer(),
    limit: joi_1.default.number().integer().when("offset", {
        is: joi_1.default.exist(),
        then: joi_1.default.required(),
        otherwise: joi_1.default.forbidden(),
    }),
});
