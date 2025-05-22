import TelegramBot from "node-telegram-bot-api";
import { Role } from "../../generated/prisma";
import Prisma from "../tools/prisma";
import Telegram from "./telegramApp";
import { NotificationLevel } from "./types";




export default function AddApproveCallback(bot: TelegramBot) {

    bot.on('callback_query',async (ctx) => {
        if(!ctx.data)
            return;
        let data = ctx.data?.split(":");
        if(data[0] !== "approve" && data[0] !== "block")
            return;
        let userId = Number.parseInt(data[1]);
        let adminId = Number.parseInt(data[2]);
        
        let admin = await Prisma.user.findFirst({where:{id: adminId}});
        if(!admin) {
            await bot.editMessageText('Что-то пошло не так',{chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined});
            return;
        }
        let user = await Prisma.user.findFirst({where:{id: userId}});
        if(!user) {
            await bot.editMessageText('Пользователя не существует',{chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined});
            return;
        }

        if(data[0] === 'approve') {
            await Prisma.user.update({
                where: {id: user.id},
                data: {
                    role: Role.USER
                }
            });

            Telegram.SendNotification(user,
                `Твой аккаунт был подтвержден. Теперь ты можешь пользоваться приложением`, NotificationLevel.Security
            );
            await bot.editMessageText('Пользователь подтверждён',{chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined});

        }
        else {
            await Prisma.user.update({
                where: {id: user.id},
                data: {
                    role: Role.BLOCKED
                }
            });

            Telegram.SendNotification(user,
                `Твой аккаунт не был подтверждён. Убедись, что твои учётные данные были введены верно.`, NotificationLevel.Security
            );
            await bot.editMessageText('Пользователь заблокирован',{chat_id: ctx.message?.chat.id, message_id: ctx.message?.message_id, reply_markup: undefined});

        }
    });
}