"use strict";
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
            try {
                var fileName = `debug.pdf`;
                console.log(fileName);
                var doc = new pdfkit_1.default({ size: "A5" });
                var stream = node_fs_1.default.createWriteStream(path.join(appDir, "public", `${fileName}`));
                doc.pipe(stream);
                console.log("[PDF CREATOR] Stream created");
                for (const [index, remain] of remains.entries()) {
                    console.log("Render: ", remain.name);
                    let png = await PDFCreator.GetBarcodePNG(remain.itemId);
                    console.log("Render: ", remain.name, " | BARCode created");
                    let qr = await qrcode_1.default.toBuffer(`https://lm0525.netlify.app/remains/${remain.id}`);
                    console.log("Render: ", remain.name, " | Started");
                    switch (remain.type) {
                        case prisma_1.ItemType.Linoleym:
                        case prisma_1.ItemType.Rezina: {
                            await LinPDFBuilder_1.default.generatePDF(remain, doc, png, qr);
                            break;
                        }
                        case prisma_1.ItemType.Kovrolin:
                        case prisma_1.ItemType.Dorozhka:
                        case prisma_1.ItemType.Trava: {
                            console.log("NOT LIN");
                            if (remain.metadata.overlock != undefined) {
                                await KovrPDFBuilder_1.default.generatePDF(remain, doc, png, qr);
                            }
                            else {
                                await LinPDFBuilder_1.default.generatePDF(remain, doc, png, qr);
                            }
                            break;
                        }
                    }
                    console.log("Render: ", remain.name, " | Finished", remain.id);
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
                console.log("[PDF CREATOR] Render finished");
                stream.on('finish', () => {
                    setTimeout(() => {
                        node_fs_1.default.unlink(path.join(appDir, "public", `${fileName}`), (err) => {
                            if (err)
                                console.log(err);
                        });
                    }, 1000 * 10);
                    resolve(path.join(appDir, "public", `${fileName}`));
                });
                stream.on('error', (err) => {
                    reject(err);
                });
                doc.end();
            }
            catch (e) {
                console.log(e);
                reject(e);
            }
        });
    }
}
exports.default = PDFCreator;
