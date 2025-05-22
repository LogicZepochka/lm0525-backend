"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const AuthController_1 = __importDefault(require("../../controllers/AuthController"));
const AuthRouter = express_1.default.Router();
// USERS
AuthRouter.post("/signin", AuthController_1.default.SignIn);
//AuthRouter.post("/auth/signout",validateToken)
AuthRouter.post("/signup", AuthController_1.default.Register);
AuthRouter.post("/refresh", AuthController_1.default.Refresh);
AuthRouter.post("/telegramBind", AuthController_1.default.BindTelegramToAccount);
AuthRouter.get("/checkAuth", autorizeToken_1.validateToken, AuthController_1.default.CheckAuth);
AuthRouter.post("/restore", AuthController_1.default.RestoreUserAccount);
AuthRouter.get("/validateReset", AuthController_1.default.ValidateResetToken);
AuthRouter.post("/resetPassword", AuthController_1.default.ResetPassword);
exports.default = AuthRouter;
