import { Role, User } from "../../generated/prisma";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import Telegram from "../telegramModule/telegramApp";
import { NotificationLevel } from "../telegramModule/types";
import Prisma from "../tools/prisma";


const ManagerController = new class ManagerController {
     
    async AproveUser(req: any, res: any) {
        const userId = Number(req.params.id);
        const currentUser: User = req.user;
        let targetUser = await Prisma.user.findFirst({
            where: {id: userId}
        });
        if(!targetUser) {
            return res.status(404).json(
                new ApiAnswer(404).SetError(ErrorCode.NotFound,"Пользователь с таким ID не найден")
            );
        }
        if(targetUser.role != Role.NOTAPROVED) {
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.NotAllowed,"Данный пользователь уже подтвержден")
            );
        }
        if(currentUser.role == Role.MANAGER) {
            if(targetUser.departamentId != currentUser.departamentId || targetUser.shopId != currentUser.shopId) {
                return res.status(403).json(
                    new ApiAnswer(403).SetError(ErrorCode.NotAllowed,"Нет прав на подтверждение данного пользователя: магазин и/или отдел отличаются")
                );
            }
        }
        let user = await Prisma.user.update({
            where: {id: targetUser.id},
            data: {
                role: Role.USER
            }
        });

        Telegram.SendNotification(user,
`Твой аккаунт был подтвержден. Теперь ты можешь пользоваться приложением`, NotificationLevel.Security
        );
        return res.sendStatus(204);
    }
}

export default ManagerController;