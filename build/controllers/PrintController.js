"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfbuilder_1 = __importDefault(require("../pdfkit/pdfbuilder"));
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const Logger_1 = __importStar(require("../tools/Logger"));
const prisma_1 = __importDefault(require("../tools/prisma"));
const zodSchemas_1 = require("../tools/zodSchemas");
const node_fs_1 = __importDefault(require("node:fs"));
const Logger = (0, Logger_1.default)("PRINT-CONTROLLER");
const PrintController = new class PrintController {
    async GetUnprinted(req, res) {
        let unprinted = await prisma_1.default.remain.findMany({
            where: {
                shop: req.user.shopId,
                DepartamentId: req.user.departament,
                PrintedDate: null,
                IsDeleted: false,
                SellDate: null
            },
            include: {
                item: true
            }
        });
        return res.status(200).json(new apiResponse_1.default(200).SetContent(unprinted));
    }
    async PrintRemains(req, res) {
        const parseResult = zodSchemas_1.PrintArraySchema.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData).SetContent(parseResult.error.errors));
        }
        const remains = parseResult.data;
        Logger(`Начинается печать ${remains.length} остатков`);
        try {
            const filepath = await pdfbuilder_1.default.generate(remains);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="remains.pdf"'); // ← "inline" вместо "attachment"
            const fileStream = node_fs_1.default.createReadStream(filepath);
            fileStream.pipe(res);
            fileStream.on('error', (err) => {
                Logger(`Ошибка чтения файла: ${err}`, Logger_1.LoggerMessageType.Error);
                res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError));
            });
        }
        catch (error) {
            Logger(`'Ошибка генерации PDF: ${error}`, Logger_1.LoggerMessageType.Error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError));
        }
    }
};
exports.default = PrintController;
