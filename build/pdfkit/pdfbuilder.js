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
const node_fs_1 = __importDefault(require("node:fs"));
const pdfkit_1 = __importDefault(require("pdfkit"));
const path = require('path');
const appDir = path.dirname(require.main?.filename);
const node_1 = __importDefault(require("@bwip-js/node"));
const prisma_1 = require("../../generated/prisma");
const LinPDFBuilder_1 = __importDefault(require("./LinPDFBuilder"));
const KovrPDFBuilder_1 = __importDefault(require("./KovrPDFBuilder"));
const qrcode_1 = __importDefault(require("qrcode"));
const prisma_2 = __importDefault(require("../tools/prisma"));
const Logger_1 = __importStar(require("../tools/Logger"));
const Logger = (0, Logger_1.default)("PDFBUILDER");
class PDFCreator {
    constructor() { }
    static async GetBarcodePNG(lmCode) {
        return new Promise((resolve, reject) => {
            node_1.default.toBuffer({
                bcid: 'code39', // Barcode type
                text: lmCode, // Text to encode
                scale: 2, // 3x scaling factor
                height: 15, // Bar height, in millimeters
                includetext: false, // Show human-readable text
                textxalign: 'center', // Always good to set this
            }, function (err, png) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(png);
                }
            });
        });
    }
    static async generate(remains) {
        return new Promise(async (resolve, reject) => {
            const startTime = process.hrtime();
            try {
                var fileName = `debug.pdf`;
                var doc = new pdfkit_1.default({ size: "A5" });
                var stream = node_fs_1.default.createWriteStream(path.join(appDir, "public", `${fileName}`));
                doc.pipe(stream);
                Logger("Поток создан");
                for (const [index, remain] of remains.entries()) {
                    Logger(`Начинаем генерацию ${remain.name}...`);
                    let png = await PDFCreator.GetBarcodePNG(remain.itemId);
                    let qr = await qrcode_1.default.toBuffer(`https://lm0525.ru/remains/${remain.id}`);
                    switch (remain.type) {
                        case prisma_1.ItemType.Linoleym:
                        case prisma_1.ItemType.Rezina: {
                            await LinPDFBuilder_1.default.generatePDF(remain, doc, png, qr);
                            break;
                        }
                        case prisma_1.ItemType.Kovrolin:
                        case prisma_1.ItemType.Dorozhka:
                        case prisma_1.ItemType.Trava: {
                            if (remain.metadata.overlock != undefined) {
                                await KovrPDFBuilder_1.default.generatePDF(remain, doc, png, qr);
                            }
                            else {
                                await LinPDFBuilder_1.default.generatePDF(remain, doc, png, qr);
                            }
                            break;
                        }
                    }
                    Logger(`Генерация: ${remain.name} - Генерация завершена`);
                    await prisma_2.default.remain.update({
                        where: { id: remain.id },
                        data: {
                            PrintedDate: new Date()
                        }
                    });
                    if (index + 1 != remains.length) {
                        doc.addPage();
                    }
                }
                Logger(`Генерация PDF завершена`);
                stream.on('finish', () => {
                    setTimeout(() => {
                        Logger(`Удаляю созданный PDF...`);
                        node_fs_1.default.unlink(path.join(appDir, "public", `${fileName}`), (err) => {
                            if (err)
                                Logger(`Ошибка удаления PDF: ${err}`, Logger_1.LoggerMessageType.Error);
                        });
                    }, 1000 * 10);
                    resolve(path.join(appDir, "public", `${fileName}`));
                });
                stream.on('error', (err) => {
                    if (err)
                        Logger(`Ошибка создания PDF: ${err}`, Logger_1.LoggerMessageType.Error);
                    reject(err);
                });
                doc.end();
            }
            catch (e) {
                Logger(`Ошибка создания PDF: ${e}`, Logger_1.LoggerMessageType.Error);
                reject(e);
            }
            finally {
                const diffTime = process.hrtime(startTime);
                Logger(`Время выполнения: ${diffTime[0]}s ${diffTime[1] / 1e6}ms`);
            }
        });
    }
}
exports.default = PDFCreator;
