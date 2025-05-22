import { Item, ItemType } from "../../generated/prisma"
import { GetTypeName } from "../tools/convert"

export default class ItemDTO {
    
    lmcode: string
    name: string
    type: string
    departament?: number | null

    constructor(item: Item) {
        this.lmcode = item.code
        this.name = item.name
        this.departament = item.departamentId
        this.type = GetTypeName(item.type)
    }
}