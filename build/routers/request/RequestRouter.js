"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const autorizeToken_1 = require("../../middleware/autorizeToken");
const rightsMiddleware_1 = require("../../middleware/rightsMiddleware");
const RequestControlle_1 = __importDefault(require("../../controllers/RequestControlle"));
const RequestRouter = express_1.default.Router();
RequestRouter.post("/create", autorizeToken_1.validateToken, RequestControlle_1.default.CreateRequest);
RequestRouter.get("/get", autorizeToken_1.validateToken, RequestControlle_1.default.GetRequests);
RequestRouter.get("/:id", autorizeToken_1.validateToken, RequestControlle_1.default.GetRequest);
RequestRouter.patch("/:id/status", autorizeToken_1.validateToken, rightsMiddleware_1.adminMiddleware, RequestControlle_1.default.ChangeRequestStatus);
RequestRouter.delete("/:id", autorizeToken_1.validateToken, RequestControlle_1.default.DeleteRequest);
exports.default = RequestRouter;
