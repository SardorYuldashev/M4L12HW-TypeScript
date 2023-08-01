"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
;
const userSchema = new mongoose_1.default.Schema({
    first_name: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
    },
    last_name: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
    },
    username: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose_1.default.SchemaTypes.String,
        required: true,
    },
    is_deleted: {
        type: mongoose_1.default.SchemaTypes.Boolean,
        default: false,
    },
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
