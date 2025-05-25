import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { managerMiddleware } from "../../middleware/rightsMiddleware";
import ManagerController from "../../controllers/ManagerController";
import UserController from "../../controllers/UsersController";
import SystemController from "../../controllers/SystemController";

const SystemRouter = Express.Router();

SystemRouter.get("/info",SystemController.ApiManifest)

export default SystemRouter;