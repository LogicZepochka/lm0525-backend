"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const app_1 = __importDefault(require("./app"));
const telegramApp_1 = __importDefault(require("./telegramModule/telegramApp"));
const TelegramBot = telegramApp_1.default;
if (config_1.default.authorization.secret == "secret") {
    console.error("ERROR: JWT_SECRET is not set");
}
app_1.default.listen(config_1.default.port, (err) => {
    console.log(`[SERVER] Server started at port ${config_1.default.port}`);
});
console.log("DEBUG TESTS");
