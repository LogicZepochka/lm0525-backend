"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotificationDTO {
    constructor(notif) {
        this.id = notif.id;
        this.readed = notif.Readed;
        this.createdAt = notif.createdAt;
        this.message = notif.message;
    }
}
exports.default = NotificationDTO;
