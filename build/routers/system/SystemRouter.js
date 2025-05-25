"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SystemController_1 = __importDefault(require("../../controllers/SystemController"));
const SystemRouter = express_1.default.Router();
SystemRouter.get("/info", SystemController_1.default.ApiManifest);
exports.default = SystemRouter;
