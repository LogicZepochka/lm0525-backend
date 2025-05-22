import express from "express";
import AdminRouter from "./routers/admin/admin";
import config from "./config/config";
import AuthRouter from "./routers/auth/AuthorizationRouter";
import ErrorHandler from "./middleware/ErrorHandler";
import ItemsRouter from "./routers/items/itemsRouter";
import ManagerRouter from "./routers/manager/managerRouter";
import UserRouter from "./routers/users/UserRouter";
import RemainsRouter from "./routers/remains/RemainsRouter";
import cors from "cors";
import NotificationRouter from "./routers/notification/NotificationRouter";
import RequestRouter from "./routers/request/RequestRouter";
import PrintRouter from "./routers/print/PrintRouter";

console.log("[Express] Starting express...")
const app = express();
const apiPath: string = config.defaultApiPath;
console.log("[Express] Default API path: "+config.defaultApiPath)

app.use(cors());
app.use(express.json());

app.use(apiPath+"/admin",AdminRouter);
app.use(apiPath+"/auth",AuthRouter);
app.use(apiPath+"/items",ItemsRouter);
app.use(apiPath+"/manager",ManagerRouter);
app.use(apiPath+"/users",UserRouter);
app.use(apiPath+"/remains",RemainsRouter);
app.use(apiPath+"/tools/requests",RequestRouter);
app.use(apiPath+"/notifications",NotificationRouter);
app.use(apiPath+"/prints",PrintRouter);

app.use(ErrorHandler);

export default app;