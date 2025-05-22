import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import { CreateNewItem, GetList, GetNames, GetOneItem } from "../../controllers/ItemsController";
import { managerMiddleware, userMiddleware } from "../../middleware/rightsMiddleware";

const ItemsRouter = Express.Router();

// USERS
ItemsRouter.get("/get/:lmcode",validateToken,userMiddleware,GetOneItem)
ItemsRouter.get("/list",validateToken,userMiddleware,GetList)
ItemsRouter.patch("/get/:lmcode",validateToken,userMiddleware)
ItemsRouter.delete("/get/:lmcode",validateToken,managerMiddleware)
ItemsRouter.get("/getNames",validateToken,GetNames)

ItemsRouter.post("/create",validateToken,CreateNewItem)

export default ItemsRouter;