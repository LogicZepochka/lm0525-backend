"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const prisma_1 = __importDefault(require("../tools/prisma"));
const password_hash_1 = require("password-hash");
const JwtUtils_1 = __importDefault(require("../tools/JwtUtils"));
const prisma_2 = require("../../generated/prisma");
const telegramApp_1 = __importDefault(require("../telegramModule/telegramApp"));
const types_2 = require("../telegramModule/types");
const ConfirmUserThrowTelegram_1 = __importDefault(require("../telegramModule/messagePrefabs/ConfirmUserThrowTelegram"));
const RestoreUserMessage_1 = __importDefault(require("../telegramModule/messagePrefabs/RestoreUserMessage"));
const config_1 = __importDefault(require("../config/config"));
const textMessages_json_1 = require("../telegramModule/textMessages.json");
const StringUtils_1 = __importDefault(require("../tools/StringUtils"));
const Logger_1 = __importStar(require("../tools/Logger"));
function hashPassword(password) {
    return (0, password_hash_1.generate)(password);
}
function generateRandomBase64Url(length = 32) {
    // Генерируем случайные байты
    const randomBytes = new Uint8Array(length);
    if (typeof crypto !== 'undefined') {
        crypto.getRandomValues(randomBytes);
    }
    else {
        throw new Error('Crypto API is not available');
    }
    // Преобразуем в Base64
    let base64 = btoa(String.fromCharCode(...randomBytes));
    // Заменяем символы для Base64URL
    return base64
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
const Logger = (0, Logger_1.default)("AUTH-CONTROLLER");
exports.default = new class AuthController {
    async SignIn(req, res) {
        if (!req.body) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        const { phone, password } = req.body;
        if (!phone || !password) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        let user = await prisma_1.default.user.findFirst({
            where: { phone: phone }
        });
        if (!user) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.InvalidCredentials, "Неверный логин пользователя или пароль"));
        }
        if (!(0, password_hash_1.verify)(password, user.password)) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.InvalidCredentials, "Неверный логин пользователя или пароль"));
        }
        let tokens = await JwtUtils_1.default.SignInUser(user);
        await prisma_1.default.user.update({
            where: { id: user.id },
            data: {
                lastOnline: new Date()
            }
        });
        Logger(`Успешная авторизация для пользователя: ${user.name}`);
        var Result = {
            user: { id: user.id, name: user.name, phone: user.phone, role: user.role, shop: user.shopId || 0, departament: user.departamentId || 0 },
            tokens: tokens
        };
        return res.status(200).json(new apiResponse_1.default(200).SetContent(Result));
    }
    async Register(req, res) {
        if (!req.body) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        const { username, password, shop, phone, departament } = req.body;
        if (!username || !password || !shop || !phone || !departament) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        let checkName = await prisma_1.default.user.findFirst({
            where: { phone: phone }
        });
        if (checkName) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.WrongData, "Данный телефон уже зарегистрирован"));
        }
        checkName = await prisma_1.default.user.findFirst({
            where: { name: username }
        });
        if (checkName) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.WrongData, "Данное имя уже зарегистрировано"));
        }
        try {
            let user = await prisma_1.default.user.create({
                data: {
                    name: username,
                    phone: phone,
                    password: hashPassword(password),
                    shopId: shop,
                    departamentId: departament
                },
            });
            let managers = await prisma_1.default.user.findMany({
                where: { shopId: user.shopId, departamentId: user.departamentId, role: prisma_2.Role.MANAGER }
            });
            let admins = await prisma_1.default.user.findMany({
                where: { role: prisma_2.Role.ADMIN }
            });
            let dataToUpdate = [];
            for (let manager of managers) {
                dataToUpdate.push({ userId: manager.id, message: StringUtils_1.default.format(textMessages_json_1.RegistrationMessageForManagers, user.name, user.shopId, user.departamentId, user.phone) });
                await (0, ConfirmUserThrowTelegram_1.default)(manager, user);
            }
            for (let admin of admins) {
                dataToUpdate.push({ userId: admin.id, message: StringUtils_1.default.format(textMessages_json_1.RegistrationMessageForAdmins, user.name, user.shopId, user.departamentId, user.phone) });
                await (0, ConfirmUserThrowTelegram_1.default)(admin, user);
            }
            await prisma_1.default.notification.createMany({ data: dataToUpdate });
            Logger(`Успешная регистрация для пользователя: ${user.name}`);
            return res.status(201).json(new apiResponse_1.default(201).SetMessage("Успешная регистрация"));
        }
        catch (e) {
            console.log(e);
            Logger(`Регистрация провалилась: ${e}`, Logger_1.LoggerMessageType.Warning);
            return res.status(401).json(new apiResponse_1.default(401).SetMessage("Не удалось зарегистрироваться"));
        }
    }
    async Refresh(req, res) {
        console.log("ara", req.body);
        if (!req.body) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        const { token } = req.body;
        if (!token) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        try {
            let tokens = await JwtUtils_1.default.RefreshToken(token);
            if (tokens == null) {
                return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.InvalidToken, "Невалидный токен"));
            }
            return res.status(200).json(new apiResponse_1.default(200).SetContent(tokens));
        }
        catch (e) {
            Logger(`Обновление токена провалилась: ${e}`, Logger_1.LoggerMessageType.Warning);
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.InvalidToken, "Невалидный токен"));
        }
    }
    async CheckAuth(req, res) {
        if (!req.user) {
            return res.status(403).json(new apiResponse_1.default(403).SetError(types_1.ErrorCode.NotAuthorized, "Ошибка при идентификации: авторизируйтесь заново"));
        }
        let user = {
            id: req.user.id,
            name: req.user.name,
            phone: req.user.phone,
            role: req.user.role,
            shop: req.user.shopId || 0,
            departament: req.user.departamentId || 0
        };
        return res.status(200).json(new apiResponse_1.default(200).SetMessage("Авторизация подтверждена").SetContent(user));
    }
    async BindTelegramToAccount(req, res) {
        let { key } = req.body;
        if (!key) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        let result = await telegramApp_1.default.ActivateUserByCode(key);
        if (!result) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Код не верный или истёк его скрок. Начните привязку заново."));
        }
        else {
            Logger(`Успешная привязка токена: ${key}`);
            return res.status(200).json(new apiResponse_1.default(200).SetMessage("Успешное связывание"));
        }
    }
    async RestoreUserAccount(req, res) {
        let { phone } = req.body;
        if (!phone) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        try {
            res.sendStatus(201);
            let user = await prisma_1.default.user.findFirst({ where: { phone: phone } });
            if (!user)
                return;
            const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.ip;
            Logger(`Запущен процесс восстановления пароля для пользователя ${phone} | ${ip}`);
            let newRestorator = await prisma_1.default.passwordResetRequest.create({
                data: {
                    userId: user.id,
                    ip: ip,
                    key: generateRandomBase64Url(64),
                    expiredAt: new Date(Date.now() + 300000)
                }
            });
            await (0, RestoreUserMessage_1.default)(user, `${config_1.default.telegram.FrontEndURL}/resetpassword?token=${newRestorator.key}`);
        }
        catch (e) {
            console.log(e);
        }
    }
    async ValidateResetToken(req, res) {
        let { token } = req.query;
        if (!token) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        console.log(token);
        let restore = await prisma_1.default.passwordResetRequest.findFirst({ where: { key: token } });
        if (!restore) {
            console.log("Токен не найден");
            return res.status(400).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Неверный токен сброса пароля"));
        }
        if (restore.expiredAt.getTime() < Date.now()) {
            console.log("Токен устарел");
            return res.status(404).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.InvalidToken, "Срок действия ссылки истёк"));
        }
        if (restore.isUsed) {
            console.log("Токен уже использован");
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Неверный токен сброса пароля"));
        }
        return res.sendStatus(200);
    }
    async ResetPassword(req, res) {
        let { token, password } = req.body;
        if (!token || !password) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Введеный невалидные данные"));
        }
        let restore = await prisma_1.default.passwordResetRequest.findFirst({ where: { key: token } });
        if (!restore) {
            console.log("Токен не найден");
            return res.status(400).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Неверный токен сброса пароля"));
        }
        if (restore.expiredAt.getTime() < Date.now()) {
            console.log("Токен устарел");
            return res.status(404).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.InvalidToken, "Срок действия ссылки истёк"));
        }
        if (restore.isUsed) {
            console.log("Токен уже использован");
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Неверный токен сброса пароля"));
        }
        let user = await prisma_1.default.user.update({
            where: {
                id: restore.userId
            },
            data: {
                password: hashPassword(password)
            }
        });
        Logger(`Изменение пароля для пользователя ${user.name} (${user.id}) прошло успешно`);
        await telegramApp_1.default.SendNotification(user, `Ваш пароль успешно изменен\\.`, types_2.NotificationLevel.Security);
        await prisma_1.default.passwordResetRequest.update({
            where: { id: restore.id },
            data: { isUsed: true }
        });
        return res.sendStatus(200);
    }
};
