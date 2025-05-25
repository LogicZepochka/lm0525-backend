import { User } from "../../../generated/prisma";
import Telegram from "../telegramApp";

import { RecievedRestorePassword } from "../textMessages.json";

export default async function RestoreUserMessage(User: User, url: string) {
    if(!User.telegramChat) {
        return;
    }
    await Telegram.bot.sendMessage(User.telegramChat,
RecievedRestorePassword,
        {
            parse_mode:'MarkdownV2',
            reply_markup: {
                inline_keyboard: [
                    [{text:'Восстановить пароль',url:url}]
                ],
                one_time_keyboard: true
            }
        });
} 