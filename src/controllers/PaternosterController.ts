import { version } from "../../package.json";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import CreateLogger, { LoggerMessageType } from "../tools/Logger";
import Prisma from "../tools/prisma";
import { PaternosterAxisSchema, PaternosterSchema, RollPlacementSchema } from "../validators/paternosterValidator";

interface APIDataInfo {
    version: string,
}

const Logger = CreateLogger("PATERNOSTER-CONTROLLER")

const PaternosterController = new class PaternosterController {
    async GetPaternoster(req: any, res: any) {
        try {
            const patern = Number(req.params.patern);
            if(isNaN(patern)) 
                return res.status(400).json(
                    new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные")
                )
            let data = await Prisma.paternoster.findFirst({
                where:{id: patern},
                select: {
                    id: true,
                    Name: true,
                    MaxSize: true,
                    ShopId: true,
                    Axises: {
                        select: {
                            id: true,
                            AxisNum: true,
                            AxisLetter: true,
                            Placements: {
                                select: {
                                    Item: {
                                        select: {
                                            code: true,
                                            name: true
                                        }
                                    }
                                }
                            }
                        },
                        orderBy: {
                            AxisNum: "desc"
                        }
                    }
                }
            });
            if(!data) {
                return res.status(404).json(
                    new ApiAnswer(404).SetError(ErrorCode.NotFound,"Данного патерностера не существует")
                )
            }
            else {
                return res.status(200).json(
                    new ApiAnswer(200).SetContent(data)
                )
            }
        }
        catch(e) {
            Logger("Failed to send data: "+e,LoggerMessageType.Error);
            return res.status(500).json(
                new ApiAnswer(500).SetError(ErrorCode.InternalError,"Что-то пошло не так")
            )
        }
    }


    CreateReport(req: any, res: any) {
        throw new Error("Method not implemented.");
    }

    async GetPaternosters(req: any, res: any) {
        var {shop} = req.query;
        console.log(shop)
        if(!shop) {
            shop = req.user.shopId
        }
        else {
            shop = Number(shop)
        }
        if(isNaN(shop)) 
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные")
            )
        
        let result = await Prisma.paternoster.findMany({
            where: {
                ShopId: shop
            },
            include: {
                Axises: {
                    include: {
                        Placements: {
                            select: {
                                Item: {
                                    select: {
                                        name: true,
                                        code: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        return res.status(200).json(
            new ApiAnswer(200).SetContent(result)
        )
    }

    async CreatePaternoster(req: any, res: any) {
        let result = PaternosterSchema.safeParse(req.body);
        if(result.error) {
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные").SetContent(result.error.errors)
            )
        }

        let paternoster = await Prisma.paternoster.create({
            data: {
                Name: result.data.name,
                MaxSize: result.data.maxSize,
                ShopId: result.data.shopId
            }
        });

        if(!paternoster) {
            Logger("Error occured when create new paternoster",LoggerMessageType.Error)
            return res.status(500).json(
                new ApiAnswer(500).SetError(ErrorCode.InternalError,"Что-то пошло не так")
            )
        }

        Logger("Created new paternoster with id "+paternoster.id)
        return res.status(200).json(
            new ApiAnswer(200).SetContent(paternoster)
        )
    }

    async DeletePaternoster(req: any, res: any) {
        const patern = Number(req.params.patern);
        if(isNaN(patern)) 
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные")
            )
        let data = await Prisma.paternoster.findFirst({
                where:{id: patern}
            });
        if(!data) {
            return res.status(404).json(
                new ApiAnswer(404).SetError(ErrorCode.NotFound,"Данного патерностера не существует")
            )
        }
        else {
            await Prisma.paternoster.delete({
                where:{
                    id: patern
                }
            })

            return res.status(200).json(
                new ApiAnswer(200).SetMessage("OK")
            )
        }
    }

    async CreateAxis(req: any, res: any) {
        try {
            const patern = Number(req.params.patern);
            if(isNaN(patern)) 
                return res.status(400).json(
                    new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные")
                )
            let schema = PaternosterAxisSchema.safeParse(req.body);
            if(schema.error) {
                return res.status(400).json(
                    new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные").SetContent(schema.error.errors)
                )
            }
            
            let data = await Prisma.paternoster.findFirst({
                where:{id: patern}
            });
            if(!data) {
                return res.status(404).json(
                    new ApiAnswer(404).SetError(ErrorCode.NotFound,"Данного патерностера не существует")
                )
            }
            else {
                let search = await Prisma.paternosterAxis.findFirst({
                    where: {
                        PaternosterId: patern,
                        OR: [
                        {AxisLetter: schema.data.AxisLetter},
                        {AxisNum: schema.data.AxisNum}
                        ]
                    }
                })
                if(search) {
                    return res.status(400).json(
                        new ApiAnswer(400).SetError(ErrorCode.WrongData,"Уже существует ось с данной буквой или номером")
                    )
                }

                let result = await Prisma.paternosterAxis.create({
                    data: {
                        PaternosterId: patern,
                        AxisLetter: schema.data.AxisLetter,
                        AxisNum: schema.data.AxisNum
                    }
                })

                return res.status(200).json(
                    new ApiAnswer(200).SetContent(result)
                )
            }
        }
        catch(e) {
            Logger("Failed to send data: "+e,LoggerMessageType.Error);
            return res.status(500).json(
                new ApiAnswer(500).SetError(ErrorCode.InternalError,"Что-то пошло не так")
            )
        }
    }

    async InstertToAxis(req: any, res: any) {
        const patern = Number(req.params.patern);
        const axis = Number(req.params.axis);
        if(isNaN(patern) || isNaN(axis)) 
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные")
        )
        
        let result = RollPlacementSchema.safeParse(req.body);
        if(result.error) {
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные").SetContent(result.error.errors)
            )
        }

        let data = await Prisma.paternosterAxis.findFirst({
            where: {
                id: axis,
                PaternosterId: patern
            }
        });
        if(!data) {
            return res.status(404).json(
                new ApiAnswer(404).SetError(ErrorCode.NotFound,"Данная ось не принадлежит этому патерностеру, или оси не существует")
            )
        }

        let item = await Prisma.item.findFirst({
            where:{
                code: result.data.ItemCode
            }
        });
        if(!item) {
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Данного товара не существует")
            )
        }
        
        let rollPlacement = await Prisma.rollPlacement.create({
            data: {
                AxisId: axis,
                Itemcode: item.code
            }
        })
        let resultAxis = await Prisma.paternosterAxis.findFirst({
            where: {
                id: rollPlacement.AxisId
            },
            include: {
                        Placements: {
                            select: {
                                Item: {
                                    select: {
                                        name: true,
                                        code: true
                                    }
                                }
                            }
                        }
                    }
        })

        return res.status(200).json(
                new ApiAnswer(200).SetContent(resultAxis)
        )
    }

    async RemoveFromAxis(req: any, res: any) {
        const patern = Number(req.params.patern);
        const axis = Number(req.params.axis);
        const id = req.params.id;
        if(isNaN(patern) || isNaN(axis)) 
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные")
        )

        let rollPlacement = await Prisma.rollPlacement.findFirst({
            where: {
                AxisId: axis,
                Itemcode: id
            }
        })

        

        if(!rollPlacement) {
            return res.status(404).json(
                new ApiAnswer(404).SetError(ErrorCode.NotFound,"Предмета нет на оси, либо ось не существует")
            )
        }

        let axis_id = rollPlacement.AxisId;

        await Prisma.rollPlacement.delete({
            where: {
                id: rollPlacement.id,
                AxisId: rollPlacement.AxisId
            }
        })

        let resultAxis = await Prisma.paternosterAxis.findFirst({
            where: {
                id: axis_id
            },
            include: {
                        Placements: {
                            select: {
                                Item: {
                                    select: {
                                        name: true,
                                        code: true
                                    }
                                }
                            }
                        }
                    }
        })

        return res.status(200).json(
                new ApiAnswer(200).SetContent(resultAxis)
        )
    }
    
    async DeleteAxis(req: any, res: any) {
        const patern = Number(req.params.patern);
        const axis = Number(req.params.axis);
        if(isNaN(patern) || isNaN(axis)) 
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Невалидные данные")
        )

        let data = await Prisma.paternosterAxis.findFirst({
            where: {
                id: axis,
                PaternosterId: patern
            }
        });
        if(!data) {
            return res.status(404).json(
                new ApiAnswer(404).SetError(ErrorCode.NotFound,"Данная ось не принадлежит этому патерностеру, или оси не существует")
            )
        }

        let item = await Prisma.paternosterAxis.delete({
            where:{
                id: axis,
                PaternosterId: patern
            }
        });
        if(!item) {
            return res.status(400).json(
                new ApiAnswer(400).SetError(ErrorCode.WrongData,"Данного товара не существует")
            )
        }

        return res.status(200).json(
                new ApiAnswer(200).SetContent(item)
        )
    }
}

export default PaternosterController;