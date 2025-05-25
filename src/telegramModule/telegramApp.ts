import TelegramBot from "node-telegram-bot-api";
import config from "../config/config";
import { ActivationPair, TelegramSettings, NotificationLevel } from "./types";
import { User } from "../../generated/prisma";
import Prisma from "../tools/prisma";
import AddApproveCallback from "./callbacks";

function generateRandomFiveDigitNumber(): number {
  const min = 10000;
  const max = 99999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Telegram = new class Telegam {

    bot: TelegramBot
    activationPairs: Map<string,ActivationPair>

    constructor() {
        this.bot = new TelegramBot(config.telegram.API,{polling: true});
        
        this.activationPairs = new Map<string,ActivationPair>();
        console.log("TELEGRAM ENABLED")
        AddApproveCallback(this.bot);

        this.bot.onText(/\/start/,async (msg) => {
            const opts: TelegramBot.SendMessageOptions = {
                reply_markup: {
                    keyboard: [
                        [{text: 'Отправить свой номер телефона',request_contact: true}]
                    ],
                    resize_keyboard: true
                },
                parse_mode: 'MarkdownV2'
            };
            await this.bot.sendMessage(
                msg.chat.id,
                (
"Привет\\!\n\n\
Пожалуйста, для начала работы отправь свой номер телефона\\.\n\n\
_Для этого нажми на кнопку снизу под строкой ввода сообщения_\n\
Это позволит мне верифицировать тебя\\.\n\
\n\
\n\
Обрати внимание, что твой номер телефона должен быть привязан к Телеграмму\\. Иначе выполнить подтверждение не получится"),
                opts
            )
        });

        this.bot.on("contact",async (contact) => {
            try {
                if(!contact.contact?.user_id|| contact.contact?.user_id != contact.chat?.id) {
                    await this.bot.sendMessage(
                    contact.chat.id,
`‼️ Ты отправил не свой номер телефона, либо твой номер телефона не привязан к твоему телеграмм аккаунту\\.\n\n\
Пожалуйста, убедись что отправляешь правильный номер, либо выполни регистрацию на номер, привязанный к телеграмм\\.`
                    ,{parse_mode:'MarkdownV2'}
                )
                    return;
                }
                else {
                    let msgToEdit = await this.bot.sendMessage(
                    contact.chat.id,
                    "_Получил твой номер, пожалуйста, подожди\\.\\.\\._"
                    ,{parse_mode:'MarkdownV2'});
                    let user = await Prisma.user.findFirst({where:{phone: contact.contact.phone_number}});
                    console.log("User",user);
                    if(!user) {
                        console.log("User not found");
                        await this.bot.editMessageText(
`Ты еще не зарегистрировался в LM0525.\n\
Зарегистрироваться ты можешь здесь: ${config.telegram.FrontEndURL}/register`,{chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id,
    reply_markup: {
        inline_keyboard: [
            [{text:"Зарегистрироваться",url:`${config.telegram.FrontEndURL}/register`}]
        ]
    }
})
                        return;
                    }
                    console.log("User found");
                    if(!user?.telegramChat) {
                        let code: string = generateRandomFiveDigitNumber().toString();
                        console.log("Activation code created:",code);
                        this.activationPairs.set(code,{
                            phone: contact.contact.phone_number,
                            ExpiredIn: Date.now() + 300000,
                            chatId: msgToEdit.chat.id
                        });
                        await this.bot.editMessageText(
`✅ Твой телефон зарегистрирован в LM0525\n\n\
Для продолжения связывания аккаунта телеграмм с аккаунтом в LM0525 введи данный код на странице регистрации\n\
\n\
Код привязки: \`${code}\`\n\n\
_Нажми на код, чтобы скопировать его в буфер обмена_`,

{parse_mode:'MarkdownV2',chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id, reply_markup: {
                inline_keyboard: [
                    [{text:'Перейти на страницу подтверждения',url:`${config.telegram.FrontEndURL}/register/bindTelegram`}]
                ]
            }}
                        )
                    }
                    else {
                        console.log("Account already activated");
                        await this.bot.editMessageText(
"✅ *Твой аккаунт уже активирован и связан*\\.\n\n\
Если ты не помнишь свой пароль \\- воспользуйся функцией _\"Забыл пароль\"_ на странице авторизации",
{chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id,parse_mode:'MarkdownV2'})
                    }
                }
            }
            catch(e) {
                console.log(e);
            }
        });
    }

    async SendNotification(User: User, message: string, Level: NotificationLevel = NotificationLevel.Normal) {
        try {
            console.log("Sending notification");
        if(!User.telegramChat) {
            console.log("[Telegram Notification] Skipped Telegram Notification: User is not cofirmed");
            return;
        }
        let telegramSetting = User.telegramSettings as TelegramSettings;

        if(!telegramSetting.EnableNotifications && Level === NotificationLevel.Normal)  {
            console.log("[Telegram Notification] Skipped Telegram Notification: User disable notification");
            return;
        }

        await this.bot.sendMessage(User.telegramChat, message, {parse_mode:'MarkdownV2'});
        }
        catch(e) {
            console.log("Failed to send notification: ",e);
        }
    }
    

    async ActivateUserByCode(code: string): Promise<boolean> {
        console.log("binding: code is ",code);
        if(this.activationPairs.has(code)) {
            let activator = this.activationPairs.get(code);
            if(!activator) return false;

            if(activator.ExpiredIn < Date.now()) {
                console.log("failed binding: code is expired");
                return false;
            }
            let settings: TelegramSettings = {
                EnableNotifications: true
            }
            let user = await Prisma.user.update({where:{phone:activator.phone},data:{telegramChat:activator.chatId.toString(), telegramSettings: settings}});
            this.SendNotification(user,
`✅ *Привязывание к LM0525 успешно:* ✅\n\
\n\
_Связанная учетная запись:_\n\
*Имя Фамилия:* _${user.name.replace(/[.,*\/\-+?:"{}\\]/g, '')}_\n\
*Магазин:* _${user.shopId}_\n\
*Отдел:* _${user.departamentId}_\n\

Статус аккаунта: ${user.role == "NOTAPROVED" ? "🟠 Ожидает подтверждения менеджером" : "🟢 Подтвержден"}`,NotificationLevel.Security);
            this.activationPairs.delete(code);
        }
        else {
            console.log("failed binding: code not found");
            return false;
        }

        return true;
    }
}


export default Telegram;