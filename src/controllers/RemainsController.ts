import { User } from "../../generated/prisma";
import RemainDTO from "../dto/RemainDTO";
import RemainGroupDTO from "../dto/RemainGroupDTO";
import { UserDTO } from "../dto/UserDTO";
import ApiAnswer from "../response/apiResponse";
import { ErrorCode } from "../response/types";
import { CreatePaginatorFromRequest } from "../tools/convert";
import Prisma from "../tools/prisma";

const hashedData: Map<number,HashedRemainsGroup> = new Map<number,HashedRemainsGroup>();
export type HashedRemainsGroup = {
    RemainGroups: RemainGroupDTO[]
    timestamp: number
}


const RemainsController = new class RemainsController {
    async GetOne(req:any, res: any) {
        const remainId = req.params.id;
        let remainData = await Prisma.remain.findFirst({where: {id:remainId}, include: {createdBy: true, item: true}});
        if(!remainData) {
            return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Остаток не найден"));
        }

        let dto = new RemainDTO(remainData,remainData.createdBy,remainData.item,remainData.metadata);
        return res.status(200).json(new ApiAnswer(200).SetContent(dto));
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
   async GetRemainListGrouped(req: any, res:any) {
        
        const departament: number = Number(req.query.departament) || (req.user as User).departamentId || 0;
        const shop: number = Number(req.query.shop) || (req.user as User).shopId || 0;
        const filterText: string | undefined = req.query.filterText;
        let remains = 
            !filterText ? await Prisma.remain.findMany({where:{shop:shop, SellDate:null, DepartamentId: departament, IsDeleted: false},include:{createdBy:true,item:true},orderBy:{createdAt:'desc'}}) :
            await Prisma.remain.findMany({where:{OR:[
                {shop:shop,IsDeleted:false, DepartamentId: departament, SellDate:null, item:{code: {contains:filterText,mode:'insensitive'}}},
                {shop:shop,IsDeleted:false, DepartamentId: departament, SellDate:null, item:{name: {contains:filterText,mode:'insensitive'}}}
            ]},include:{createdBy:true,item:true},orderBy:{createdAt:'desc'}})
        let result: RemainGroupDTO[] = []
        let dictionary: Map<string,RemainDTO[]> = new Map<string,RemainDTO[]>();
        for(let remain of remains) {
            if(dictionary.has(remain.item.code)) {
                dictionary.get(remain.item.code)?.push(new RemainDTO(remain,remain.createdBy,remain.item,remain.metadata));
            }
            else {
                dictionary.set(remain.item.code,[]);
                dictionary.get(remain.item.code)?.push(new RemainDTO(remain,remain.createdBy,remain.item,remain.metadata));
            }
        }
        for(let [key,value] of dictionary) {
            let group = new RemainGroupDTO(key,value[0].item?.name as string,shop,departament);
            for(let remainDTO of value) {
                group.AddRemainToGroup(remainDTO)
            }
            result.push(group);
        }
        
        const paginator = CreatePaginatorFromRequest(req,result.length);
        
        if(result.length == 0) {
            return res.status(200).json(
                new ApiAnswer(200).SetMessage("Не найдено").SetContent({
                    pagination: paginator,
                    data: []
                })
            );
        }
        hashedData.set(req.user.id,{
            timestamp: Date.now(),
            RemainGroups: result
        })
        return res.status(200).json(
            new ApiAnswer(200).SetContent({
                pagination: paginator,
                data: result.slice(paginator.page*paginator.offset,paginator.page*paginator.offset+paginator.offset)
            })
        )
   }

   async CreateNewRemains(req: any, res:any) {
        const {items} = req.body;
        let data = [];
        let result = {
            success: 0,
            errors: 0,
            failedItems: [] as any
        }
        for(let item of items) {
            try {
                await Prisma.remain.create({
                    data: {shop: req.user.shopId, DepartamentId: req.user.departamentId, itemId: item.lm_code, userId: req.user.id, metadata: item.metadata}
                })
                result.success++;
            }
            catch(error) {
                result.errors++;
                result.failedItems.push(item);
            }
        }
        return res.status(200).json(
                new ApiAnswer(200).SetContent(result)
        )
   }

   async SellRemain(req: any, res: any) {
        const remainId = req.params.id;
        let remainData = await Prisma.remain.findFirst({where: {id:remainId}, include: {createdBy: true, item: true}});
        if(!remainData) {
            return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Остаток не найден"));
        }
        if(req.user.shopId !== remainData.shop) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.NotAllowed,"Нельзя продать остаток не из своего магазина"));
        }
        await Prisma.remain.update({where:{id: remainId},data: {SellDate: new Date()}})
        return res.sendStatus(204);
   }

   async DeleteRemain(req: any, res: any) {
        const remainId = req.params.id;
        let remainData = await Prisma.remain.findFirst({where: {id:remainId}, include: {createdBy: true, item: true}});
        if(!remainData) {
            return res.status(404).json(new ApiAnswer(404).SetError(ErrorCode.NotFound,"Остаток не найден"));
        }
        if(req.user.shopId !== remainData.shop) {
            return res.status(401).json(new ApiAnswer(401).SetError(ErrorCode.NotAllowed,"Нельзя удалить остаток не из своего магазина"));
        }
        await Prisma.remain.update({where:{id: remainId},data: {IsDeleted: true}})
        return res.sendStatus(204);
   }

   async GetRemainsBySize(req: any, res: any) {
        const {sizeX,sizeY, diff} = req.body;
        if(!sizeX || !sizeY || !diff) 
            return res.status(400).json(new ApiAnswer(400).SetError(ErrorCode.WrongData,"Не указана ширина или длина остатка"));
        

        let result = await Prisma.$queryRaw`
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

        res.status(200).json(new ApiAnswer(200).SetContent(result));
   }

   async GetUnprintedRemains(req: any, res: any) {
        let result = await Prisma.remain.findMany({where:{PrintedDate: null, shop: req.user.shopId, DepartamentId: req.user.departamentId}});
        return res.status(200).json(
            new ApiAnswer(200).SetContent(result)
        )
   }
}

export default RemainsController;