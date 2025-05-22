"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const telegramApp_1 = __importDefault(require("../telegramModule/telegramApp"));
const types_2 = require("../telegramModule/types");
const prisma_2 = __importDefault(require("../tools/prisma"));
const ManagerController = new class ManagerController {
    async AproveUser(req, res) {
        const userId = Number(req.params.id);
        const currentUser = req.user;
        let targetUser = await prisma_2.default.user.findFirst({
            where: { id: userId }
        });
        if (!targetUser) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Пользователь с таким ID не найден"));
        }
        if (targetUser.role != prisma_1.Role.NOTAPROVED) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.NotAllowed, "Данный пользователь уже подтвержден"));
        }
        if (currentUser.role == prisma_1.Role.MANAGER) {
            if (targetUser.departamentId != currentUser.departamentId || targetUser.shopId != currentUser.shopId) {
                return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAllowed, "Нет прав на подтверждение данного пользователя: магазин и/или отдел отличаются"));
            }
        }
        let user = await prisma_2.default.user.update({
            where: { id: targetUser.id },
            data: {
                role: prisma_1.Role.USER
            }
        });
        telegramApp_1.default.SendNotification(user, `Твой аккаунт был подтвержден. Теперь ты можешь пользоваться приложением`, types_2.NotificationLevel.Security);
        return res.sendStatus(204);
    }
};
exports.default = ManagerController;
