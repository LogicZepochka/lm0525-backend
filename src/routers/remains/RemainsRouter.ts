import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { managerMiddleware } from "../../middleware/rightsMiddleware";
import ManagerController from "../../controllers/ManagerController";
import UserController from "../../controllers/UsersController";
import RemainsController from "../../controllers/RemainsController";

const RemainsRouter = Express.Router();

RemainsRouter.get("/get/:id",validateToken,RemainsController.GetOne)
RemainsRouter.get("/get",validateToken,RemainsController.GetRemainListGrouped)
RemainsRouter.post("/create",validateToken,RemainsController.CreateNewRemains)
RemainsRouter.patch("/:id/sell",validateToken,RemainsController.SellRemain)
RemainsRouter.delete("/:id",validateToken,RemainsController.DeleteRemain)
RemainsRouter.post("/getTargetSize",validateToken,RemainsController.GetRemainsBySize)

export default RemainsRouter;