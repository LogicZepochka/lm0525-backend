import PDFCreator from "../pdfkit/pdfbuilder";
import { PrintData } from "../pdfkit/types/types";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import CreateLogger, { LoggerMessageType } from "../tools/Logger";
import Prisma from "../tools/prisma";
import { PrintArraySchema, PrintParseSchema } from "../tools/zodSchemas";
import fs from "node:fs";

const Logger = CreateLogger("PRINT-CONTROLLER")

const PrintController = new class PrintController {

    async GetUnprinted(req: any, res: any) {
        let unprinted = await Prisma.remain.findMany(
            {
                where:{
                    shop: req.user.shopId,
                    DepartamentId: req.user.departament,
                    PrintedDate: null,
                    IsDeleted: false,
                    SellDate: null
                },
                include: {
                    item: true
                }
            }
        )

        return res.status(200).json(
            new ApiAnswer(200).SetContent(unprinted)
        )
    }

    async PrintRemains(req: any, res: any) {
        const parseResult = PrintArraySchema.safeParse(req.body);
        if(!parseResult.success) {
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData).SetContent(parseResult.error.errors)
            )
        }
        const remains = parseResult.data as PrintData[];
        Logger(`Начинается печать ${remains.length} остатков`)
        try {
            const filepath = await PDFCreator.generate(remains);
            
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="remains.pdf"'); // ← "inline" вместо "attachment"
            
            const fileStream = fs.createReadStream(filepath);
            fileStream.pipe(res);
            
            fileStream.on('error', (err) => {
                Logger(`Ошибка чтения файла: ${err}`,LoggerMessageType.Error)
                res.status(500).json(
                    new ApiAnswer(500).SetError(ErrorCode.InternalError)
                );
            });
            
        } catch (error) {
            Logger(`'Ошибка генерации PDF: ${error}`,LoggerMessageType.Error)
            return res.status(500).json(
                new ApiAnswer(500).SetError(ErrorCode.InternalError)
            );
        }
    }

}

export default PrintController;

