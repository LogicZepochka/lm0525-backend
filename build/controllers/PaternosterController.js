"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const Logger_1 = __importStar(require("../tools/Logger"));
const prisma_1 = __importDefault(require("../tools/prisma"));
const paternosterValidator_1 = require("../validators/paternosterValidator");
const Logger = (0, Logger_1.default)("PATERNOSTER-CONTROLLER");
const PaternosterController = new class PaternosterController {
    async GetPaternoster(req, res) {
        try {
            const patern = Number(req.params.patern);
            if (isNaN(patern))
                return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные"));
            let data = await prisma_1.default.paternoster.findFirst({
                where: { id: patern },
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
            if (!data) {
                return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Данного патерностера не существует"));
            }
            else {
                return res.status(200).json(new apiResponse_1.default(200).SetContent(data));
            }
        }
        catch (e) {
            Logger("Failed to send data: " + e, Logger_1.LoggerMessageType.Error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Что-то пошло не так"));
        }
    }
    CreateReport(req, res) {
        throw new Error("Method not implemented.");
    }
    async GetPaternosters(req, res) {
        var { shop } = req.query;
        console.log(shop);
        if (!shop) {
            shop = req.user.shopId;
        }
        else {
            shop = Number(shop);
        }
        if (isNaN(shop))
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные"));
        let result = await prisma_1.default.paternoster.findMany({
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
        });
        return res.status(200).json(new apiResponse_1.default(200).SetContent(result));
    }
    async CreatePaternoster(req, res) {
        let result = paternosterValidator_1.PaternosterSchema.safeParse(req.body);
        if (result.error) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные").SetContent(result.error.errors));
        }
        let paternoster = await prisma_1.default.paternoster.create({
            data: {
                Name: result.data.name,
                MaxSize: result.data.maxSize,
                ShopId: result.data.shopId
            }
        });
        if (!paternoster) {
            Logger("Error occured when create new paternoster", Logger_1.LoggerMessageType.Error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Что-то пошло не так"));
        }
        Logger("Created new paternoster with id " + paternoster.id);
        return res.status(200).json(new apiResponse_1.default(200).SetContent(paternoster));
    }
    async DeletePaternoster(req, res) {
        const patern = Number(req.params.patern);
        if (isNaN(patern))
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные"));
        let data = await prisma_1.default.paternoster.findFirst({
            where: { id: patern }
        });
        if (!data) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Данного патерностера не существует"));
        }
        else {
            await prisma_1.default.paternoster.delete({
                where: {
                    id: patern
                }
            });
            return res.status(200).json(new apiResponse_1.default(200).SetMessage("OK"));
        }
    }
    async CreateAxis(req, res) {
        try {
            const patern = Number(req.params.patern);
            if (isNaN(patern))
                return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные"));
            let schema = paternosterValidator_1.PaternosterAxisSchema.safeParse(req.body);
            if (schema.error) {
                return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные").SetContent(schema.error.errors));
            }
            let data = await prisma_1.default.paternoster.findFirst({
                where: { id: patern }
            });
            if (!data) {
                return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Данного патерностера не существует"));
            }
            else {
                let search = await prisma_1.default.paternosterAxis.findFirst({
                    where: {
                        PaternosterId: patern,
                        OR: [
                            { AxisLetter: schema.data.AxisLetter },
                            { AxisNum: schema.data.AxisNum }
                        ]
                    }
                });
                if (search) {
                    return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Уже существует ось с данной буквой или номером"));
                }
                let result = await prisma_1.default.paternosterAxis.create({
                    data: {
                        PaternosterId: patern,
                        AxisLetter: schema.data.AxisLetter,
                        AxisNum: schema.data.AxisNum
                    }
                });
                return res.status(200).json(new apiResponse_1.default(200).SetContent(result));
            }
        }
        catch (e) {
            Logger("Failed to send data: " + e, Logger_1.LoggerMessageType.Error);
            return res.status(500).json(new apiResponse_1.default(500).SetError(types_1.ErrorCode.InternalError, "Что-то пошло не так"));
        }
    }
    async InstertToAxis(req, res) {
        const patern = Number(req.params.patern);
        const axis = Number(req.params.axis);
        if (isNaN(patern) || isNaN(axis))
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные"));
        let result = paternosterValidator_1.RollPlacementSchema.safeParse(req.body);
        if (result.error) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные").SetContent(result.error.errors));
        }
        let data = await prisma_1.default.paternosterAxis.findFirst({
            where: {
                id: axis,
                PaternosterId: patern
            }
        });
        if (!data) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Данная ось не принадлежит этому патерностеру, или оси не существует"));
        }
        let item = await prisma_1.default.item.findFirst({
            where: {
                code: result.data.ItemCode
            }
        });
        if (!item) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Данного товара не существует"));
        }
        let rollPlacement = await prisma_1.default.rollPlacement.create({
            data: {
                AxisId: axis,
                Itemcode: item.code
            }
        });
        let resultAxis = await prisma_1.default.paternosterAxis.findFirst({
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
        });
        return res.status(200).json(new apiResponse_1.default(200).SetContent(resultAxis));
    }
    async RemoveFromAxis(req, res) {
        const patern = Number(req.params.patern);
        const axis = Number(req.params.axis);
        const id = req.params.id;
        if (isNaN(patern) || isNaN(axis))
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные"));
        let rollPlacement = await prisma_1.default.rollPlacement.findFirst({
            where: {
                AxisId: axis,
                Itemcode: id
            }
        });
        if (!rollPlacement) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Предмета нет на оси, либо ось не существует"));
        }
        let axis_id = rollPlacement.AxisId;
        await prisma_1.default.rollPlacement.delete({
            where: {
                id: rollPlacement.id,
                AxisId: rollPlacement.AxisId
            }
        });
        let resultAxis = await prisma_1.default.paternosterAxis.findFirst({
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
        });
        return res.status(200).json(new apiResponse_1.default(200).SetContent(resultAxis));
    }
    async DeleteAxis(req, res) {
        const patern = Number(req.params.patern);
        const axis = Number(req.params.axis);
        if (isNaN(patern) || isNaN(axis))
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Невалидные данные"));
        let data = await prisma_1.default.paternosterAxis.findFirst({
            where: {
                id: axis,
                PaternosterId: patern
            }
        });
        if (!data) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Данная ось не принадлежит этому патерностеру, или оси не существует"));
        }
        let item = await prisma_1.default.paternosterAxis.delete({
            where: {
                id: axis,
                PaternosterId: patern
            }
        });
        if (!item) {
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Данного товара не существует"));
        }
        return res.status(200).json(new apiResponse_1.default(200).SetContent(item));
    }
};
exports.default = PaternosterController;
