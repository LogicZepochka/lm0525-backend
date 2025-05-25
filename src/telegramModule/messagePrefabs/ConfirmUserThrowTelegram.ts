import { User } from "../../../generated/prisma";
import StringUtils from "../../tools/StringUtils";
import Telegram from "../telegramApp";
import {RegistrationMessageForManagers , RegistrationMessageForAdmins} from "../textMessages.json";


export default async function ConfirmUserThrowTelegram(User: User, targetUser: User) {
    if(!User.telegramChat) {
        return;
    }
    await Telegram.bot.sendMessage(User.telegramChat,
    StringUtils.format(RegistrationMessageForManagers,targetUser.name,targetUser.shopId,targetUser.departamentId,targetUser.phone),
        {
            reply_markup: {
                inline_keyboard: [
                    [{text:'Подтвердить пользователя',callback_data:`approve:${targetUser.id}:${User.id}`}],
                    [{text:'Я не знаю этого человека',callback_data:`block:${targetUser.id}:${User.id}`}],
                ],
                one_time_keyboard: true
            },
            parse_mode: 'MarkdownV2'
        });
} 