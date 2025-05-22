declare const NotificationController: {
    GetUnreadedNotifications(req: any, res: any): Promise<any>;
    GetNotifications(req: any, res: any): Promise<any>;
    DeleteNotif(req: any, res: any): Promise<any>;
};
export default NotificationController;
