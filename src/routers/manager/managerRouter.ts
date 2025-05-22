import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { managerMiddleware } from "../../middleware/rightsMiddleware";
import ManagerController from "../../controllers/ManagerController";

const ManagerRouter = Express.Router();

ManagerRouter.patch("/user/:id/aprove-user",validateToken,managerMiddleware,ManagerController.AproveUser)

export default ManagerRouter;