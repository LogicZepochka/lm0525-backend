import { User } from "../../../generated/prisma";
import Telegram from "../telegramApp";


export default async function RestoreUserMessage(User: User, url: string) {
    if(!User.telegramChat) {
        console.log("[Telegram Notification] Skipped Telegram Notification: User is not cofirmed");
        return;
    }
    await Telegram.bot.sendMessage(User.telegramChat,
`Получен запрос на восстановление пароля\n\n\
Если это не Вы, проигнорируйте это сообщение.`,
        {
            reply_markup: {
                inline_keyboard: [
                    [{text:'Восстановить пароль',url:url}]
                ],
                one_time_keyboard: true
            }
        });
} 