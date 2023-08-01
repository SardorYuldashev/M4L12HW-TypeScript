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
exports.deleteTodo = exports.patchTodo = exports.getTodo = exports.getTodos = exports.postTodo = void 0;
const http_validator_1 = __importDefault(require("../../shared/http-validator"));
const _schemas_1 = require("./_schemas");
const add_todo_1 = __importDefault(require("./add-todo"));
const list_todos_1 = __importDefault(require("./list-todos"));
const show_todo_1 = __importDefault(require("./show-todo"));
const edit_todo_1 = __importDefault(require("./edit-todo"));
const remove_todo_1 = __importDefault(require("./remove-todo"));
const postTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ body: req.body }, _schemas_1.postTodoSchema);
        const result = yield (0, add_todo_1.default)(Object.assign(Object.assign({}, req.body), { user: req.user.id }));
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.postTodo = postTodo;
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, list_todos_1.default)({ filters: { user: req.user.id } });
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.getTodos = getTodos;
const getTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ params: req.params }, _schemas_1.getTodoSchema);
        const result = yield (0, show_todo_1.default)({ id: req.params.id, user: req.user.id });
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.getTodo = getTodo;
const patchTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ params: req.params, body: req.body }, _schemas_1.patchTodoSchema);
        const result = yield (0, edit_todo_1.default)(Object.assign({ id: req.params.id, user: req.user.id }, req.body));
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.patchTodo = patchTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ params: req.params }, _schemas_1.deleteTodoSchema);
        const result = yield (0, remove_todo_1.default)({
            id: req.params.id,
            user: req.user.id,
        });
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.deleteTodo = deleteTodo;
