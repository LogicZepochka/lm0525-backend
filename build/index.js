"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const app_1 = __importDefault(require("./app"));
const telegramApp_1 = __importDefault(require("./telegramModule/telegramApp"));
const Logger_1 = __importDefault(require("./tools/Logger"));
const Logger = (0, Logger_1.default)("SERVER");
const TelegramBot = telegramApp_1.default;
if (config_1.default.authorization.secret == "secret") {
    Logger("ERROR: JWT_SECRET is not set");
}
app_1.default.listen(config_1.default.port, (err) => {
    Logger(`Server started at port ${config_1.default.port}`);
});
