import { ItemType } from "../../../generated/prisma";
export interface PrintData {
    id: string;
    name: string;
    metadata: {
        area: number;
        type: ItemType;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        };
    };
    itemId: string;
    price: number;
    type: ItemType;
}
export declare const Mocked: PrintData;
export interface PDFRemainVariant {
    generatePDF: (remain: PrintData, PDF: PDFKit.PDFDocument, barPng: any, qr: Buffer<ArrayBufferLike>) => void;
}
export declare function ConvertTypeToName(type: ItemType): string;
