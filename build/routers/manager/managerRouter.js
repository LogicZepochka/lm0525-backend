"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const rightsMiddleware_1 = require("../../middleware/rightsMiddleware");
const ManagerController_1 = __importDefault(require("../../controllers/ManagerController"));
const ManagerRouter = express_1.default.Router();
ManagerRouter.patch("/user/:id/aprove-user", autorizeToken_1.validateToken, rightsMiddleware_1.managerMiddleware, ManagerController_1.default.AproveUser);
exports.default = ManagerRouter;
