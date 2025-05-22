"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    port: Number(process.env.PORT),
    nodeEnv: process.env.NODE_ENV || "DEV",
    defaultApiPath: process.env.DEFAULT_API_BASE || "/v2",
    database: {
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT) || 3606,
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_DATABASE || "null"
    },
    authorization: {
        secret: process.env.JWT_SECRET || "secret"
    },
    security: {
        key: process.env.CRYPTO_KEY || "key",
        password: process.env.CRYPTO_SALT || "salt",
    },
    telegram: {
        API: process.env.TELEGRAM_API_KEY || "",
        FrontEndURL: process.env.FRONTEND_URL || "127.0.0.1:3000"
    }
};
exports.default = config;
