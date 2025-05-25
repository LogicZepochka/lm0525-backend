import dotenv from "dotenv";

dotenv.config();

interface DataBaseConfig {
    host: string,
    port?: number,
    user: string,
    password?: string,
    database: string
}

interface AutorizationConfig {
    secret: string
}

interface Security {
    key: string,
    password: string
}

interface TelegramBot {
    API: string,
    FrontEndURL: string,
    webhookURL?: string
}

interface Config {
    port: number,
    nodeEnv: string,
    defaultApiPath: string,
    database: DataBaseConfig
    authorization: AutorizationConfig,
    security: Security
    telegram: TelegramBot
}

const config: Config = {
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
        FrontEndURL: process.env.FRONTEND_URL || "127.0.0.1:3000",
        webhookURL: process.env.WEBHOOK_URL
    }
}

export default config;