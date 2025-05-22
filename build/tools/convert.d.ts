import { Request } from "express";
import { ItemType } from "../../generated/prisma";
import { Pagination } from "../controllers/ItemsController";
export declare function GetTypeName(type: ItemType): string;
export declare function CreatePaginatorFromRequest(req: Request, count: number): Pagination;
