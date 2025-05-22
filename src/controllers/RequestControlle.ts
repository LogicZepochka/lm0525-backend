import { RequestStatus, Role, User } from "../../generated/prisma";
import ToolRequestDTO from "../dto/ToolRequestDTO";
import Notifications from "../notifications/Notifications";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import { CreatePaginatorFromRequest } from "../tools/convert";
import Prisma from "../tools/prisma";


const RequestController = new class RequestController {
    
    async CreateRequest(req: any, res: any) {
        const {toolName, description, howToContact, departamentId} = req.body;
        const currentUser: User = req.user;
        try {
            const request = await Prisma.toolRequest.create({
                data: {
                    toolName, description, howToContact, userId: currentUser.id, departamentId: departamentId
                }
            })
            
            await Notifications.SendNotificationForAdmins({
                body: `Пользователь ${currentUser.name} создал предложение: ${toolName}`
            });
            await Notifications.CreateNotificationForUser({
                body: `Твоё предложение успешно отправлено.<br/><br/>В ближайшее время оно будет рассмотрено.`,
                forUser: currentUser.id,
                link: {
                    url: `/others/toolsRequest`,
                    text: "Ты можешь отслеживать статус здесь"
                }
            })
            return res.status(200).json(new ApiAnswer(200));
        } catch (error) {
            console.log(error);
            return res.status(500).json(new ApiAnswer(500).SetError(ErrorCode.InternalError, "Ошибка при создании предложения"));
        }
    }

    async GetRequests(req: any, res: any) {
        const currentUser: User = req.user;
        const count = await Prisma.toolRequest.count();
        const paginator = CreatePaginatorFromRequest(req,count);
        try {
            const requests = await Prisma.toolRequest.findMany({
                where: {
                    IsDeleted: false
                },
                include: {
                    ForUser: true
                },
                skip: paginator.page * paginator.offset,
                take: paginator.offset
            })

            const dto = requests.map(request => ToolRequestDTO.fromEntity(request,request.ForUser));
            return res.status(200).json(new ApiAnswer(200).SetContent({
                pagination: paginator,
                data: dto
            }));
        }
        catch(error) {
            console.log(error);
            return res.status(500).json(new ApiAnswer(500).SetError(ErrorCode.InternalError, "Ошибка при получении предложений"));  
        }
    }

    async GetRequest(req: any, res: any) {
        const {id} = req.params;
        const currentUser: User = req.user;
        try {
            const request = await Prisma.toolRequest.findUnique({
                where: {id: Number(id), IsDeleted: false},
                include: {
                    ForUser: true
                }
            })
            if(!request) {
                return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound, "Предложение не найдено"));
            }
            const dto = ToolRequestDTO.fromEntity(request,request.ForUser);
            return res.status(200).json(new ApiAnswer(200).SetContent(dto));
        }
        catch(error) {
            console.log(error);
            return res.status(500).json(new ApiAnswer(500).SetError(ErrorCode.InternalError, "Ошибка при получении предложения"));
        }
    }

    async ChangeRequestStatus(req: any, res: any) {
        const Data = {
            newStatus: req.body.status,
            rejectReason: req.body.rejectReason || ""
        }
        const {id} = req.params;
        const currentUser: User = req.user;
        try {
            let request;
            if(req.body.status == RequestStatus.REJECTED) {
                request = await Prisma.toolRequest.update({
                    where: {id: Number(id)},
                    data: {
                        status: Data.newStatus,
                        RejectionReason: Data.rejectReason
                    }
                })
                await Notifications.CreateNotificationForUser({
                    body: `Твоё предложение  "${request.toolName}" было отклонено.<br/> Причина:<br/> ${Data.rejectReason}`,
                    forUser: request.userId
                })
            }
            else {
                request = await Prisma.toolRequest.update({
                    where: {id: Number(id)},
                    data: {
                        status: Data.newStatus
                    }
                })
                await Notifications.CreateNotificationForUser({
                    body: `Статус твоего предложения ${request.toolName} было изменено на ${Data.newStatus}`,
                    forUser: request.userId
                })
            }
            
            
            return res.status(200).json(new ApiAnswer(200));
        } catch (error) {
            console.log(error);
            return res.status(500).json(new ApiAnswer(500).SetError(ErrorCode.InternalError, "Ошибка при изменении статуса предложения"));
        }
    }

    async DeleteRequest(req: any, res: any) {
        const {id} = req.params;
        try {
            let item = await Prisma.toolRequest.update({
                where: {id: Number(id)},
                data: {
                    IsDeleted: true
                }
            })
            return res.status(200).json(new ApiAnswer(200));
        } catch (error) {
            console.log(error);
            return res.status(500).json(new ApiAnswer(500).SetError(ErrorCode.InternalError, "Ошибка при удалении предложения"));
        }
    }
}

export default RequestController;