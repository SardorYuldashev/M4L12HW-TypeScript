"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../shared/config"));
function default_1() {
    return mongoose_1.default
        .connect(`mongodb://${config_1.default.db.host}:${config_1.default.db.port}/${config_1.default.db.name}`)
        .then(() => {
        console.log('DB ga ulandi.');
    })
        .catch((err) => {
        console.log('DB da xatolik: ', err);
    });
}
exports.default = default_1;
;
