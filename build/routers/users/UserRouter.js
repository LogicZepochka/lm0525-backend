"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const UsersController_1 = __importDefault(require("../../controllers/UsersController"));
const UserRouter = express_1.default.Router();
UserRouter.get("/get/user/:id", autorizeToken_1.validateToken, UsersController_1.default.GetOneUser);
UserRouter.get("/get/activated", autorizeToken_1.validateToken, UsersController_1.default.GetActivatedUsers);
UserRouter.get("/get/notactivated", autorizeToken_1.validateToken, UsersController_1.default.GetNotActivatedUsers);
exports.default = UserRouter;
