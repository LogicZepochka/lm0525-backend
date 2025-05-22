import { User } from "../../generated/prisma";


export class UserDTO {

    id: number
    name: string
    departament: number | null
    shop: number | null

    constructor(user: User) {
        this.id = user.id
        this.name = user.name
        this.shop = user.shopId
        this.departament = user.departamentId
    }
    
}