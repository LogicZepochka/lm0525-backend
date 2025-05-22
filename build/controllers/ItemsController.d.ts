export type Pagination = {
    count: number;
    offset: number;
    page: number;
    next: boolean;
};
export declare function GetOneItem(req: any, res: any): Promise<any>;
export declare function GetList(req: any, res: any): Promise<any>;
export declare function ChangeItemName(req: any, res: any): Promise<void>;
export declare function GetNames(req: any, res: any): Promise<any>;
export declare function CreateNewItem(req: any, res: any): Promise<any>;
