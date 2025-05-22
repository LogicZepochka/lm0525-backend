import { Notification } from "../../generated/prisma";
export default class NotificationDTO {
    id: number;
    readed: boolean;
    createdAt: Date;
    message: string;
    constructor(notif: Notification);
}
