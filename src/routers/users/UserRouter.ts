import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { managerMiddleware } from "../../middleware/rightsMiddleware";
import ManagerController from "../../controllers/ManagerController";
import UserController from "../../controllers/UsersController";

const UserRouter = Express.Router();

UserRouter.get("/get/user/:id",validateToken,UserController.GetOneUser)
UserRouter.get("/get/activated",validateToken,UserController.GetActivatedUsers)
UserRouter.get("/get/notactivated",validateToken,UserController.GetNotActivatedUsers)

export default UserRouter;