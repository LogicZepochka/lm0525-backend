"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = validateToken;
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const JwtUtils_1 = __importDefault(require("../tools/JwtUtils"));
const prisma_1 = __importDefault(require("../tools/prisma"));
const moment_1 = __importDefault(require("moment"));
async function validateToken(req, res, next) {
    try {
        console.log("[AUTH] Validating token...");
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.NotAuthorized, "Требуется авторизация"));
        }
        let user = await JwtUtils_1.default.ValidateToken(token);
        if (!user) {
            return res.status(403).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.AccessTokenExpired, "Неверный или неактуальный токен"));
        }
        console.log("[Access-Contoll] Validated token for " + user.name);
        req.user = await prisma_1.default.user.findFirst({ where: { id: user.id } });
        await prisma_1.default.user.update({
            where: { id: req.user.id },
            data: {
                lastOnline: (0, moment_1.default)(new Date()).utc().toDate()
            }
        });
        next();
    }
    catch {
        return res.status(403).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.AccessTokenExpired, "Неверный или неактуальный токен"));
    }
}
