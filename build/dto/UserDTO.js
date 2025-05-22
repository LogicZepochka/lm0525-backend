"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
class UserDTO {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.shop = user.shopId;
        this.departament = user.departamentId;
    }
}
exports.UserDTO = UserDTO;
