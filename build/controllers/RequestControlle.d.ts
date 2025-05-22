declare const RequestController: {
    CreateRequest(req: any, res: any): Promise<any>;
    GetRequests(req: any, res: any): Promise<any>;
    GetRequest(req: any, res: any): Promise<any>;
    ChangeRequestStatus(req: any, res: any): Promise<any>;
    DeleteRequest(req: any, res: any): Promise<any>;
};
export default RequestController;
