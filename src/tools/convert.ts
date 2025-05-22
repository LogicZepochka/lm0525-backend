import { Request } from "express";
import { ItemType } from "../../generated/prisma";
import { Pagination } from "../controllers/ItemsController";
import Prisma from "./prisma";


export function GetTypeName(type: ItemType): string {
    switch(type) {
        case ItemType.Dorozhka: return "Ковровая дорожка"
        case ItemType.Kovrolin: return "Ковролин"
        case ItemType.Linoleym: return "Линолеум"
        case ItemType.Rezina: return "Резиновое покрытие"
        case ItemType.Trava: return "Травяное покрытие"
    }

    return "Неизвестно"
}

export function CreatePaginatorFromRequest(req: Request, count: number): Pagination {
    const page: number = Number(req.query.page) || 0;
    const offset: number = Number(req.query.offset) || 10;
    const next: boolean = !((page+1) * offset > count);
    const paginationInfo: Pagination = {
        page: page,
        offset: offset,
        count: count,
        next: next
    };

    return paginationInfo;
}