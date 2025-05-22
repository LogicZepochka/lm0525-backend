import { Role } from "../../generated/prisma";
import Telegram from "../telegramModule/telegramApp";
import { NotificationLevel } from "../telegramModule/types";
import Prisma from "../tools/prisma";
import { NotificationMessage } from "./notification.types";


const Notifications = new class Notifications {

    async CreateNotificationForUser(message: NotificationMessage) {
        let notification = await Prisma.notification.create({
            data: {
                message: message.body,
                userId: message.forUser || 0
            }
        })
        return notification;
    }
    
    async SendNotificationForManagers(message: NotificationMessage, departamentId: number, shopId: number) {
        let managers = await Prisma.user.findMany({
            where: {
                departamentId: departamentId,
                shopId: shopId,
                role: Role.MANAGER
            }
        })
        for(let manager of managers) {
            await this.CreateNotificationForUser({
                body: message.body,
                forUser: manager.id
            })
        }
        return managers;
    }

    async SendNotificationForAdmins(message: NotificationMessage) {
        let admins = await Prisma.user.findMany({
            where: {
                role: Role.ADMIN
            }
        })
        for(let admin of admins) {
            await this.CreateNotificationForUser({
                body: message.body,
                forUser: admin.id
            })
        }
        return admins;
    }
}

export default Notifications;
