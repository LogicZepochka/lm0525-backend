"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationDTO_1 = __importDefault(require("../dto/NotificationDTO"));
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const prisma_1 = __importDefault(require("../tools/prisma"));
const NotificationController = new class NotificationController {
    async GetUnreadedNotifications(req, res) {
        let unreaded = await prisma_1.default.notification.findMany({
            where: { userId: req.user.id, Readed: false, showed: null }
        });
        if (unreaded.length == 0) {
            return res.sendStatus(204);
        }
        else {
            await prisma_1.default.notification.updateMany({
                where: { userId: req.user.id, showed: null },
                data: { showed: new Date() }
            });
            let dtoArr = [];
            for (let notification of unreaded) {
                let dto = new NotificationDTO_1.default(notification);
                dtoArr.push(dto);
            }
            return res.status(200).json(new apiResponse_1.default(200).SetContent(unreaded));
        }
    }
    async GetNotifications(req, res) {
        let notif = await prisma_1.default.notification.findMany({
            where: { userId: req.user.id }
        });
        if (notif.length == 0) {
            return res.sendStatus(204);
        }
        else {
            let dtoArr = [];
            for (let notification of notif) {
                let dto = new NotificationDTO_1.default(notification);
                dtoArr.push(dto);
            }
            return res.status(200).json(new apiResponse_1.default(200).SetContent(dtoArr));
        }
    }
    async DeleteNotif(req, res) {
        await prisma_1.default.notification.delete({
            where: { userId: req.user.id, id: Number(req.query.id) }
        });
        return res.sendStatus(204);
    }
};
exports.default = NotificationController;
