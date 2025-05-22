import { Role } from "../../generated/prisma";
import { DepartamentUserDTO } from "../dto/DepartamentUserDTO";
import { UserDTO } from "../dto/UserDTO";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import Telegram from "../telegramModule/telegramApp";
import { NotificationLevel } from "../telegramModule/types";
import Prisma from "../tools/prisma";



const UserController = new class UserController {
    async GetOneUser(req: any, res: any) {
        const userId = Number(req.params.id);
        let userData = await Prisma.user.findFirst({where: {id:userId}});
        if(!userData) {
            return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Пользователь не найден"));
        }

        let dto = new UserDTO(userData);
        return res.status(200).json(new ApiAnswer(200).SetContent(dto));
    }
    
    async RejectActivation(req: any, res: any) {
        const {reason} = req.body;
        const userId = Number(req.params.id);
        let userData = await Prisma.user.findFirst({where: {id:userId}});
        if(!userData) {
            return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Пользователь не найден"));
        }
        if(userData.role != Role.NOTAPROVED) {
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Пользователь не ожидает активации"));
        }
        await Prisma.activationRejection.create({
            data: {
                userId: userId,
                reason: reason
            }
        })

        Telegram.SendNotification(userData,
`Твой аккаунт не был подтвержден. Возможно, ты не работаешь в магазине и отделе, которые ты указал.`, NotificationLevel.Security
        );
        return res.status(200).json(new ApiAnswer(200));
    }

    async GetActivatedUsers(req: any, res: any) {

        let users = await Prisma.user.findMany({
            where:
                {departamentId: req.user.departamentId, shopId: req.user.shopId,NOT:{OR:[{role:Role.NOTAPROVED},{role:Role.BLOCKED}]}}});
        return res.status(200).json(new ApiAnswer(200).SetContent(DepartamentUserDTO.GenerateArray(users)));
    }

    async GetNotActivatedUsers(req: any, res: any) {

        let users = await Prisma.user.findMany({
            where:
                {departamentId: req.user.departamentId, shopId: req.user.shopId,role:Role.NOTAPROVED}});
        return res.status(200).json(new ApiAnswer(200).SetContent(DepartamentUserDTO.GenerateArray(users)));
    }
}

export default UserController;