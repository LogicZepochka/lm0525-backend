"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../../generated/prisma");
class RemainGroupDTO {
    constructor(lmcode, name, shop, departament) {
        this.name = name;
        this.total = 0;
        this.shop = shop;
        this.departament = departament;
        this.remains = [];
        this.code = lmcode;
    }
    AddRemainToGroup(remain) {
        console.log("RemainAdd", remain);
        if (remain.metadata?.type == prisma_1.ItemType.Rope) {
            this.total += remain.metadata.length;
        }
        else {
            this.total += remain.metadata.sizeX * remain.metadata.sizeY;
        }
        this.remains.push(remain);
    }
}
exports.default = RemainGroupDTO;
