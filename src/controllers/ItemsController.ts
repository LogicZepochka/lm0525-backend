import ApiAnswer from "../response/apiResponse";
import Prisma from "../tools/prisma";


export type Pagination = {
    count: number,
    offset: number,
    page: number,
    next: boolean
}



export async function GetOneItem(req: any, res: any) {
    const lmcode = req.params.lmcode;
    let item = await Prisma.item.findFirst({where: {code: lmcode}});
    if(!item) {
        return res.status(404).json(
            new ApiAnswer(404).SetMessage("Не найдено")
        );
    }
    return res.status(200).json(
        new ApiAnswer(200).SetContent(item)
    )
}

export async function GetList(req: any, res: any) {
    const page: number = Number(req.query.page) || 0;
    const offset: number = Number(req.query.offset) || 10;
    const count: number = Number(await Prisma.item.count({}));
    const next: boolean = !((page+1) * offset > count);
    const paginationInfo: Pagination = {
        page: page,
        offset: offset,
        count: count,
        next: next
    };
    let items = await Prisma.item.findMany({skip: offset*page, take: offset, orderBy: {name: 'desc'}});
    
    if(items.length == 0) {
        console.log("[Painator] Not found");
        return res.status(200).json(
            new ApiAnswer(200).SetMessage("Не найдено").SetContent({
                pagination: paginationInfo,
                data: []
            })
        );
    }
    return res.status(200).json(
        new ApiAnswer(200).SetContent({
            pagination: paginationInfo,
            data: items
        })
    )
}

export async function ChangeItemName(req: any, res: any) {

}

export async function GetNames(req: any, res: any) {
    let names = await Prisma.item.findMany({where: {departamentId:req.user.departament}, select: {name: true, code: true}})
    return res.status(200).json(
        new ApiAnswer(200).SetContent(names)
    )
}

export async function CreateNewItem(req: any, res: any) {
    const {Name, lm_code, metadata} = req.body.item;
    let item = await Prisma.item.findFirst({where: {code: lm_code}});
    if(item) {
        return res.status(400).json(
            new ApiAnswer(400).SetMessage("Такой код уже существует")
        )
    }
    item = await Prisma.item.create({
        data: {
            name: Name,
            code: lm_code,
            type: metadata.type
        }
    })
    return res.status(200).json(
        new ApiAnswer(200).SetContent(item)
    )
}
