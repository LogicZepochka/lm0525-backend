"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const prisma_2 = __importDefault(require("../tools/prisma"));
const Notifications = new class Notifications {
    async CreateNotificationForUser(message) {
        let notification = await prisma_2.default.notification.create({
            data: {
                message: message.body,
                userId: message.forUser || 0
            }
        });
        return notification;
    }
    async SendNotificationForManagers(message, departamentId, shopId) {
        let managers = await prisma_2.default.user.findMany({
            where: {
                departamentId: departamentId,
                shopId: shopId,
                role: prisma_1.Role.MANAGER
            }
        });
        for (let manager of managers) {
            await this.CreateNotificationForUser({
                body: message.body,
                forUser: manager.id
            });
        }
        return managers;
    }
    async SendNotificationForAdmins(message) {
        let admins = await prisma_2.default.user.findMany({
            where: {
                role: prisma_1.Role.ADMIN
            }
        });
        for (let admin of admins) {
            await this.CreateNotificationForUser({
                body: message.body,
                forUser: admin.id
            });
        }
        return admins;
    }
};
exports.default = Notifications;
