declare const PrintController: {
    GetUnprinted(req: any, res: any): Promise<any>;
    PrintRemains(req: any, res: any): Promise<any>;
};
export default PrintController;
