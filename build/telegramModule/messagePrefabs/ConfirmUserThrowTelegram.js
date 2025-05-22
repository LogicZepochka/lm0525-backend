"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConfirmUserThrowTelegram;
const telegramApp_1 = __importDefault(require("../telegramApp"));
async function ConfirmUserThrowTelegram(User, targetUser) {
    if (!User.telegramChat) {
        console.log("[Telegram Notification] Skipped Telegram Notification: User is not cofirmed");
        return;
    }
    await telegramApp_1.default.bot.sendMessage(User.telegramChat, `Зарегистрировался новый сотрудник:\n
    ${targetUser.name}\n\n\
    Магазин: ${targetUser.shopId}, Отдел: ${targetUser.departamentId}\n\n`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Подтвердить пользователя', callback_data: `approve:${targetUser.id}:${User.id}` }],
                [{ text: 'Я не знаю этого человека', callback_data: `block:${targetUser.id}:${User.id}` }],
            ],
            one_time_keyboard: true
        }
    });
}
