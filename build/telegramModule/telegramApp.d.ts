import TelegramBot from "node-telegram-bot-api";
import { ActivationPair, NotificationLevel } from "./types";
import { User } from "../../generated/prisma";
declare const Telegram: {
    bot: TelegramBot;
    activationPairs: Map<string, ActivationPair>;
    SendNotification(User: User, message: string, Level?: NotificationLevel): Promise<void>;
    ActivateUserByCode(code: string): Promise<boolean>;
};
export default Telegram;
