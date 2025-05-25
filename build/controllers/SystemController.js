"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../../package.json");
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const SystemController = new class SystemController {
    async ApiManifest(req, res) {
        const result = {
            version: package_json_1.version
        };
        return res.status(200).json(new apiResponse_1.default(200).SetContent(result));
    }
};
exports.default = SystemController;
