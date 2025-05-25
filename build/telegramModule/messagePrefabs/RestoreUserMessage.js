"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestoreUserMessage;
const telegramApp_1 = __importDefault(require("../telegramApp"));
const textMessages_json_1 = require("../textMessages.json");
async function RestoreUserMessage(User, url) {
    if (!User.telegramChat) {
        return;
    }
    await telegramApp_1.default.bot.sendMessage(User.telegramChat, textMessages_json_1.RecievedRestorePassword, {
        parse_mode: 'MarkdownV2',
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Восстановить пароль', url: url }]
            ],
            one_time_keyboard: true
        }
    });
}
