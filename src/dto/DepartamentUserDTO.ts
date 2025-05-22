import { User } from "../../generated/prisma";


export class DepartamentUserDTO {

    static GenerateArray(users: User[]) {
        let result: DepartamentUserDTO[] = [];
        for(let user of users) {
            result.push(new DepartamentUserDTO(user));
        }
        return result;
    }

    id: number
    name: string
    departament: number | null
    shop: number | null
    lastOnline: Date | null

    constructor(user: User) {
        this.id = user.id
        this.name = user.name
        this.shop = user.shopId
        this.departament = user.departamentId
        this.lastOnline = user.lastOnline
    }
    
}