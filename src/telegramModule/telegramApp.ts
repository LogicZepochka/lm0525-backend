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
            const opts = {
                reply_markup: {
                    keyboard: [
                        [{text: 'Отправить свой номер телефона',request_contact: true}]
                    ],
                    resize_keyboard: true
                }
            };
            await this.bot.sendMessage(
                msg.chat.id,
                "Привет! Пожалуйста, для начала работы отправь свой номер телефона.\n\
                \n\
                Это позволит мне верифицировать тебя.\n\
                Обрати внимание, что твой номер телефона должен быть привязан к Телеграмму. Иначе выполнить подтверждение не получится",
                opts
            )
        });

        this.bot.on("contact",async (contact) => {
            try {
                if(!contact.contact?.user_id|| contact.contact?.user_id != contact.chat?.id) {
                    await this.bot.sendMessage(
                    contact.chat.id,
                    "Ты отправил не свой номер телефона, или твой номер телефона не привязан к твоему телеграмм. Проверь номер и попробуй еще раз"
                )
                    return;
                }
                else {
                    let msgToEdit = await this.bot.sendMessage(
                    contact.chat.id,
                    "Получил твой номер, пожалуйста, подожди"
                    ,{parse_mode:'MarkdownV2'});
                    let user = await Prisma.user.findFirst({where:{phone: contact.contact.phone_number}});
                    console.log("User",user);
                    if(!user) {
                        console.log("User not found");
                        await this.bot.editMessageText(
                            "Ты еще не зарегистрировался в LM0525.\n\
                            Зарегистрироваться ты можешь здесь: http://localhost:3000/register",{chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id})
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
                            `Для продолжения связывания аккаунта телеграмм с аккаунтом в LM0525 введи данный код на странице регистрации\n*${code}*`,
                            {parse_mode:'MarkdownV2',chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id}
                        )
                    }
                    else {
                        console.log("Account already activated");
                        await this.bot.editMessageText(
                            "Твой аккаунт уже активирован и связан",{chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id})
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

        await this.bot.sendMessage(User.telegramChat, message);
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
`Привязывание учетной записи телеграмм к LM0525 успешно:\n\
\n\
Связанная учетная запись:\n\
Имя Фамилия: ${user.name}\n\
Магазин: ${user.shopId}\n\
Отдел: ${user.departamentId}\n\

Статус аккаунта: ${user.role == "NOTAPROVED" ? "Ожидает подтверждения менеджером" : "Подтвержден"}`,NotificationLevel.Security);
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