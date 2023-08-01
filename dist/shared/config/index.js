"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    port: +process.env.PORT,
    db: {
        host: process.env.DB_HOST,
        port: +process.env.DB_PORT,
        name: process.env.DB_NAME,
    },
};
exports.default = config;
