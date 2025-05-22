"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfbuilder_1 = __importDefault(require("../pdfkit/pdfbuilder"));
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const prisma_1 = __importDefault(require("../tools/prisma"));
const zodSchemas_1 = require("../tools/zodSchemas");
const node_fs_1 = __importDefault(require("node:fs"));
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
        try {
            const filepath = await pdfbuilder_1.default.generate(remains);
            // Устанавливаем заголовки для открытия PDF в браузере
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="remains.pdf"'); // ← "inline" вместо "attachment"
            // Создаем поток чтения файла и передаем его в ответ
            const fileStream = node_fs_1.default.createReadStream(filepath);
            fileStream.pipe(res);
            /*// Удаляем временный файл после отправки
            fileStream.on('end', () => {
                fs.unlink(filepath, (err) => {
                    if (err) console.error('Ошибка удаления временного файла:', err);
                });
            });*/
            fileStream.on('error', (err) => {
                console.error('Ошибка чтения файла:', err);
                res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError));
            });
        }
        catch (error) {
            console.error('Ошибка генерации PDF:', error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError));
        }
    }
};
exports.default = PrintController;
