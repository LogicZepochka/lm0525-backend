"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddApproveCallback;
const prisma_1 = require("../../generated/prisma");
const prisma_2 = __importDefault(require("../tools/prisma"));
const telegramApp_1 = __importDefault(require("./telegramApp"));
const types_1 = require("./types");
function AddApproveCallback(bot) {
    bot.on('callback_query', async (ctx) => {
        if (!ctx.data)
            return;
        let data = ctx.data?.split(":");
        if (data[0] !== "approve" && data[0] !== "block")
            return;
        let userId = Number.parseInt(data[1]);
        let adminId = Number.parseInt(data[2]);
        let admin = await prisma_2.default.user.findFirst({ where: { id: adminId } });
        if (!admin) {
            await bot.editMessageText('Что-то пошло не так', { chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined });
            return;
        }
        let user = await prisma_2.default.user.findFirst({ where: { id: userId } });
        if (!user) {
            await bot.editMessageText('Пользователя не существует', { chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined });
            return;
        }
        if (data[0] === 'approve') {
            await prisma_2.default.user.update({
                where: { id: user.id },
                data: {
                    role: prisma_1.Role.USER
                }
            });
            telegramApp_1.default.SendNotification(user, `Твой аккаунт был подтвержден. Теперь ты можешь пользоваться приложением`, types_1.NotificationLevel.Security);
            await bot.editMessageText('Пользователь подтверждён', { chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined });
        }
        else {
            await prisma_2.default.user.update({
                where: { id: user.id },
                data: {
                    role: prisma_1.Role.BLOCKED
                }
            });
            telegramApp_1.default.SendNotification(user, `Твой аккаунт не был подтверждён. Убедись, что твои учётные данные были введены верно.`, types_1.NotificationLevel.Security);
            await bot.editMessageText('Пользователь заблокирован', { chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined });
        }
    });
}
