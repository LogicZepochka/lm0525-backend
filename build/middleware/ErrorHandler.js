"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ErrorHandler;
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
function ErrorHandler(err, req, res, next) {
    if (err) {
        console.log(`ERROR: ${err}`);
        return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError));
    }
    next();
}
