import PDFCreator from "../pdfkit/pdfbuilder";
import { PrintData } from "../pdfkit/types/types";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import Prisma from "../tools/prisma";
import { PrintArraySchema, PrintParseSchema } from "../tools/zodSchemas";
import fs from "node:fs";


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

        try {
            const filepath = await PDFCreator.generate(remains);
            
            // Устанавливаем заголовки для открытия PDF в браузере
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="remains.pdf"'); // ← "inline" вместо "attachment"
            
            // Создаем поток чтения файла и передаем его в ответ
            const fileStream = fs.createReadStream(filepath);
            fileStream.pipe(res);
            
            /*// Удаляем временный файл после отправки
            fileStream.on('end', () => {
                fs.unlink(filepath, (err) => {
                    if (err) console.error('Ошибка удаления временного файла:', err);
                });
            });*/
            
            fileStream.on('error', (err) => {
                console.error('Ошибка чтения файла:', err);
                res.status(500).json(
                    new ApiAnswer(500).SetError(ErrorCode.InternalError)
                );
            });
            
        } catch (error) {
            console.error('Ошибка генерации PDF:', error);
            return res.status(500).json(
                new ApiAnswer(500).SetError(ErrorCode.InternalError)
            );
        }
    }

}

export default PrintController;

