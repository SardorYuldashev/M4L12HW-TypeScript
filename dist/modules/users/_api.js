"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const is_loggedin_1 = __importDefault(require("../../shared/auth/is-loggedin"));
const _controllers_1 = require("./_controllers");
const router = express_1.default.Router();
router.post('/users/register', _controllers_1.postRegisterUser);
router.post('/users/login', _controllers_1.postLoginUser);
router.get('/users/me', is_loggedin_1.default, _controllers_1.getMe);
router.patch('/users/me', is_loggedin_1.default, _controllers_1.patchMe);
router.delete('/users/me', is_loggedin_1.default, _controllers_1.deleteMe);
exports.default = router;
