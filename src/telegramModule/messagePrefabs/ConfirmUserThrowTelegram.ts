import { User } from "../../../generated/prisma";
import Telegram from "../telegramApp";


export default async function ConfirmUserThrowTelegram(User: User, targetUser: User) {
    if(!User.telegramChat) {
        console.log("[Telegram Notification] Skipped Telegram Notification: User is not cofirmed");
        return;
    }
    await Telegram.bot.sendMessage(User.telegramChat,
    `Зарегистрировался новый сотрудник:\n
    ${targetUser.name}\n\n\
    Магазин: ${targetUser.shopId}, Отдел: ${targetUser.departamentId}\n\n`,
        {
            reply_markup: {
                inline_keyboard: [
                    [{text:'Подтвердить пользователя',callback_data:`approve:${targetUser.id}:${User.id}`}],
                    [{text:'Я не знаю этого человека',callback_data:`block:${targetUser.id}:${User.id}`}],
                ],
                one_time_keyboard: true
            }
        });
} 