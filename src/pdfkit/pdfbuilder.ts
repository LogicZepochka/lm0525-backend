import { PrintData } from "./types/types";
import fs from "node:fs"
import PDFDocument from "pdfkit";
const path = require('path');
const appDir = path.dirname(require.main?.filename);
import bwipjs from '@bwip-js/node'
import { ItemType } from "../../generated/prisma";
import LinPDFBuilder from "./LinPDFBuilder";
import KovrPDFBuilder from "./KovrPDFBuilder";
import qrcode from "qrcode";
import Prisma from "../tools/prisma";
import CreateLogger, { LoggerMessageType } from "../tools/Logger";

const Logger = CreateLogger("PDFBUILDER")

export default class PDFCreator {

    constructor() {}

    static async GetBarcodePNG(lmCode: string): Promise<Buffer<ArrayBufferLike>> {
        return new Promise((resolve,reject) => {
            bwipjs.toBuffer({
                bcid:        'code39',       // Barcode type
                text:        lmCode,    // Text to encode
                scale:       2,               // 3x scaling factor
                height:      15,              // Bar height, in millimeters
                includetext: false,            // Show human-readable text
                textxalign:  'center',        // Always good to set this
            }, function (err, png) {
                if (err) {
                    reject(err);
                } else {
                    resolve(png);
                }
            });
    })
    }

    static async generate(remains: PrintData[]): Promise<string> {
    return new Promise(async (resolve, reject) => {
        const startTime = process.hrtime();
        try {
            var fileName = `debug.pdf`;
            var doc = new PDFDocument({size: "A5"});
            var stream = fs.createWriteStream(path.join(appDir,"public",`${fileName}`));
            doc.pipe(stream);
            Logger("Поток создан")

            for (const [index, remain] of remains.entries()) {
                Logger(`Начинаем генерацию ${remain.name}...`)
                let png = await PDFCreator.GetBarcodePNG(remain.itemId);
                let qr = await qrcode.toBuffer(`https://lm0525.ru/remains/${remain.id}`)
                switch(remain.type) {
                    case ItemType.Linoleym:
                    case ItemType.Rezina: {
                        await LinPDFBuilder.generatePDF(remain,doc,png,qr);
                        break;
                    }
                    case ItemType.Kovrolin:
                    case ItemType.Dorozhka:
                    case ItemType.Trava: {
                        if(remain.metadata.overlock != undefined) {
                            await KovrPDFBuilder.generatePDF(remain,doc,png,qr);
                        }
                        else {
                            await LinPDFBuilder.generatePDF(remain,doc,png,qr);
                        }
                        break;
                    }
                }
                Logger(`Генерация: ${remain.name} - Генерация завершена`)
                await Prisma.remain.update({
                    where:{id: remain.id},
                    data: {
                        PrintedDate: new Date()
                    }
                })
                if(index+1 != remains.length) {
                    doc.addPage();
                }
            }
            Logger(`Генерация PDF завершена`)
            
            stream.on('finish', () => {
                setTimeout(() => {
                    Logger(`Удаляю созданный PDF...`)
                    fs.unlink(path.join(appDir,"public",`${fileName}`), (err) => {
                        if(err) Logger(`Ошибка удаления PDF: ${err}`,LoggerMessageType.Error)
                    });
                }, 1000*10);
                resolve(path.join(appDir,"public",`${fileName}`));
            });
            
            stream.on('error', (err) => {
                if(err) Logger(`Ошибка создания PDF: ${err}`,LoggerMessageType.Error)
                reject(err);
            });
            
            doc.end();
        }
        catch(e) {
            Logger(`Ошибка создания PDF: ${e}`,LoggerMessageType.Error)
            reject(e);
        }
        finally {
            const diffTime = process.hrtime(startTime);
            Logger(`Время выполнения: ${diffTime[0]}s ${diffTime[1] / 1e6}ms`);
        }
    });
}
}