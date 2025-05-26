"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new class KovrPDFBuilder {
    generatePDF(paternoster, PDF, row) {
        PDF.save();
        PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-bold.ttf");
        const table = {
            title: paternoster.Name,
            headers: ["Б", "#", "Название", "LM"],
            datas: [],
            rows: row
        };
        PDF.table(table, {
            columnsSize: [20, 20, 350, 100],
            prepareHeader: () => PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf").fontSize(12),
            prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
                PDF.font("./src/pdfkit/fonts/leroy-merlin-sans-regular.ttf").fontSize(12);
                return PDF;
            },
        });
        PDF.save();
    }
    ;
};
