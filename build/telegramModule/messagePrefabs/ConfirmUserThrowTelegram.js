"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConfirmUserThrowTelegram;
const StringUtils_1 = __importDefault(require("../../tools/StringUtils"));
const telegramApp_1 = __importDefault(require("../telegramApp"));
const textMessages_json_1 = require("../textMessages.json");
async function ConfirmUserThrowTelegram(User, targetUser) {
    if (!User.telegramChat) {
        return;
    }
    await telegramApp_1.default.bot.sendMessage(User.telegramChat, StringUtils_1.default.format(textMessages_json_1.RegistrationMessageForManagers, targetUser.name, targetUser.shopId, targetUser.departamentId, targetUser.phone), {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Подтвердить пользователя', callback_data: `approve:${targetUser.id}:${User.id}` }],
                [{ text: 'Я не знаю этого человека', callback_data: `block:${targetUser.id}:${User.id}` }],
            ],
            one_time_keyboard: true
        },
        parse_mode: 'MarkdownV2'
    });
}
