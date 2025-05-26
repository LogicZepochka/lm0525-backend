import { Paternoster } from "../../generated/prisma";
import PDFDocumentWithTables from "pdfkit-table";
declare const _default: {
    generatePDF(paternoster: Paternoster, PDF: PDFDocumentWithTables, row: string[][]): void;
};
export default _default;
