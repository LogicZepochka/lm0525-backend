import Express from "express";
import { GetUser } from "../../controllers/admin/user";
import { validateToken } from "../../middleware/autorizeToken";
import {adminMiddleware, managerMiddleware} from "../../middleware/rightsMiddleware";

const AdminRouter = Express.Router();

// USERS
AdminRouter.get("/user/:id",validateToken,adminMiddleware,GetUser)

export default AdminRouter;