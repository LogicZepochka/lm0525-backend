import { Item } from "../../generated/prisma";
export default class ItemDTO {
    lmcode: string;
    name: string;
    type: string;
    departament?: number | null;
    constructor(item: Item);
}
