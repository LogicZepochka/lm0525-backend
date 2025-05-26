interface DataBaseConfig {
    host: string;
    port?: number;
    user: string;
    password?: string;
    database: string;
}
interface AutorizationConfig {
    secret: string;
}
interface Security {
    key: string;
    password: string;
}
interface TelegramBot {
    API: string;
    FrontEndURL: string;
    webhookURL?: string;
}
interface Config {
    port: number;
    nodeEnv: string;
    defaultApiPath: string;
    database: DataBaseConfig;
    authorization: AutorizationConfig;
    security: Security;
    telegram: TelegramBot;
}
declare const config: Config;
export default config;
