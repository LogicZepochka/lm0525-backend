"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mocked = void 0;
exports.ConvertTypeToName = ConvertTypeToName;
const prisma_1 = require("../../../generated/prisma");
exports.Mocked = {
    id: "dasfon389f1n30fsafm9102",
    name: "Пошёл нахуй",
    metadata: {
        area: 4,
        type: prisma_1.ItemType.Kovrolin,
        sizeX: 2,
        sizeY: 2,
        overlock: {
            meters: 8,
            price: 120
        }
    },
    itemId: "11221122",
    price: 212,
    type: prisma_1.ItemType.Kovrolin
};
function ConvertTypeToName(type) {
    switch (type) {
        case prisma_1.ItemType.Dorozhka: return "Ковровая дорожка";
        case prisma_1.ItemType.Kovrolin: return "Ковролин";
        case prisma_1.ItemType.Linoleym: return "Линолеум";
        case prisma_1.ItemType.Rezina: return "Резиновое покрытие";
        case prisma_1.ItemType.Rope: return "Веревка";
        case prisma_1.ItemType.Trava: return "Травяное покрытие";
        default: return "Неизвестно";
    }
}
