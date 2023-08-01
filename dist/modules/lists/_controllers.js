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
exports.deleteList = exports.patchList = exports.getList = exports.getLists = exports.postList = void 0;
const http_validator_1 = __importDefault(require("../../shared/http-validator"));
const _schemas_1 = require("./_schemas");
const add_list_1 = __importDefault(require("./add-list"));
const list_lists_1 = __importDefault(require("./list-lists"));
const show_list_1 = __importDefault(require("./show-list"));
const edit_list_1 = __importDefault(require("./edit-list"));
const remove_list_1 = __importDefault(require("./remove-list"));
const postList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ body: req.body }, _schemas_1.postListSchema);
        const result = yield (0, add_list_1.default)(Object.assign(Object.assign({}, req.body), { user: req.user.id }));
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.postList = postList;
const getLists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, list_lists_1.default)({ filters: { user: req.user.id } });
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getLists = getLists;
const getList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ params: req.params }, _schemas_1.getListSchema);
        const result = yield (0, show_list_1.default)({ id: req.params.id, user: req.user.id });
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getList = getList;
const patchList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ params: req.params, body: req.body }, _schemas_1.patchListSchema);
        const result = yield (0, edit_list_1.default)(Object.assign({ id: req.params.id, user: req.user.id }, req.body));
        res.status(201).json({
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.patchList = patchList;
const deleteList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, http_validator_1.default)({ params: req.params }, _schemas_1.deleteListSchema);
        const result = yield (0, remove_list_1.default)({
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
});
exports.deleteList = deleteList;
