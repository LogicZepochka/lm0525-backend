import PDFKitData from "pdfkit/js/data";
import { ItemType, Paternoster } from "../../../generated/prisma";
import PDFDocumentWithTables from "pdfkit-table";

export interface PrintData {
    id: string
    name: string
    metadata: {
        area: number,
        type: ItemType,
        sizeX: number,
        sizeY: number,
        overlock?: {
            price: number,
            meters: number
        }
    }
    itemId: string
    price: number
    type: ItemType
}

export const Mocked: PrintData = {
    id: "dasfon389f1n30fsafm9102",
    name: "Пошёл нахуй",
    metadata: {
        area: 4,
        type: ItemType.Kovrolin,
        sizeX: 2,
        sizeY: 2,
        overlock: {
            meters: 8,
            price: 120
        }
    },
    itemId: "11221122",
    price: 212,
    type: ItemType.Kovrolin
}


export interface PDFRemainVariant {
    generatePDF: (remain: PrintData,PDF: PDFKit.PDFDocument, barPng: any, qr: Buffer<ArrayBufferLike>) => void;
}

export interface PDFPaternosterReportVariant {
    generatePDF: (remain: Paternoster,PDF: PDFDocumentWithTables,row: string[][]) => void;
}

export function ConvertTypeToName(type: ItemType): string {
    switch(type) {
        case ItemType.Dorozhka: return "Ковровая дорожка";
        case ItemType.Kovrolin: return "Ковролин";
        case ItemType.Linoleym: return "Линолеум";
        case ItemType.Rezina: return "Резиновое покрытие";
        case ItemType.Rope: return "Веревка";
        case ItemType.Trava: return "Травяное покрытие";
        default: return "Неизвестно"
    }
}