import RemainGroupDTO from "../dto/RemainGroupDTO";
export type HashedRemainsGroup = {
    RemainGroups: RemainGroupDTO[];
    timestamp: number;
};
declare const RemainsController: {
    GetOne(req: any, res: any): Promise<any>;
    GetRemainListGrouped(req: any, res: any): Promise<any>;
    CreateNewRemains(req: any, res: any): Promise<any>;
    SellRemain(req: any, res: any): Promise<any>;
    DeleteRemain(req: any, res: any): Promise<any>;
    GetRemainsBySize(req: any, res: any): Promise<any>;
    GetUnprintedRemains(req: any, res: any): Promise<any>;
};
export default RemainsController;
