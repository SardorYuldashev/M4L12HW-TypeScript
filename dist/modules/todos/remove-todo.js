"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../shared/errors");
const Todo_1 = __importDefault(require("./Todo"));
;
const removeTodo = ({ id, user }) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield Todo_1.default.findOne({ _id: id, is_deleted: false, user });
    if (!existing) {
        throw new errors_1.NotFoundError("Todo topilmadi.");
    }
    ;
    return Todo_1.default.findByIdAndUpdate(id, { is_deleted: true }).select("-is_deleted");
});
exports.default = removeTodo;
