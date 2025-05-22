declare const UserController: {
    GetOneUser(req: any, res: any): Promise<any>;
    RejectActivation(req: any, res: any): Promise<any>;
    GetActivatedUsers(req: any, res: any): Promise<any>;
    GetNotActivatedUsers(req: any, res: any): Promise<any>;
};
export default UserController;
