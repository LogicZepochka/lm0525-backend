"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const config_1 = __importDefault(require("../config/config"));
const types_1 = require("./types");
const prisma_1 = __importDefault(require("../tools/prisma"));
const callbacks_1 = __importDefault(require("./callbacks"));
const Logger_1 = __importStar(require("../tools/Logger"));
const cluster_1 = __importDefault(require("cluster"));
const process_1 = require("process");
function generateRandomFiveDigitNumber() {
    const min = 10000;
    const max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Logger = (0, Logger_1.default)("TELEGRAM-BOT");
const Telegram = class Telegam {
    constructor() {
        if (cluster_1.default.isPrimary && config_1.default.nodeEnv != "dev") {
            this.activationPairs = new Map();
            this.bot = new node_telegram_bot_api_1.default("");
            return;
        }
        Logger("Creating telegram bot...");
        try {
            this.bot = new node_telegram_bot_api_1.default(config_1.default.telegram.API, { polling: config_1.default.telegram.webhookURL == undefined, webHook: config_1.default.telegram.webhookURL != undefined });
            if (config_1.default.telegram.webhookURL != undefined && config_1.default.nodeEnv != "dev") {
                Logger("FrontEndURL webhook is set. Enabled frontend webhook");
                this.bot.setWebHook(config_1.default.telegram.webhookURL);
            }
            else {
                Logger("FrontEndURL webhook not set. Enabled pooling...");
            }
        }
        catch (e) {
            Logger("Failed to start TelegramBot: " + e, Logger_1.LoggerMessageType.Error);
            (0, process_1.exit)();
        }
        this.activationPairs = new Map();
        (0, callbacks_1.default)(this.bot);
        this.bot.onText(/\/start/, async (msg) => {
            Logger("Запуск комманды start для бота");
            const opts = {
                reply_markup: {
                    keyboard: [
                        [{ text: 'Отправить свой номер телефона', request_contact: true }]
                    ],
                    resize_keyboard: true
                },
                parse_mode: 'MarkdownV2'
            };
            await this.bot.sendMessage(msg.chat.id, ("Привет\\!\n\n\
Пожалуйста, для начала работы отправь свой номер телефона\\.\n\n\
_Для этого нажми на кнопку снизу под строкой ввода сообщения_\n\
Это позволит мне верифицировать тебя\\.\n\
\n\
\n\
Обрати внимание, что твой номер телефона должен быть привязан к Телеграмму\\. Иначе выполнить подтверждение не получится"), opts);
        });
        this.bot.on("contact", async (contact) => {
            try {
                if (!contact.contact?.user_id || contact.contact?.user_id != contact.chat?.id) {
                    await this.bot.sendMessage(contact.chat.id, `‼️ Ты отправил не свой номер телефона, либо твой номер телефона не привязан к твоему телеграмм аккаунту\\.\n\n\
Пожалуйста, убедись что отправляешь правильный номер, либо выполни регистрацию на номер, привязанный к телеграмм\\.`, { parse_mode: 'MarkdownV2' });
                    return;
                }
                else {
                    let msgToEdit = await this.bot.sendMessage(contact.chat.id, "_Получил твой номер, пожалуйста, подожди\\.\\.\\._", { parse_mode: 'MarkdownV2' });
                    let user = await prisma_1.default.user.findFirst({ where: { phone: contact.contact.phone_number } });
                    console.log("User", user);
                    if (!user) {
                        console.log("User not found");
                        await this.bot.editMessageText(`Ты еще не зарегистрировался в LM0525.\n\
Зарегистрироваться ты можешь здесь: ${config_1.default.telegram.FrontEndURL}/register`, { chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id,
                            reply_markup: {
                                inline_keyboard: [
                                    [{ text: "Зарегистрироваться", url: `${config_1.default.telegram.FrontEndURL}/register` }]
                                ]
                            }
                        });
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
                        await this.bot.editMessageText(`✅ Твой телефон зарегистрирован в LM0525\n\n\
Для продолжения связывания аккаунта телеграмм с аккаунтом в LM0525 введи данный код на странице регистрации\n\
\n\
Код привязки: \`${code}\`\n\n\
_Нажми на код, чтобы скопировать его в буфер обмена_`, { parse_mode: 'MarkdownV2', chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id, reply_markup: {
                                inline_keyboard: [
                                    [{ text: 'Перейти на страницу подтверждения', url: `${config_1.default.telegram.FrontEndURL}/register/bindTelegram` }]
                                ]
                            } });
                    }
                    else {
                        console.log("Account already activated");
                        await this.bot.editMessageText("✅ *Твой аккаунт уже активирован и связан*\\.\n\n\
Если ты не помнишь свой пароль \\- воспользуйся функцией _\"Забыл пароль\"_ на странице авторизации", { chat_id: msgToEdit.chat.id, message_id: msgToEdit.message_id, parse_mode: 'MarkdownV2' });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
        Logger("Бот готов к работе");
    }
    async SendNotification(User, message, Level = types_1.NotificationLevel.Normal) {
        try {
            Logger(`Отправляем оповещение пользователю ${User.name}`);
            if (!User.telegramChat) {
                Logger(`Пропускаем отправку пользователю ${User.name}: аккаунт не привязан к телеграму`);
                return;
            }
            let telegramSetting = User.telegramSettings;
            if (!telegramSetting.EnableNotifications && Level === types_1.NotificationLevel.Normal) {
                Logger(`Пропускаем отправку пользователю ${User.name}: отключены оповещения`);
                return;
            }
            await this.bot.sendMessage(User.telegramChat, message, { parse_mode: 'MarkdownV2' });
        }
        catch (e) {
            Logger(`НЕ получилось отправить сообщение ${User.name}: ${e}`);
        }
    }
    async ActivateUserByCode(code) {
        if (this.activationPairs.has(code)) {
            let activator = this.activationPairs.get(code);
            if (!activator)
                return false;
            if (activator.ExpiredIn < Date.now()) {
                return false;
            }
            let settings = {
                EnableNotifications: true
            };
            let user = await prisma_1.default.user.update({ where: { phone: activator.phone }, data: { telegramChat: activator.chatId.toString(), telegramSettings: settings } });
            this.SendNotification(user, `✅ *Привязывание к LM0525 успешно:* ✅\n\
\n\
_Связанная учетная запись:_\n\
*Имя Фамилия:* _${user.name.replace(/[.,*\/\-+?:"{}\\]/g, '')}_\n\
*Магазин:* _${user.shopId}_\n\
*Отдел:* _${user.departamentId}_\n\

Статус аккаунта: ${user.role == "NOTAPROVED" ? "🟠 Ожидает подтверждения менеджером" : "🟢 Подтвержден"}`, types_1.NotificationLevel.Security);
            this.activationPairs.delete(code);
            Logger(`Успешная привязка пользователя ${user.name}`);
        }
        else {
            return false;
        }
        return true;
    }
};
exports.default = new Telegram();
