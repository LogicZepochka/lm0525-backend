import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { adminMiddleware, managerMiddleware } from "../../middleware/rightsMiddleware";
import RemainsController from "../../controllers/RemainsController";
import RequestController from "../../controllers/RequestControlle";

const RequestRouter = Express.Router();

RequestRouter.post("/create", validateToken, RequestController.CreateRequest)
RequestRouter.get("/get", validateToken, RequestController.GetRequests)
RequestRouter.get("/:id", validateToken, RequestController.GetRequest)
RequestRouter.patch("/:id/status", validateToken,adminMiddleware, RequestController.ChangeRequestStatus)
RequestRouter.delete("/:id", validateToken, RequestController.DeleteRequest)

export default RequestRouter;