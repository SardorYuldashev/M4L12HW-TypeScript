"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const listSchema = new mongoose_1.default.Schema({
    name: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
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
    todos: {
        type: [mongoose_1.default.SchemaTypes.ObjectId],
        ref: "Todo",
        default: [],
    },
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const List = mongoose_1.default.model("List", listSchema);
exports.default = List;
