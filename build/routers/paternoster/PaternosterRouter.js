"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const PaternosterController_1 = __importDefault(require("../../controllers/PaternosterController"));
const PaternosterRouter = express_1.default.Router();
PaternosterRouter.post("/create", autorizeToken_1.validateToken, PaternosterController_1.default.CreatePaternoster);
PaternosterRouter.post("/:patern/axis/create", autorizeToken_1.validateToken, PaternosterController_1.default.CreateAxis);
PaternosterRouter.post("/:patern/axis/:axis/insert", autorizeToken_1.validateToken, PaternosterController_1.default.InstertToAxis);
PaternosterRouter.delete("/:patern/axis/:axis/remove/:id", autorizeToken_1.validateToken, PaternosterController_1.default.RemoveFromAxis);
PaternosterRouter.delete("/:patern/axis/:axis", autorizeToken_1.validateToken, PaternosterController_1.default.DeleteAxis);
PaternosterRouter.get("/:patern", autorizeToken_1.validateToken, PaternosterController_1.default.GetPaternoster);
PaternosterRouter.delete("/:patern", autorizeToken_1.validateToken, PaternosterController_1.default.DeletePaternoster);
exports.default = PaternosterRouter;
