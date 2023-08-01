"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const config_1 = __importDefault(require("./shared/config"));
const handle_1 = __importDefault(require("./shared/errors/handle"));
const _api_1 = __importDefault(require("./modules/users/_api"));
const _api_2 = __importDefault(require("./modules/lists/_api"));
const _api_3 = __importDefault(require("./modules/todos/_api"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(_api_1.default);
app.use(_api_2.default);
app.use(_api_3.default);
app.use(handle_1.default);
(0, db_1.default)();
app.listen(config_1.default.port, () => {
    console.log(`http://localhost:${config_1.default.port}`);
});
