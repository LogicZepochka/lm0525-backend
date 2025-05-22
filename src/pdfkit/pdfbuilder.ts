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
        try {
            var fileName = `debug.pdf`; 
            console.log(fileName);
            var doc = new PDFDocument({size: "A5"});
            var stream = fs.createWriteStream(path.join(appDir,"public",`${fileName}`));
            doc.pipe(stream);
            console.log("[PDF CREATOR] Stream created");

            for (const [index, remain] of remains.entries()) {
                console.log("Render: ",remain.name)
                let png = await PDFCreator.GetBarcodePNG(remain.itemId);
                console.log("Render: ",remain.name," | BARCode created")
                let qr = await qrcode.toBuffer(`https://lm0525.netlify.app/remains/${remain.id}`)
                console.log("Render: ",remain.name," | Started")
                switch(remain.type) {
                    case ItemType.Linoleym:
                    case ItemType.Rezina: {
                        await LinPDFBuilder.generatePDF(remain,doc,png,qr);
                        break;
                    }
                    case ItemType.Kovrolin:
                    case ItemType.Dorozhka:
                    case ItemType.Trava: {
                        console.log("NOT LIN")
                        if(remain.metadata.overlock != undefined) {
                            await KovrPDFBuilder.generatePDF(remain,doc,png,qr);
                        }
                        else {
                            await LinPDFBuilder.generatePDF(remain,doc,png,qr);
                        }
                        break;
                    }
                }
                console.log("Render: ",remain.name," | Finished", remain.id)
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
            console.log("[PDF CREATOR] Render finished");
            
            stream.on('finish', () => {
                setTimeout(() => {
                    fs.unlink(path.join(appDir,"public",`${fileName}`), (err) => {
                        if(err) console.log(err);
                    });
                }, 1000*10);
                resolve(path.join(appDir,"public",`${fileName}`));
            });
            
            stream.on('error', (err) => {
                reject(err);
            });
            
            doc.end();
        }
        catch(e) {
            console.log(e);
            reject(e);
        }
    });
}
}