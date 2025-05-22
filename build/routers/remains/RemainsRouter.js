"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const RemainsController_1 = __importDefault(require("../../controllers/RemainsController"));
const RemainsRouter = express_1.default.Router();
RemainsRouter.get("/get/:id", autorizeToken_1.validateToken, RemainsController_1.default.GetOne);
RemainsRouter.get("/get", autorizeToken_1.validateToken, RemainsController_1.default.GetRemainListGrouped);
RemainsRouter.post("/create", autorizeToken_1.validateToken, RemainsController_1.default.CreateNewRemains);
RemainsRouter.patch("/:id/sell", autorizeToken_1.validateToken, RemainsController_1.default.SellRemain);
RemainsRouter.delete("/:id", autorizeToken_1.validateToken, RemainsController_1.default.DeleteRemain);
RemainsRouter.post("/getTargetSize", autorizeToken_1.validateToken, RemainsController_1.default.GetRemainsBySize);
exports.default = RemainsRouter;
