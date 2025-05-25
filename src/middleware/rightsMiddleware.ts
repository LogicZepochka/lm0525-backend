import { Request } from "express";
import { Role } from "../../generated/prisma";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import { UserTokenized } from "../tools/JwtUtils.types";
import CreateLogger from "../tools/Logger";
import Prisma from "../tools/prisma";

const Logger = CreateLogger("RIGHTS-MIDDLEWARE")

export async function adminMiddleware(req: any, res: any, next: any) {
    if(!req.user) {
            return res.status(403).json(
                new ApiAnswer(403).SetError(ErrorCode.NotAllowed,"Недостаточно прав для выполнения операции")
            );
        }
        const user = req.user as UserTokenized;
        let userData = await Prisma.user.findFirst({where: {id: user.id}});
        if(userData?.role != Role.ADMIN) {
            Logger(`Попытка доступа к админ действиям: ${req.userData.name} | ${req.route}`)
            return res.status(403).json(
                new ApiAnswer(403).SetError(ErrorCode.NotAllowed,"Недостаточно прав для выполнения операции")
            );
        }
    next();
}

export async function managerMiddleware(req: any, res: any, next: any) {
    if(!req.user) {
            return res.status(403).json(
                new ApiAnswer(403).SetError(ErrorCode.NotAllowed,"Недостаточно прав для выполнения операции")
            );
        }
        const user = req.user as UserTokenized;
        let userData = await Prisma.user.findFirst({where: {id: user.id}});
        if(userData?.role == Role.ADMIN) return next();
        if(userData?.role != Role.MANAGER) {
            Logger(`Попытка доступа к менеджерским действиям: ${req.userData.name} | ${req.route}`)
            return res.status(403).json(
                new ApiAnswer(403).SetError(ErrorCode.NotAllowed,"Недостаточно прав для выполнения операции")
            );
        }
    next();
}

export async function userMiddleware(req: any, res: any, next: any) {
    if(!req.user) {
            return res.status(403).json(
                new ApiAnswer(403).SetError(ErrorCode.NotAllowed,"Недостаточно прав для выполнения операции: требуется подтверждение учетной записи администратором")
            );
        }
        const user = req.user as UserTokenized;
        let userData = await Prisma.user.findFirst({where: {id: user.id}});
        if(userData?.role == Role.NOTAPROVED) {
            return res.status(403).json(
                new ApiAnswer(403).SetError(ErrorCode.NotAllowed,"Недостаточно прав для выполнения операции: требуется подтверждение учетной записи администратором")
            );
        }
    next();
}