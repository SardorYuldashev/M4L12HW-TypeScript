"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const todoSchema = new mongoose_1.default.Schema({
    text: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
    },
    is_done: {
        type: mongoose_1.default.SchemaTypes.Boolean,
        default: false,
    },
    is_deleted: {
        type: mongoose_1.default.SchemaTypes.Boolean,
        default: false,
    },
    user: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
    list: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "List",
        required: true,
    },
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const Todo = mongoose_1.default.model("Todo", todoSchema);
exports.default = Todo;
