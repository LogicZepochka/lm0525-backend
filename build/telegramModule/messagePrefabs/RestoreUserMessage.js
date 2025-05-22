"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestoreUserMessage;
const telegramApp_1 = __importDefault(require("../telegramApp"));
async function RestoreUserMessage(User, url) {
    if (!User.telegramChat) {
        console.log("[Telegram Notification] Skipped Telegram Notification: User is not cofirmed");
        return;
    }
    await telegramApp_1.default.bot.sendMessage(User.telegramChat, `Получен запрос на восстановление пароля\n\n\
Если это не Вы, проигнорируйте это сообщение.`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Восстановить пароль', url: url }]
            ],
            one_time_keyboard: true
        }
    });
}
