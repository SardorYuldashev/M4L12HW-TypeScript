"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const is_loggedin_1 = __importDefault(require("../../shared/auth/is-loggedin"));
const _controllers_1 = require("./_controllers");
const router = express_1.default.Router();
router.post("/lists", is_loggedin_1.default, _controllers_1.postList);
router.get("/lists", is_loggedin_1.default, _controllers_1.getLists);
router.get("/lists/:id", is_loggedin_1.default, _controllers_1.getList);
router.patch("/lists/:id", is_loggedin_1.default, _controllers_1.patchList);
router.delete("/lists/:id", is_loggedin_1.default, _controllers_1.deleteList);
exports.default = router;
