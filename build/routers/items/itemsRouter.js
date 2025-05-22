"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const ItemsController_1 = require("../../controllers/ItemsController");
const rightsMiddleware_1 = require("../../middleware/rightsMiddleware");
const ItemsRouter = express_1.default.Router();
// USERS
ItemsRouter.get("/get/:lmcode", autorizeToken_1.validateToken, rightsMiddleware_1.userMiddleware, ItemsController_1.GetOneItem);
ItemsRouter.get("/list", autorizeToken_1.validateToken, rightsMiddleware_1.userMiddleware, ItemsController_1.GetList);
ItemsRouter.patch("/get/:lmcode", autorizeToken_1.validateToken, rightsMiddleware_1.userMiddleware);
ItemsRouter.delete("/get/:lmcode", autorizeToken_1.validateToken, rightsMiddleware_1.managerMiddleware);
ItemsRouter.get("/getNames", autorizeToken_1.validateToken, ItemsController_1.GetNames);
ItemsRouter.post("/create", autorizeToken_1.validateToken, ItemsController_1.CreateNewItem);
exports.default = ItemsRouter;
