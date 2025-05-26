"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = __importDefault(require("./routers/admin/admin"));
const config_1 = __importDefault(require("./config/config"));
const AuthorizationRouter_1 = __importDefault(require("./routers/auth/AuthorizationRouter"));
const ErrorHandler_1 = __importDefault(require("./middleware/ErrorHandler"));
const itemsRouter_1 = __importDefault(require("./routers/items/itemsRouter"));
const managerRouter_1 = __importDefault(require("./routers/manager/managerRouter"));
const UserRouter_1 = __importDefault(require("./routers/users/UserRouter"));
const RemainsRouter_1 = __importDefault(require("./routers/remains/RemainsRouter"));
const cors_1 = __importDefault(require("cors"));
const NotificationRouter_1 = __importDefault(require("./routers/notification/NotificationRouter"));
const RequestRouter_1 = __importDefault(require("./routers/request/RequestRouter"));
const PrintRouter_1 = __importDefault(require("./routers/print/PrintRouter"));
const SystemRouter_1 = __importDefault(require("./routers/system/SystemRouter"));
const Logger_1 = __importDefault(require("./tools/Logger"));
const PaternosterRouter_1 = __importDefault(require("./routers/paternoster/PaternosterRouter"));
const telegramApp_1 = __importDefault(require("./telegramModule/telegramApp"));
const Logger = (0, Logger_1.default)("EXPRESS");
Logger("Express created...");
const app = (0, express_1.default)();
const apiPath = config_1.default.defaultApiPath;
Logger("Default API path: " + config_1.default.defaultApiPath);
const allowedOrigins = ['https://lm0525.ru', 'https://lm0525.netlify.app', 'http://localhost:3001', 'http://192.168.0.108:3001'];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', "PATCH"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express_1.default.json());
app.use(apiPath + "/admin", admin_1.default);
app.use(apiPath + "/auth", AuthorizationRouter_1.default);
app.use(apiPath + "/items", itemsRouter_1.default);
app.use(apiPath + "/manager", managerRouter_1.default);
app.use(apiPath + "/users", UserRouter_1.default);
app.use(apiPath + "/remains", RemainsRouter_1.default);
app.use(apiPath + "/tools/requests", RequestRouter_1.default);
app.use(apiPath + "/notifications", NotificationRouter_1.default);
app.use(apiPath + "/prints", PrintRouter_1.default);
app.use(apiPath + "/system", SystemRouter_1.default);
app.use(apiPath + "/paternoster", PaternosterRouter_1.default);
app.use(ErrorHandler_1.default);
app.post(apiPath + "/bot/webhook", (req, res) => {
    console.log("Test");
    telegramApp_1.default.bot.processUpdate(req.body);
    res.sendStatus(200);
});
app.use("/", (req, res) => {
    res.sendStatus(403);
});
Logger("Server is ready");
exports.default = app;
