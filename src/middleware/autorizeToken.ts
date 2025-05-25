import { NextFunction, Request, Response } from "express";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import JwtUtils from "../tools/JwtUtils";
import Prisma from "../tools/prisma";
import moment from "moment";

export async function validateToken(req: any, res: any, next: any) {
    try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.NotAuthorized,"Требуется авторизация"));
    }
    let user = await JwtUtils.ValidateToken(token);
    if(!user) {
        return res.status(403).json(new ApiAnswer(401).SetError(ErrorCode.AccessTokenExpired,"Неверный или неактуальный токен"));
    }
    req.user = await Prisma.user.findFirst({where: {id: user.id}});
    await Prisma.user.update({
        where:{id:req.user.id},
        data:{
            lastOnline: moment(new Date()).utc().toDate()
        }
    })
    next();
    }
    catch {
        return res.status(403).json(new ApiAnswer(401).SetError(ErrorCode.AccessTokenExpired,"Неверный или неактуальный токен"));
    }
}