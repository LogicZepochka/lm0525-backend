"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const NotificationController_1 = __importDefault(require("../../controllers/NotificationController"));
const NotificationRouter = express_1.default.Router();
NotificationRouter.get("/refresh", autorizeToken_1.validateToken, NotificationController_1.default.GetUnreadedNotifications);
NotificationRouter.get("/get", autorizeToken_1.validateToken, NotificationController_1.default.GetNotifications);
NotificationRouter.delete("/delete", autorizeToken_1.validateToken, NotificationController_1.default.DeleteNotif);
exports.default = NotificationRouter;
