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
exports.deleteMe = exports.getMe = exports.patchMe = exports.postLoginUser = exports.postRegisterUser = void 0;
const http_validator_1 = __importDefault(require("../../shared/http-validator"));
const _schemas_1 = require("./_schemas");
const add_user_1 = __importDefault(require("./add-user"));
const login_user_1 = __importDefault(require("./login-user"));
const edit_user_1 = __importDefault(require("./edit-user"));
const show_user_1 = __importDefault(require("./show-user"));
const remove_user_1 = __importDefault(require("./remove-user"));
const postRegisterUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ body: req.body }, _schemas_1.postRegisterUserSchema);
        const result = yield (0, add_user_1.default)(req.body);
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.postRegisterUser = postRegisterUser;
const postLoginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ body: req.body }, _schemas_1.postLoginUserSchema);
        const result = yield (0, login_user_1.default)(req.body);
        res.status(200).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.postLoginUser = postLoginUser;
const patchMe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ body: req.body }, _schemas_1.patchMeSchema);
        const result = yield (0, edit_user_1.default)(Object.assign({ id: req.user.id }, req.body));
        res.status(200).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.patchMe = patchMe;
const getMe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, show_user_1.default)({ id: req.user.id });
        res.status(200).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.getMe = getMe;
const deleteMe = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, remove_user_1.default)({ id: req.user.id });
        res.status(200).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteMe = deleteMe;
