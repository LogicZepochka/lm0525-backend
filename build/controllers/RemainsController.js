"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RemainDTO_1 = __importDefault(require("../dto/RemainDTO"));
const RemainGroupDTO_1 = __importDefault(require("../dto/RemainGroupDTO"));
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const types_1 = require("../response/types");
const convert_1 = require("../tools/convert");
const prisma_1 = __importDefault(require("../tools/prisma"));
const hashedData = new Map();
const RemainsController = new class RemainsController {
    async GetOne(req, res) {
        const remainId = req.params.id;
        let remainData = await prisma_1.default.remain.findFirst({ where: { id: remainId }, include: { createdBy: true, item: true } });
        if (!remainData) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Остаток не найден"));
        }
        let dto = new RemainDTO_1.default(remainData, remainData.createdBy, remainData.item, remainData.metadata);
        return res.status(200).json(new apiResponse_1.default(200).SetContent(dto));
    }
    /*async GetList(req:any, res: any) {
        const count:number = await Prisma.remain.count();
        const departament: number = Number(req.query.departament) || (req.user as User).departamentId || 0;
        const shop: number = Number(req.query.shop) || (req.user as User).shopId || 0;
        const paginator = CreatePaginatorFromRequest(req,count);
        let remainsList = await Prisma.remain.findMany({where:{shop:shop, DepartamentId: departament},skip: paginator.offset*paginator.page, take: paginator.offset, orderBy: {createdAt: 'desc'}});
        if(remainsList.length == 0) {
                console.log("[Painator] Not found");
                return res.status(404).json(
                    new ApiAnswer(404).SetMessage("Не найдено").SetContent({
                        pagination: paginator
                    })
                );
            }
            return res.status(200).json(
                new ApiAnswer(200).SetContent({
                    pagination: paginator,
                    data: remainsList
                })
            )
    }*/
    async GetRemainListGrouped(req, res) {
        const departament = Number(req.query.departament) || req.user.departamentId || 0;
        const shop = Number(req.query.shop) || req.user.shopId || 0;
        const filterText = req.query.filterText;
        let remains = !filterText ? await prisma_1.default.remain.findMany({ where: { shop: shop, SellDate: null, DepartamentId: departament, IsDeleted: false }, include: { createdBy: true, item: true }, orderBy: { createdAt: 'desc' } }) :
            await prisma_1.default.remain.findMany({ where: { OR: [
                        { shop: shop, IsDeleted: false, DepartamentId: departament, SellDate: null, item: { code: { contains: filterText, mode: 'insensitive' } } },
                        { shop: shop, IsDeleted: false, DepartamentId: departament, SellDate: null, item: { name: { contains: filterText, mode: 'insensitive' } } }
                    ] }, include: { createdBy: true, item: true }, orderBy: { createdAt: 'desc' } });
        let result = [];
        let dictionary = new Map();
        for (let remain of remains) {
            if (dictionary.has(remain.item.code)) {
                dictionary.get(remain.item.code)?.push(new RemainDTO_1.default(remain, remain.createdBy, remain.item, remain.metadata));
            }
            else {
                dictionary.set(remain.item.code, []);
                dictionary.get(remain.item.code)?.push(new RemainDTO_1.default(remain, remain.createdBy, remain.item, remain.metadata));
            }
        }
        for (let [key, value] of dictionary) {
            let group = new RemainGroupDTO_1.default(key, value[0].item?.name, shop, departament);
            for (let remainDTO of value) {
                group.AddRemainToGroup(remainDTO);
            }
            result.push(group);
        }
        const paginator = (0, convert_1.CreatePaginatorFromRequest)(req, result.length);
        if (result.length == 0) {
            return res.status(200).json(new apiResponse_1.default(200).SetMessage("Не найдено").SetContent({
                pagination: paginator,
                data: []
            }));
        }
        hashedData.set(req.user.id, {
            timestamp: Date.now(),
            RemainGroups: result
        });
        return res.status(200).json(new apiResponse_1.default(200).SetContent({
            pagination: paginator,
            data: result.slice(paginator.page * paginator.offset, paginator.page * paginator.offset + paginator.offset)
        }));
    }
    async CreateNewRemains(req, res) {
        const { items } = req.body;
        let data = [];
        let result = {
            success: 0,
            errors: 0,
            failedItems: []
        };
        for (let item of items) {
            try {
                await prisma_1.default.remain.create({
                    data: { shop: req.user.shopId, DepartamentId: req.user.departamentId, itemId: item.lm_code, userId: req.user.id, metadata: item.metadata }
                });
                result.success++;
            }
            catch (error) {
                result.errors++;
                result.failedItems.push(item);
            }
        }
        return res.status(200).json(new apiResponse_1.default(200).SetContent(result));
    }
    async SellRemain(req, res) {
        const remainId = req.params.id;
        let remainData = await prisma_1.default.remain.findFirst({ where: { id: remainId }, include: { createdBy: true, item: true } });
        if (!remainData) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Остаток не найден"));
        }
        if (req.user.shopId !== remainData.shop) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.NotAllowed, "Нельзя продать остаток не из своего магазина"));
        }
        await prisma_1.default.remain.update({ where: { id: remainId }, data: { SellDate: new Date() } });
        return res.sendStatus(204);
    }
    async DeleteRemain(req, res) {
        const remainId = req.params.id;
        let remainData = await prisma_1.default.remain.findFirst({ where: { id: remainId }, include: { createdBy: true, item: true } });
        if (!remainData) {
            return res.status(404).json(new apiResponse_1.default(404).SetError(types_1.ErrorCode.NotFound, "Остаток не найден"));
        }
        if (req.user.shopId !== remainData.shop) {
            return res.status(401).json(new apiResponse_1.default(401).SetError(types_1.ErrorCode.NotAllowed, "Нельзя удалить остаток не из своего магазина"));
        }
        await prisma_1.default.remain.update({ where: { id: remainId }, data: { IsDeleted: true } });
        return res.sendStatus(204);
    }
    async GetRemainsBySize(req, res) {
        const { sizeX, sizeY, diff } = req.body;
        if (!sizeX || !sizeY || !diff)
            return res.status(400).json(new apiResponse_1.default(400).SetError(types_1.ErrorCode.WrongData, "Не указана ширина или длина остатка"));
        let result = await prisma_1.default.$queryRaw `
        SELECT 
        i."name" as "ItemName",
        r."id" as "id",
        r."itemId" as "itemId",
        r."metadata",
        r."DepartamentId" as "departament",
        r."shop"
        FROM "Remain" r
        LEFT JOIN "Item" i ON r."itemId" = i."code"
        WHERE 
        r."SellDate" IS null AND
        r."shop"::int4 = ${req.user.shopId} AND
        r."IsDeleted"::boolean = FALSE AND
        (r."metadata"->>'sizeX')::numeric BETWEEN ${sizeX - diff} AND ${sizeX + diff} AND
        (r."metadata"->>'sizeY')::numeric BETWEEN ${sizeY - diff} AND ${sizeY + diff}`;
        res.status(200).json(new apiResponse_1.default(200).SetContent(result));
    }
    async GetUnprintedRemains(req, res) {
        let result = await prisma_1.default.remain.findMany({ where: { PrintedDate: null, shop: req.user.shopId, DepartamentId: req.user.departamentId } });
        return res.status(200).json(new apiResponse_1.default(200).SetContent(result));
    }
};
exports.default = RemainsController;
