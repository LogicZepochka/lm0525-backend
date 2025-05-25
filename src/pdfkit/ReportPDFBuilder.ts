import { setEncoding } from "pdfkit";
import { Paternoster } from "../../generated/prisma";
import { PDFPaternosterReportVariant, PDFRemainVariant, PrintData } from "./types/types";
import PDFDocumentWithTables from "pdfkit-table";


export default new class KovrPDFBuilder implements PDFPaternosterReportVariant {
    
    

    generatePDF(paternoster: Paternoster,PDF: PDFDocumentWithTables,row:string[][]) {
        
        
        PDF.save();
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        const table = { 
            title: paternoster.Name,
            headers: ["Б","#","Название","LM"],
            datas: [    ],
            rows: row
            
        };
        PDF.table(table,{
            columnsSize:[20,20,350,100],            
            prepareHeader: () => PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf").fontSize(12),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf").fontSize(12);
                return PDF
            },
        })
        PDF.save();
    };
}