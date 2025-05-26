import { PrintData } from "./types/types";
import { Paternoster } from "../../generated/prisma";
export default class PDFCreator {
    constructor();
    static GetBarcodePNG(lmCode: string): Promise<Buffer<ArrayBufferLike>>;
    static generatePaternosterReport(paternosters: Paternoster[]): Promise<string>;
    static generate(remains: PrintData[]): Promise<string>;
}
