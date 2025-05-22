"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartamentUserDTO = void 0;
class DepartamentUserDTO {
    static GenerateArray(users) {
        let result = [];
        for (let user of users) {
            result.push(new DepartamentUserDTO(user));
        }
        return result;
    }
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.shop = user.shopId;
        this.departament = user.departamentId;
        this.lastOnline = user.lastOnline;
    }
}
exports.DepartamentUserDTO = DepartamentUserDTO;
