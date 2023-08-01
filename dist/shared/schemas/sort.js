"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
function default_1(sortFields) {
    joi_1.default.object({
        by: joi_1.default.string().valid(...sortFields),
        order: joi_1.default.string().valid("asc", "desc"),
    });
}
exports.default = default_1;
;
