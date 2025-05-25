import { lineAnnotation } from "pdfkit";
import PDFCreator from "./pdfbuilder";

import { ConvertTypeToName, PDFRemainVariant, PrintData } from "./types/types";
import PDFKitColor from "pdfkit/js/mixins/color";




export default new class LinPDFBuilder implements PDFRemainVariant {
    
    

    async generatePDF(remain: PrintData, PDF: PDFKit.PDFDocument, barPng: any, qr: Buffer<ArrayBufferLike>): Promise<void> {
            PDF.save();
            PDF.fontSize(20);
            
            //PDF.image("./Generator/30.png",270,390, {fit: [150,150], align: 'center', valign: 'center'});
            PDF.rect(0,0,419,100).fillAndStroke('#888888','#222222');
            PDF.rect(100,480,200,20).stroke();
            PDF.rect(300,480,100,20).stroke();
            PDF.rect(100,500,200,20).stroke();
            PDF.rect(300,500,100,20).stroke();
            PDF.rect(0,545,450,50).fillAndStroke('#aaaaaa','#222222');
            PDF.rect(0,430,419,50).fillAndStroke('#888888','#222222').restore();
            
        
            // RENDERING TEXT
            
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
            PDF.text("ДЛЯ ПОКУПКИ ОБРАТИТЕСЬ К ПРОДАВЦУ-КОНСУЛЬТАНТУ",80,5,{align: 'center', height: 100});
        
            PDF.fontSize(12);
            
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
            PDF.text("Наименование",120,100,{});
            PDF.text(ConvertTypeToName(remain.type),250,100,{lineBreak: false});
            PDF.fontSize(10);
            
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
            PDF.text((remain.name).toUpperCase(),75,120,{align: 'center'})
            PDF.fontSize(14);
            
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
            PDF.text('Код LM',200,150);
            PDF.text(remain.itemId,280,150);
            // PHOTO BARCODE
            PDF.image(barPng,255,165, {fit: [100,40], align: 'center', valign: 'center'});
            // PHOTO END
            // PHOTO QR
            PDF.image(qr,20,135, {fit: [100,80], align: 'center', valign: 'center'});
            // QR END
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
            PDF.fontSize(38);
        
            PDF.text("Ширина: ",40,200)
            PDF.text(remain.metadata.sizeX.toFixed(2),77,200,{width: 250, align: "right"})
            PDF.text("м ",350,200)
            PDF.text("Длина: ",77,250)
            PDF.text(remain.metadata.sizeY.toFixed(2),77,250, {width: 250, align: "right"})
            PDF.text("м ",350,250)
            PDF.moveTo(40,250).lineTo(400,250).stroke();
            PDF.moveTo(77,300).lineTo(400,300).stroke();
        
            // Площадь
            let S =  (remain.metadata.sizeX * remain.metadata.sizeY).toFixed(2);
        
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
            PDF.fontSize(16);
        
            PDF.text("Площадь", 150,320)
            PDF.text("м2",350,320)
            PDF.moveTo(240,341).lineTo(340,341).stroke();
        
            PDF.text("Стоимость м2", 120,350)
            PDF.text("руб",350,350)
            PDF.moveTo(240,371).lineTo(340,371).stroke();
        
            PDF.text("Цена без скидки", 98,390)
            PDF.text("руб",350,390)
            PDF.moveTo(240,411).lineTo(340,411).stroke();
            
        
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
            
            PDF.text(remain.price.toFixed(2),85,350, {width: 250, align: "right"})
            PDF.text((remain.price*(remain.metadata.sizeX * remain.metadata.sizeY)).toFixed(2),85,390, {width: 250, align: "right"})
            PDF.text(S,85,320, {width: 250, align: "right"})
            PDF.fontSize(22);
            PDF.text("Итого со скидкой".toUpperCase(),20,439)
            PDF.text((remain.price*remain.metadata.area*0.7).toFixed(2),85,439, {width: 250, align: "right"})
            PDF.text("руб",350,439)
            PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf");
            PDF.fontSize(14);
            PDF.text("Цена со скидкой",180,480, {lineBreak: false})
            PDF.text("Дата",260,500, {lineBreak: false})
            PDF.text((remain.price*0.7).toFixed(2),315,480, {lineBreak: false})
            PDF.text(new Date().toLocaleDateString("ru-RU"),315,500, {lineBreak: false})
        
        
            PDF.fontSize(24);
            PDF.text("Необходимо приклеивать!".toUpperCase(),40,542, {lineBreak: false})
            PDF.save();
    };
    
    constructor() {}
}