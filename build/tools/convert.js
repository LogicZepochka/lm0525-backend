"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTypeName = GetTypeName;
exports.CreatePaginatorFromRequest = CreatePaginatorFromRequest;
const prisma_1 = require("../../generated/prisma");
function GetTypeName(type) {
    switch (type) {
        case prisma_1.ItemType.Dorozhka: return "Ковровая дорожка";
        case prisma_1.ItemType.Kovrolin: return "Ковролин";
        case prisma_1.ItemType.Linoleym: return "Линолеум";
        case prisma_1.ItemType.Rezina: return "Резиновое покрытие";
        case prisma_1.ItemType.Trava: return "Травяное покрытие";
    }
    return "Неизвестно";
}
function CreatePaginatorFromRequest(req, count) {
    const page = Number(req.query.page) || 0;
    const offset = Number(req.query.offset) || 10;
    const next = !((page + 1) * offset > count);
    const paginationInfo = {
        page: page,
        offset: offset,
        count: count,
        next: next
    };
    return paginationInfo;
}
