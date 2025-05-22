import { Item, ItemType, Remain, User } from "../../generated/prisma"
import ItemDTO from "./ItemDTO"
import RemainDTO, { LinearMetadata, RollMetadata } from "./RemainDTO"
import { UserDTO } from "./UserDTO"

export default class RemainGroupDTO {
    
    code: string
    name: string
    remains: RemainDTO[]
    total: number
    shop: number
    departament?: number | null

    constructor(lmcode: string,name:string,shop: number,departament:number) {
        this.name = name
        this.total = 0
        this.shop = shop
        this.departament = departament
        this.remains = []
        this.code = lmcode
    }

    AddRemainToGroup(remain: RemainDTO) {
        console.log("RemainAdd",remain)
        if(remain.metadata?.type == ItemType.Rope) {
            this.total += (remain.metadata as LinearMetadata).length;
        }
        else {
            this.total += (remain.metadata as RollMetadata).sizeX * (remain.metadata as RollMetadata).sizeY;
        }
        this.remains.push(remain);
    }
}