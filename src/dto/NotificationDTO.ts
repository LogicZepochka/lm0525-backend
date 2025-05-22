import { Notification } from "../../generated/prisma"


export default class NotificationDTO {
    id: number
    readed: boolean
    createdAt: Date
    message: string

    constructor(notif: Notification) {
        this.id = notif.id
        this.readed = notif.Readed
        this.createdAt = notif.createdAt
        this.message = notif.message
    }
}