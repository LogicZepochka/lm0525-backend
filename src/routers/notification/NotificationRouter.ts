import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { managerMiddleware } from "../../middleware/rightsMiddleware";
import ManagerController from "../../controllers/ManagerController";
import UserController from "../../controllers/UsersController";
import NotificationController from "../../controllers/NotificationController";

const NotificationRouter = Express.Router();
NotificationRouter.get("/refresh",validateToken,NotificationController.GetUnreadedNotifications)
NotificationRouter.get("/get",validateToken,NotificationController.GetNotifications)
NotificationRouter.delete("/delete",validateToken,NotificationController.DeleteNotif)

export default NotificationRouter;