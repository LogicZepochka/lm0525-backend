import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import PrintController from "../../controllers/PrintController";

const PrintRouter = Express.Router();

PrintRouter.get("/unprinted",validateToken,PrintController.GetUnprinted)
PrintRouter.post("/create",validateToken,PrintController.PrintRemains)

export default PrintRouter;