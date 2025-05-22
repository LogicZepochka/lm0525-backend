"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const config_1 = __importDefault(require("../config/config"));
const types_1 = require("./types");
const prisma_1 = __importDefault(require("../tools/prisma"));
const callbacks_1 = __importDefault(require("./callbacks"));
function generateRandomFiveDigitNumber() {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Telegram = new class Telegam {
    constructor() {
        this.bot = new node_telegram_bot_api_1.default(config_1.default.telegram.API, { polling: true });
        this.activationPairs = new Map();
        console.log("TELEGRAM ENABLED");
        (0, callbacks_1.default)(this.bot);
        this.bot.onText(/\/start/, async (msg) => {
            const opts = {
                reply_markup: {
                    keyboard: [
                        [{ text: 'Отправить свой номер телефона', request_contact: true }]
                    ],
                    resize_keyboard: true
                }
            };
            await this.bot.sendMessage(msg.chat.id, "Привет! Пожалуйста, для начала работы отправь свой номер телефона.\n\
                \n\
                Это позволит мне верифицировать тебя.\n\
                Обрати внимание, что твой номер телефона должен быть привязан к Телеграмму. Иначе выполнить подтверждение не получится", opts);
        });
        this.bot.on("contact", async (contact) => {
            try {
                if (!contact.contact?.user_id || contact.contact?.user_id != contact.chat?.id) {
                    await this.bot.sendMessage(contact.chat.id, "Ты отправил не свой номер телефона, или твой номер телефона не привязан к твоему телеграмм. Проверь номер и попробуй еще раз");
                    return;
                }
                else {
                    let msgToEdit = await this.bot.sendMessage(contact.chat.id, "Получил твой номер, пожалуйста, подожди", { parse_mode: 'MarkdownV2' });
                    let user = await prisma_1.default.user.findFirst({ where: { phone: contact.contact.phone_number } });
                    console.log("User", user);
                    if (!user) {
                        console.log("User not found");
                        await this.bot.editMessageText("Ты еще не зарегистрировался в LM0525.\n\
                            Зарегистрироваться ты можешь здесь: http://localhost:3000/register", { chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id });
                        return;
                    }
                    console.log("User found");
                    if (!user?.telegramChat) {
                        let code = generateRandomFiveDigitNumber().toString();
                        console.log("Activation code created:", code);
                        this.activationPairs.set(code, {
                            phone: contact.contact.phone_number,
                            ExpiredIn: Date.now() + 300000,
                            chatId: msgToEdit.chat.id
                        });
                        await this.bot.editMessageText(`Для продолжения связывания аккаунта телеграмм с аккаунтом в LM0525 введи данный код на странице регистрации\n*${code}*`, { parse_mode: 'MarkdownV2', chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id });
                    }
                    else {
                        console.log("Account already activated");
                        await this.bot.editMessageText("Твой аккаунт уже активирован и связан", { chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    async SendNotification(User, message, Level = types_1.NotificationLevel.Normal) {
        try {
            console.log("Sending notification");
            if (!User.telegramChat) {
                console.log("[Telegram Notification] Skipped Telegram Notification: User is not cofirmed");
                return;
            }
            let telegramSetting = User.telegramSettings;
            if (!telegramSetting.EnableNotifications && Level === types_1.NotificationLevel.Normal) {
                console.log("[Telegram Notification] Skipped Telegram Notification: User disable notification");
                return;
            }
            await this.bot.sendMessage(User.telegramChat, message);
        }
        catch (e) {
            console.log("Failed to send notification: ", e);
        }
    }
    async ActivateUserByCode(code) {
        console.log("binding: code is ", code);
        if (this.activationPairs.has(code)) {
            let activator = this.activationPairs.get(code);
            if (!activator)
                return false;
            if (activator.ExpiredIn < Date.now()) {
                console.log("failed binding: code is expired");
                return false;
            }
            let settings = {
                EnableNotifications: true
            };
            let user = await prisma_1.default.user.update({ where: { phone: activator.phone }, data: { telegramChat: activator.chatId.toString(), telegramSettings: settings } });
            this.SendNotification(user, `Привязывание учетной записи телеграмм к LM0525 успешно:\n\
\n\
Связанная учетная запись:\n\
Имя Фамилия: ${user.name}\n\
Магазин: ${user.shopId}\n\
Отдел: ${user.departamentId}\n\

Статус аккаунта: ${user.role == "NOTAPROVED" ? "Ожидает подтверждения менеджером" : "Подтвержден"}`, types_1.NotificationLevel.Security);
            this.activationPairs.delete(code);
        }
        else {
            console.log("failed binding: code not found");
            return false;
        }
        return true;
    }
};
exports.default = Telegram;
