import { Item, ItemType, Remain, User } from "../../generated/prisma";
import ItemDTO from "./ItemDTO";
import { UserDTO } from "./UserDTO";
export interface Metadata {
    type: ItemType;
}
export interface RollMetadata extends Metadata {
    sizeX: number;
    sizeY: number;
    area: number;
    overlock?: Overlock;
}
export interface LinearMetadata extends Metadata {
    length: number;
}
export interface Overlock {
    length: number;
    price: number;
}
export default class RemainDTO {
    id: string;
    createdAt: Date;
    metadata: RollMetadata | LinearMetadata | null;
    shop: number;
    departament?: number | null;
    item?: ItemDTO | null;
    createdBy?: UserDTO | null;
    constructor(remain: Remain, creator: User, item: Item, metadata: any);
}
