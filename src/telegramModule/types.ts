

type ActivationPair = {
    phone: string,
    chatId: number,
    ExpiredIn: number
}

type TelegramSettings = {
    EnableNotifications: boolean
}

enum NotificationLevel {
    Normal = "NORMAL",
    Security = "SECRITY"
}


export { ActivationPair, TelegramSettings, NotificationLevel }