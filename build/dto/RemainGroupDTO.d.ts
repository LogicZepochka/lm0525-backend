import RemainDTO from "./RemainDTO";
export default class RemainGroupDTO {
    code: string;
    name: string;
    remains: RemainDTO[];
    total: number;
    shop: number;
    departament?: number | null;
    constructor(lmcode: string, name: string, shop: number, departament: number);
    AddRemainToGroup(remain: RemainDTO): void;
}
