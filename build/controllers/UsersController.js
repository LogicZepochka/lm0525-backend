"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const DepartamentUserDTO_1 = require("../dto/DepartamentUserDTO");
const UserDTO_1 = require("../dto/UserDTO");
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const telegramApp_1 = __importDefault(require("../telegramModule/telegramApp"));
const types_2 = require("../telegramModule/types");
const prisma_2 = __importDefault(require("../tools/prisma"));
const UserController = new class UserController {
    async GetOneUser(req, res) {
        const userId = Number(req.params.id);
        let userData = await prisma_2.default.user.findFirst({ where: { id: userId } });
        if (!userData) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Пользователь не найден"));
        }
        let dto = new UserDTO_1.UserDTO(userData);
        return res.status(200).json(new apiResponse_1.default(200).SetContent(dto));
    }
    async RejectActivation(req, res) {
        const { reason } = req.body;
        const userId = Number(req.params.id);
        let userData = await prisma_2.default.user.findFirst({ where: { id: userId } });
        if (!userData) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Пользователь не найден"));
        }
        if (userData.role != prisma_1.Role.NOTAPROVED) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Пользователь не ожидает активации"));
        }
        await prisma_2.default.activationRejection.create({
            data: {
                userId: userId,
                reason: reason
            }
        });
        telegramApp_1.default.SendNotification(userData, `Твой аккаунт не был подтвержден. Возможно, ты не работаешь в магазине и отделе, которые ты указал.`, types_2.NotificationLevel.Security);
        return res.status(200).json(new apiResponse_1.default(200));
    }
    async GetActivatedUsers(req, res) {
        let users = await prisma_2.default.user.findMany({
            where: { departamentId: req.user.departamentId, shopId: req.user.shopId, NOT: { OR: [{ role: prisma_1.Role.NOTAPROVED }, { role: prisma_1.Role.BLOCKED }] } }
        });
        return res.status(200).json(new apiResponse_1.default(200).SetContent(DepartamentUserDTO_1.DepartamentUserDTO.GenerateArray(users)));
    }
    async GetNotActivatedUsers(req, res) {
        let users = await prisma_2.default.user.findMany({
            where: { departamentId: req.user.departamentId, shopId: req.user.shopId, role: prisma_1.Role.NOTAPROVED }
        });
        return res.status(200).json(new apiResponse_1.default(200).SetContent(DepartamentUserDTO_1.DepartamentUserDTO.GenerateArray(users)));
    }
};
exports.default = UserController;
