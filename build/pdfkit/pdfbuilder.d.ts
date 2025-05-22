import { PrintData } from "./types/types";
export default class PDFCreator {
    constructor();
    static GetBarcodePNG(lmCode: string): Promise<Buffer<ArrayBufferLike>>;
    static generate(remains: PrintData[]): Promise<string>;
}
