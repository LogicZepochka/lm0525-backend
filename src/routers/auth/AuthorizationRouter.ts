import Express from "express";
import { validateToken } from "../../middleware/autorizeToken";
import AuthController from "../../controllers/AuthController";

const AuthRouter = Express.Router();

// USERS
AuthRouter.post("/signin",AuthController.SignIn)
//AuthRouter.post("/auth/signout",validateToken)
AuthRouter.post("/signup",AuthController.Register)
AuthRouter.get("/logout",validateToken,AuthController.Logout)
AuthRouter.post("/refresh",AuthController.Refresh)
AuthRouter.post("/telegramBind",AuthController.BindTelegramToAccount)
AuthRouter.get("/checkAuth",validateToken,AuthController.CheckAuth)
AuthRouter.post("/restore",AuthController.RestoreUserAccount)

AuthRouter.get("/validateReset",AuthController.ValidateResetToken)
AuthRouter.post("/resetPassword",AuthController.ResetPassword)

export default AuthRouter;