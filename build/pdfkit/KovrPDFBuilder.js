"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types/types");
exports.default = new class KovrPDFBuilder {
    async generatePDF(remain, PDF, barPng, qr) {
        console.log("RENDER KOVR+OVERL: ", remain.name);
        if (!remain.metadata.overlock) {
            console.log("WARNING: Kovrolin overlock without overlock");
            return;
        }
        //console.log("GENERATING KOVROLIN");
        //console.log(Linoleum);
        PDF.save();
        PDF.fontSize(20);
        //PDF.image("./src/pdfkit/fonts/30.png",270,390, {fit: [150,150], align: 'center', valign: 'center'});
        PDF.rect(0, 0, 419, 100).fillAndStroke('#888888', '#222222');
        PDF.rect(100, 480, 200, 20).stroke();
        PDF.rect(300, 480, 100, 20).stroke();
        PDF.rect(100, 500, 200, 20).stroke();
        PDF.rect(300, 500, 100, 20).stroke();
        PDF.rect(0, 545, 450, 50).fillAndStroke('#aaaaaa', '#222222');
        PDF.rect(0, 430, 419, 50).fillAndStroke('#888888', '#222222').restore();
        // RENDERING TEXT
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        PDF.text("ДЛЯ ПОКУПКИ ОБРАТИТЕСЬ К ПРОДАВЦУ-КОНСУЛЬТАНТУ", 80, 5, { align: 'center', height: 100 });
        PDF.fontSize(12);
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
        PDF.text("Наименование", 120, 100, {});
        PDF.text((0, types_1.ConvertTypeToName)(remain.type), 250, 100, { lineBreak: false });
        PDF.fontSize(10);
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        PDF.text((remain.name).toUpperCase(), 0, 120, { align: 'center', width: 419.53, lineBreak: false });
        PDF.fontSize(14);
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
        PDF.text('Код LM', 200, 140);
        PDF.text(remain.itemId, 280, 140);
        // PHOTO BARCODE
        PDF.image(barPng, 255, 154, { fit: [100, 40], align: 'center', valign: 'center' });
        // PHOTO END
        // PHOTO QR
        PDF.image(qr, 10, 150, { fit: [100, 50], align: 'center', valign: 'center' });
        // QR END
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        let S = (remain.metadata.sizeX * remain.metadata.sizeY);
        let price = remain.price * 0.7;
        let overlockPrice = remain.metadata.overlock.price * remain.metadata.overlock.meters;
        let TotalPrice = price * S + overlockPrice;
        PDF.fontSize(25);
        PDF.text("Ширина: ", 40, 190);
        PDF.text(remain.metadata.sizeX.toFixed(2), 77, 190, { width: 250, align: "right" });
        PDF.text("м ", 350, 190);
        PDF.text("Длина: ", 64, 220);
        PDF.text(remain.metadata.sizeY.toFixed(2), 77, 220, { width: 250, align: "right" });
        PDF.text("м ", 350, 220);
        PDF.moveTo(160, 225).lineTo(340, 225).stroke();
        PDF.moveTo(160, 255).lineTo(340, 255).stroke();
        PDF.fontSize(14);
        PDF.text("Площадь", 110, 260);
        PDF.text("м2", 350, 260);
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
        PDF.text(S.toFixed(2), 85, 260, { width: 250, align: "right" });
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        PDF.moveTo(240, 280).lineTo(340, 280).stroke();
        PDF.text("Стоимость м2", 110, 280);
        PDF.text("руб", 350, 280);
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
        PDF.text((remain.price * 1).toFixed(2), 85, 280, { width: 250, align: "right" });
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        PDF.moveTo(240, 300).lineTo(340, 300).stroke();
        PDF.fontSize(16);
        // OVerlock
        PDF.rect(1, 310, 220, 30).stroke();
        PDF.text("Оверлок", 1, 310, { width: 220, height: 30, align: "center" });
        PDF.rect(221, 310, 100, 30).stroke();
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
        PDF.text((remain.metadata.overlock.meters * 1).toFixed(2), 221, 310, { width: 90, height: 30, align: "right" });
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        PDF.rect(321, 310, 100, 30).stroke();
        PDF.text("П.М.", 321, 310, { width: 100, height: 30, align: "center" });
        PDF.rect(1, 340, 220, 30).stroke();
        PDF.text("Цена за П.М.", 1, 340, { width: 220, height: 30, align: "center" });
        PDF.rect(221, 340, 100, 30).stroke();
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
        PDF.text((remain.metadata.overlock.price * 1).toFixed(2), 221, 340, { width: 90, height: 30, align: "right" });
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        PDF.rect(321, 340, 100, 30).stroke();
        PDF.text("РУБ", 321, 340, { width: 100, height: 30, align: "center" });
        PDF.rect(1, 370, 220, 30).stroke();
        PDF.text("Стоимость оверлока", 1, 370, { width: 220, height: 30, align: "center" });
        PDF.rect(221, 370, 100, 30).stroke();
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
        PDF.text((remain.metadata.overlock.meters * remain.metadata.overlock.price).toFixed(2), 221, 370, { width: 90, height: 30, align: "right" });
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        PDF.rect(321, 370, 100, 30).stroke();
        PDF.text("РУБ", 321, 370, { width: 100, height: 30, align: "center" });
        PDF.fontSize(14);
        PDF.text("Цена со скидкой", 180, 480, { lineBreak: false });
        PDF.text("Дата", 260, 500, { lineBreak: false });
        PDF.text((price).toFixed(2), 315, 480, { lineBreak: false });
        PDF.text(new Date().toLocaleDateString("ru-RU"), 315, 500, { lineBreak: false });
        PDF.fontSize(22);
        PDF.text("Итого со скидкой".toUpperCase(), 20, 436);
        PDF.text((TotalPrice).toFixed(2) + " руб", 150, 436, { width: 250, align: "right" });
    }
    ;
    constructor() { }
};
