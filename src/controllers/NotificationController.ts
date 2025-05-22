import NotificationDTO from "../dto/NotificationDTO";
import { UserDTO } from "../dto/UserDTO";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import Prisma from "../tools/prisma";



const NotificationController = new class NotificationController {
    
    async GetUnreadedNotifications(req: any, res: any) {
        let unreaded = await Prisma.notification.findMany({
            where: {userId: req.user.id, Readed: false,showed: null }
        });
        if(unreaded.length == 0) {
            return res.sendStatus(204);
        }
        else {
            await Prisma.notification.updateMany({
                where: {userId: req.user.id, showed: null},
                data: {showed: new Date()}
            })
            let dtoArr: NotificationDTO[]  = [];
            for(let notification of unreaded) {
                let dto: NotificationDTO = new NotificationDTO(notification);
                dtoArr.push(dto);
            }
            return res.status(200).json(
                new ApiAnswer(200).SetContent(unreaded)
            )
        }
    }

    async GetNotifications(req: any, res: any) {
        let notif = await Prisma.notification.findMany({
            where: {userId: req.user.id }
        });
        

        if(notif.length == 0) {
            return res.sendStatus(204);
        }
        else {
            let dtoArr: NotificationDTO[]  = [];
            for(let notification of notif) {
                let dto: NotificationDTO = new NotificationDTO(notification);
                dtoArr.push(dto);
            }
            return res.status(200).json(
                new ApiAnswer(200).SetContent(dtoArr)
            )
        }
    }

    async DeleteNotif(req: any, res: any) {
        await Prisma.notification.delete({
            where: {userId: req.user.id, id: Number(req.query.id) }
        });
        return res.sendStatus(204);
    }
}

export default NotificationController;