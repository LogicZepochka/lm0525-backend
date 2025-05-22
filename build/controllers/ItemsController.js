"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOneItem = GetOneItem;
exports.GetList = GetList;
exports.ChangeItemName = ChangeItemName;
exports.GetNames = GetNames;
exports.CreateNewItem = CreateNewItem;
const apiResponse_1 = __importDefault(require("../response/apiResponse"));
const prisma_1 = __importDefault(require("../tools/prisma"));
async function GetOneItem(req, res) {
    const lmcode = req.params.lmcode;
    let item = await prisma_1.default.item.findFirst({ where: { code: lmcode } });
    if (!item) {
        return res.status(404).json(new apiResponse_1.default(404).SetMessage("Не найдено"));
    }
    return res.status(200).json(new apiResponse_1.default(200).SetContent(item));
}
async function GetList(req, res) {
    const page = Number(req.query.page) || 0;
    const offset = Number(req.query.offset) || 10;
    const count = Number(await prisma_1.default.item.count({}));
    const next = !((page + 1) * offset > count);
    const paginationInfo = {
        page: page,
        offset: offset,
        count: count,
        next: next
    };
    let items = await prisma_1.default.item.findMany({ skip: offset * page, take: offset, orderBy: { name: 'desc' } });
    if (items.length == 0) {
        console.log("[Painator] Not found");
        return res.status(200).json(new apiResponse_1.default(200).SetMessage("Не найдено").SetContent({
            pagination: paginationInfo,
            data: []
        }));
    }
    return res.status(200).json(new apiResponse_1.default(200).SetContent({
        pagination: paginationInfo,
        data: items
    }));
}
async function ChangeItemName(req, res) {
}
async function GetNames(req, res) {
    let names = await prisma_1.default.item.findMany({ where: { departamentId: req.user.departament }, select: { name: true, code: true } });
    return res.status(200).json(new apiResponse_1.default(200).SetContent(names));
}
async function CreateNewItem(req, res) {
    const { Name, lm_code, metadata } = req.body.item;
    let item = await prisma_1.default.item.findFirst({ where: { code: lm_code } });
    if (item) {
        return res.status(400).json(new apiResponse_1.default(400).SetMessage("Такой код уже существует"));
    }
    item = await prisma_1.default.item.create({
        data: {
            name: Name,
            code: lm_code,
            type: metadata.type
        }
    });
    return res.status(200).json(new apiResponse_1.default(200).SetContent(item));
}
