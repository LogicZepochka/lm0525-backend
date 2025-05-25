import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { managerMiddleware } from "../../middleware/rightsMiddleware";
import ManagerController from "../../controllers/ManagerController";
import UserController from "../../controllers/UsersController";
import SystemController from "../../controllers/SystemController";
import PaternosterController from "../../controllers/PaternosterController";

const PaternosterRouter = Express.Router();

PaternosterRouter.post("/create",validateToken,PaternosterController.CreatePaternoster)
PaternosterRouter.post("/:patern/axis/create",validateToken,PaternosterController.CreateAxis)
PaternosterRouter.post("/:patern/axis/:axis/insert",validateToken,PaternosterController.InstertToAxis)
PaternosterRouter.delete("/:patern/axis/:axis/remove/:id",validateToken,PaternosterController.RemoveFromAxis)
PaternosterRouter.delete("/:patern/axis/:axis",validateToken,PaternosterController.DeleteAxis)

PaternosterRouter.get("/:patern",validateToken,PaternosterController.GetPaternoster)
PaternosterRouter.delete("/:patern",validateToken,PaternosterController.DeletePaternoster)

export default PaternosterRouter;