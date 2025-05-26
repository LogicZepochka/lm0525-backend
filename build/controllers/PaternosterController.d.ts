declare const PaternosterController: {
    GetPaternoster(req: any, res: any): Promise<any>;
    CreateReport(req: any, res: any): void;
    GetPaternosters(req: any, res: any): Promise<any>;
    CreatePaternoster(req: any, res: any): Promise<any>;
    DeletePaternoster(req: any, res: any): Promise<any>;
    CreateAxis(req: any, res: any): Promise<any>;
    InstertToAxis(req: any, res: any): Promise<any>;
    RemoveFromAxis(req: any, res: any): Promise<any>;
    DeleteAxis(req: any, res: any): Promise<any>;
};
export default PaternosterController;
