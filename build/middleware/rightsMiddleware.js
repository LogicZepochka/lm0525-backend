"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = adminMiddleware;
exports.managerMiddleware = managerMiddleware;
exports.userMiddleware = userMiddleware;
const prisma_1 = require("../../generated/prisma");
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const Logger_1 = __importDefault(require("../tools/Logger"));
const prisma_2 = __importDefault(require("../tools/prisma"));
const Logger = (0, Logger_1.default)("RIGHTS-MIDDLEWARE");
async function adminMiddleware(req, res, next) {
    if (!req.user) {
        return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAllowed, "Недостаточно прав для выполнения операции"));
    }
    const user = req.user;
    let userData = await prisma_2.default.user.findFirst({ where: { id: user.id } });
    if (userData?.role != prisma_1.Role.ADMIN) {
        Logger(`Попытка доступа к админ действиям: ${req.userData.name} | ${req.route}`);
        return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAllowed, "Недостаточно прав для выполнения операции"));
    }
    next();
}
async function managerMiddleware(req, res, next) {
    if (!req.user) {
        return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAllowed, "Недостаточно прав для выполнения операции"));
    }
    const user = req.user;
    let userData = await prisma_2.default.user.findFirst({ where: { id: user.id } });
    if (userData?.role == prisma_1.Role.ADMIN)
        return next();
    if (userData?.role != prisma_1.Role.MANAGER) {
        Logger(`Попытка доступа к менеджерским действиям: ${req.userData.name} | ${req.route}`);
        return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAllowed, "Недостаточно прав для выполнения операции"));
    }
    next();
}
async function userMiddleware(req, res, next) {
    if (!req.user) {
        return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAllowed, "Недостаточно прав для выполнения операции: требуется подтверждение учетной записи администратором"));
    }
    const user = req.user;
    let userData = await prisma_2.default.user.findFirst({ where: { id: user.id } });
    if (userData?.role == prisma_1.Role.NOTAPROVED) {
        return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAllowed, "Недостаточно прав для выполнения операции: требуется подтверждение учетной записи администратором"));
    }
    next();
}
