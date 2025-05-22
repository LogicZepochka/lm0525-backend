"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../../controllers/admin/user");
const autorizeToken_1 = require("../../middleware/autorizeToken");
const rightsMiddleware_1 = require("../../middleware/rightsMiddleware");
const AdminRouter = express_1.default.Router();
// USERS
AdminRouter.get("/user/:id", autorizeToken_1.validateToken, rightsMiddleware_1.adminMiddleware, user_1.GetUser);
exports.default = AdminRouter;
