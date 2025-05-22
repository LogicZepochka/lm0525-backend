"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zodSchemas_1 = require("../tools/zodSchemas");
const ItemDTO_1 = __importDefault(require("./ItemDTO"));
const UserDTO_1 = require("./UserDTO");
class RemainDTO {
    constructor(remain, creator, item, metadata) {
        this.id = remain.id;
        this.createdAt = remain.createdAt;
        this.departament = remain.DepartamentId;
        this.shop = remain.shop;
        this.metadata = (0, zodSchemas_1.ConvertToMetadata)(metadata);
        this.item = new ItemDTO_1.default(item);
        this.createdBy = new UserDTO_1.UserDTO(creator);
        console.log(metadata);
    }
}
exports.default = RemainDTO;
