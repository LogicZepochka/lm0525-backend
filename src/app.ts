import express, { Request, Response } from "express";
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
import SystemRouter from "./routers/system/SystemRouter";
import CreateLogger from "./tools/Logger";

const Logger = CreateLogger("EXPRESS");

Logger("Express created...");
const app = express();
const apiPath: string = config.defaultApiPath;
Logger("Default API path: "+config.defaultApiPath)

const allowedOrigins = ['https://lm0525.ru', 'https://lm0525.netlify.app', 'http://localhost:3001','http://192.168.0.108:3001'];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', "PATCH"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));
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
app.use(apiPath+"/system",SystemRouter);
app.use(ErrorHandler);

app.use("/",(req: Request, res: Response) => {
    res.sendStatus(403);
})

Logger("Server is ready")
export default app;