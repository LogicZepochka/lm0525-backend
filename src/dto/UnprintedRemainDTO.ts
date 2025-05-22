import { Item, ItemType, Remain, User } from "../../generated/prisma"
import { ConvertToMetadata } from "../tools/zodSchemas"
import ItemDTO from "./ItemDTO"
import { RollMetadata, LinearMetadata } from "./RemainDTO"
import { UserDTO } from "./UserDTO"


export default class UnprintedRemainDTO {
    
    id: string
    createdAt: Date
    metadata: RollMetadata | LinearMetadata | null
    shop: number
    departament?: number | null
    item?: ItemDTO | null

    constructor(remain: Remain, item: Item, metadata: any) {
        this.id = remain.id
        this.createdAt = remain.createdAt
        this.departament = remain.DepartamentId
        this.shop = remain.shop
        this.metadata = ConvertToMetadata(metadata)
        this.item = new ItemDTO(item);
        console.log(metadata);
    }
}