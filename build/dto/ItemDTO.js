"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = require("../tools/convert");
class ItemDTO {
    constructor(item) {
        this.lmcode = item.code;
        this.name = item.name;
        this.departament = item.departamentId;
        this.type = (0, convert_1.GetTypeName)(item.type);
    }
}
exports.default = ItemDTO;
