import { Request, Response } from "express";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import Prisma from "../tools/prisma";
import { generate, verify } from "password-hash";
import JwtUtils from "../tools/JwtUtils";
import { AuthDataDTO, AuthUserDTO } from "../dto/AuthUserDTO";
import { Role } from "../../generated/prisma";
import Telegram from "../telegramModule/telegramApp";
import { NotificationLevel } from "../telegramModule/types";
import ConfirmUserThrowTelegram from "../telegramModule/messagePrefabs/ConfirmUserThrowTelegram";
import RestoreUserMessage from "../telegramModule/messagePrefabs/RestoreUserMessage";
import config from "../config/config";

import {RegistrationMessageForManagers , RegistrationMessageForAdmins} from "../telegramModule/textMessages.json";
import StringUtils from "../tools/StringUtils";
import CreateLogger, { LoggerMessageType } from "../tools/Logger";

function hashPassword(password: string) {
    return generate(password);
}

function generateRandomBase64Url(length: number = 32): string {
    // Генерируем случайные байты
    const randomBytes = new Uint8Array(length);
    if (typeof crypto !== 'undefined') {
        crypto.getRandomValues(randomBytes);
    } else {
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
const Logger =  CreateLogger("AUTH-CONTROLLER");

export default new class AuthController {
    

    async SignIn(req: any, res: any) {
        if(!req.body) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }
        const { phone, password} = req.body;
        if(!phone || !password) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }
    
        let user = await Prisma.user.findFirst({
            where: { phone: phone}
        });
        if(!user) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.InvalidCredentials,"Неверный логин пользователя или пароль"));
        }
        if(!verify(password,user.password)) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.InvalidCredentials,"Неверный логин пользователя или пароль"));
        }
        let tokens = await JwtUtils.SignInUser(user);
        await Prisma.user.update(
            {
                where: {id: user.id},
                data: {
                    lastOnline: new Date()
                }
            }
        );
        Logger(`Успешная авторизация для пользователя: ${user.name}`)
        var Result: AuthDataDTO = {
            user: {id: user.id, name: user.name, phone: user.phone, role: user.role, shop: user.shopId || 0, departament: user.departamentId || 0},
            tokens: tokens
        }
        return res.status(200).json(new ApiAnswer(200).SetContent(Result));
    }

    async Register(req: any, res: any) {
        if(!req.body) {
            
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }
        const { username, password, shop, phone, departament} = req.body;
        if(!username || !password || !shop || !phone || !departament) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }

        let checkName = await Prisma.user.findFirst({
            where: {phone: phone}
        });
        if(checkName) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.WrongData,"Данный телефон уже зарегистрирован"));
        }
        checkName = await Prisma.user.findFirst({
            where: {name: username}
        });
        if(checkName) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.WrongData,"Данное имя уже зарегистрировано"));
        }

        try {
            let user = await Prisma.user.create({
                data: {
                    name: username,
                    phone: phone,
                    password: hashPassword(password),
                    shopId: shop,
                    departamentId: departament
                },
            });
        
            let managers = await Prisma.user.findMany({
                where: {shopId: user.shopId, departamentId: user.departamentId, role: Role.MANAGER}
            });
            let admins = await Prisma.user.findMany({
                where: {role: Role.ADMIN}
            });
            let dataToUpdate = [];
            for(let manager of managers) {
                dataToUpdate.push(
                    {userId: manager.id, message: StringUtils.format(RegistrationMessageForManagers,user.name,user.shopId,user.departamentId,user.phone)}
                )
                await ConfirmUserThrowTelegram(manager,user);
            }
            for(let admin of admins) {
                dataToUpdate.push(
                    {userId: admin.id, message: StringUtils.format(RegistrationMessageForAdmins,user.name,user.shopId,user.departamentId,user.phone)}
                )
                await ConfirmUserThrowTelegram(admin,user);
            }
            await Prisma.notification.createMany(
                {data: dataToUpdate}
            )
            Logger(`Успешная регистрация для пользователя: ${user.name}`)
            return res.status(201).json(
                new ApiAnswer(201).SetMessage("Успешная регистрация")
            )
        }
        catch(e) {
            console.log(e);
            Logger(`Регистрация провалилась: ${e}`,LoggerMessageType.Warning)
            return res.status(401).json(
                new ApiAnswer(401).SetMessage("Не удалось зарегистрироваться")
            )
        }
    }

    async Refresh(req: any, res: any) {
        if(!req.body) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }
        const { token } = req.body;
        if(!token) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }
        try {
        let tokens = await JwtUtils.RefreshToken(token);
        if(tokens == null) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.InvalidToken,"Невалидный токен"));
        }
        return res.status(200).json(new ApiAnswer(200).SetContent(tokens));
        }
        catch(e) {
            Logger(`Обновление токена провалилась: ${e}`,LoggerMessageType.Warning)
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.InvalidToken,"Невалидный токен"));
        }
    }

    async CheckAuth(req: any, res: any) {
        if(!req.user) {
            return res.status(403).json(
                new ApiAnswer(403).SetError(ErrorCode.NotAuthorized,"Ошибка при идентификации: авторизируйтесь заново")
            )
        }

        let user: AuthUserDTO = {
            id: req.user.id,
            name: req.user.name,
            phone: req.user.phone,
            role: req.user.role,
            shop: req.user.shopId || 0, 
            departament: req.user.departamentId || 0
        }
        return res.status(200).json(
            new ApiAnswer(200).SetMessage("Авторизация подтверждена").SetContent(user)
        )
    }

    async BindTelegramToAccount(req: any, res: any) {

        let {key} = req.body;
        if(!key) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }
        
        let result = await Telegram.ActivateUserByCode(key);
        if(!result) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Код не верный или истёк его скрок. Начните привязку заново."));
        }
        else {
            Logger(`Успешная привязка токена: ${key}`)
            return res.status(200).json(new ApiAnswer(200).SetMessage("Успешное связывание"));
        }
        
    }

    async RestoreUserAccount(req: any, res: any) {
        let {phone} = req.body;
        if(!phone) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные"));
        }
        try {
        res.sendStatus(201);
        
        let user = await Prisma.user.findFirst({where:{phone: phone}});
        if(!user) 
            return;
        const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.ip;
        Logger(`Запущен процесс восстановления пароля для пользователя ${phone} | ${ip}`)
        let newRestorator = await Prisma.passwordResetRequest.create({
            data: {
                userId: user.id,
                ip: ip,
                key: generateRandomBase64Url(64),
                expiredAt: new Date(Date.now() + 300000)
            }
        });

        await RestoreUserMessage(user,`${config.telegram.FrontEndURL}/resetpassword?token=${newRestorator.key}`);
        
        }
        catch(e) {
            console.log(e);
        }
    }

    async ValidateResetToken(req: any, res:any) {
        let {token} = req.query;
        if(!token) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные")); 
        }
        console.log(token)
        let restore = await Prisma.passwordResetRequest.findFirst({where:{key: token}});
        if(!restore) {
            console.log("Токен не найден")
            return res.status(400).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Неверный токен сброса пароля")); 
        }

        if(restore.expiredAt.getTime() < Date.now()) {
            console.log("Токен устарел")
            return res.status(404).json(new ApiAnswer(401).SetError(ErrorCode.InvalidToken,"Срок действия ссылки истёк"));
        }

        if(restore.isUsed) {
            console.log("Токен уже использован")
            return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Неверный токен сброса пароля")); 
        }
        return res.sendStatus(200);
    }

    async ResetPassword(req: any, res:any) {
        let {token,password} = req.body;
        if(!token || !password) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Введеный невалидные данные")); 
        }
        let restore = await Prisma.passwordResetRequest.findFirst({where:{key: token}});
        if(!restore) {
            console.log("Токен не найден")
            return res.status(400).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Неверный токен сброса пароля")); 
        }
        if(restore.expiredAt.getTime() < Date.now()) {
            console.log("Токен устарел")
            return res.status(404).json(new ApiAnswer(401).SetError(ErrorCode.InvalidToken,"Срок действия ссылки истёк"));
        }
        if(restore.isUsed) {
            console.log("Токен уже использован")
            return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Неверный токен сброса пароля")); 
        }

        let user = await Prisma.user.update(
        {
            where:{
                id: restore.userId
            },
            data: {
                password: hashPassword(password)
            }
        })
        
        Logger(`Изменение пароля для пользователя ${user.name} (${user.id}) прошло успешно`)
        await Telegram.SendNotification(user,
`Ваш пароль успешно изменен\\.`,NotificationLevel.Security
        );
        await Prisma.passwordResetRequest.update({
            where:{id: restore.id},
            data:{isUsed: true}
        })
        return res.sendStatus(200);
    }
}