import { Item, Remain } from "../../generated/prisma";
import ItemDTO from "./ItemDTO";
import { RollMetadata, LinearMetadata } from "./RemainDTO";
export default class UnprintedRemainDTO {
    id: string;
    createdAt: Date;
    metadata: RollMetadata | LinearMetadata | null;
    shop: number;
    departament?: number | null;
    item?: ItemDTO | null;
    constructor(remain: Remain, item: Item, metadata: any);
}
