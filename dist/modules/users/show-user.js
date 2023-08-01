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
const User_1 = __importDefault(require("./User"));
;
const showUser = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ _id: id, is_deleted: false }).select("-password -is_deleted");
    if (!user) {
        throw new errors_1.NotFoundError("Foydalanuvchi topilmadi.");
    }
    ;
    return user;
});
exports.default = showUser;
