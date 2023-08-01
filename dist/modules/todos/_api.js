"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const is_loggedin_1 = __importDefault(require("../../shared/auth/is-loggedin"));
const _controllers_1 = require("./_controllers");
const router = express_1.default.Router();
router.post("/todos", is_loggedin_1.default, _controllers_1.postTodo);
router.get("/todos", is_loggedin_1.default, _controllers_1.getTodos);
router.get("/todos/:id", is_loggedin_1.default, _controllers_1.getTodo);
router.patch("/todos/:id", is_loggedin_1.default, _controllers_1.patchTodo);
router.delete("/todos/:id", is_loggedin_1.default, _controllers_1.deleteTodo);
exports.default = router;
