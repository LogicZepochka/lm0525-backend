"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const PrintController_1 = __importDefault(require("../../controllers/PrintController"));
const PrintRouter = express_1.default.Router();
PrintRouter.get("/unprinted", autorizeToken_1.validateToken, PrintController_1.default.GetUnprinted);
PrintRouter.post("/create", autorizeToken_1.validateToken, PrintController_1.default.PrintRemains);
exports.default = PrintRouter;
