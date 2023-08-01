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
const bcryptjs_1 = require("bcryptjs");
const config_1 = __importDefault(require("../../shared/config"));
const User_1 = __importDefault(require("./User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../../shared/errors");
;
const loginUser = ({ username, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield User_1.default.findOne({ username, is_deleted: false });
    if (!existing) {
        throw new errors_1.UnauthorizedError("Incorrect username or password.");
    }
    ;
    const match = yield (0, bcryptjs_1.compare)(password, existing.password);
    if (!match) {
        throw new errors_1.UnauthorizedError("Incorrect username or password.");
    }
    ;
    const token = jsonwebtoken_1.default.sign({ user: { id: existing._id } }, config_1.default.jwt.secret);
    return token;
});
exports.default = loginUser;
