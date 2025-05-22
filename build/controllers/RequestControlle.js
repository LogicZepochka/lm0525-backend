"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
const ToolRequestDTO_1 = __importDefault(require("../dto/ToolRequestDTO"));
const Notifications_1 = __importDefault(require("../notifications/Notifications"));
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const convert_1 = require("../tools/convert");
const prisma_2 = __importDefault(require("../tools/prisma"));
const RequestController = new class RequestController {
    async CreateRequest(req, res) {
        const { toolName, description, howToContact, departamentId } = req.body;
        const currentUser = req.user;
        try {
            const request = await prisma_2.default.toolRequest.create({
                data: {
                    toolName, description, howToContact, userId: currentUser.id, departamentId: departamentId
                }
            });
            await Notifications_1.default.SendNotificationForAdmins({
                body: `Пользователь ${currentUser.name} создал предложение: ${toolName}`
            });
            await Notifications_1.default.CreateNotificationForUser({
                body: `Твоё предложение успешно отправлено.<br/><br/>В ближайшее время оно будет рассмотрено.`,
                forUser: currentUser.id,
                link: {
                    url: `/others/toolsRequest`,
                    text: "Ты можешь отслеживать статус здесь"
                }
            });
            return res.status(200).json(new apiResponse_1.default(200));
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Ошибка при создании предложения"));
        }
    }
    async GetRequests(req, res) {
        const currentUser = req.user;
        const count = await prisma_2.default.toolRequest.count();
        const paginator = (0, convert_1.CreatePaginatorFromRequest)(req, count);
        try {
            const requests = await prisma_2.default.toolRequest.findMany({
                where: {
                    IsDeleted: false
                },
                include: {
                    ForUser: true
                },
                skip: paginator.page * paginator.offset,
                take: paginator.offset
            });
            const dto = requests.map(request => ToolRequestDTO_1.default.fromEntity(request, request.ForUser));
            return res.status(200).json(new apiResponse_1.default(200).SetContent({
                pagination: paginator,
                data: dto
            }));
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Ошибка при получении предложений"));
        }
    }
    async GetRequest(req, res) {
        const { id } = req.params;
        const currentUser = req.user;
        try {
            const request = await prisma_2.default.toolRequest.findUnique({
                where: { id: Number(id), IsDeleted: false },
                include: {
                    ForUser: true
                }
            });
            if (!request) {
                return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Предложение не найдено"));
            }
            const dto = ToolRequestDTO_1.default.fromEntity(request, request.ForUser);
            return res.status(200).json(new apiResponse_1.default(200).SetContent(dto));
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Ошибка при получении предложения"));
        }
    }
    async ChangeRequestStatus(req, res) {
        const Data = {
            newStatus: req.body.status,
            rejectReason: req.body.rejectReason || ""
        };
        const { id } = req.params;
        const currentUser = req.user;
        try {
            let request;
            if (req.body.status == prisma_1.RequestStatus.REJECTED) {
                request = await prisma_2.default.toolRequest.update({
                    where: { id: Number(id) },
                    data: {
                        status: Data.newStatus,
                        RejectionReason: Data.rejectReason
                    }
                });
                await Notifications_1.default.CreateNotificationForUser({
                    body: `Твоё предложение  "${request.toolName}" было отклонено.<br/> Причина:<br/> ${Data.rejectReason}`,
                    forUser: request.userId
                });
            }
            else {
                request = await prisma_2.default.toolRequest.update({
                    where: { id: Number(id) },
                    data: {
                        status: Data.newStatus
                    }
                });
                await Notifications_1.default.CreateNotificationForUser({
                    body: `Статус твоего предложения ${request.toolName} было изменено на ${Data.newStatus}`,
                    forUser: request.userId
                });
            }
            return res.status(200).json(new apiResponse_1.default(200));
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Ошибка при изменении статуса предложения"));
        }
    }
    async DeleteRequest(req, res) {
        const { id } = req.params;
        try {
            let item = await prisma_2.default.toolRequest.update({
                where: { id: Number(id) },
                data: {
                    IsDeleted: true
                }
            });
            return res.status(200).json(new apiResponse_1.default(200));
        }
        catch (error) {
            console.log(error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Ошибка при удалении предложения"));
        }
    }
};
exports.default = RequestController;
