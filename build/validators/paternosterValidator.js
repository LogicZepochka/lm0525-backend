"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollPlacementSchema = exports.PaternosterAxisSchema = exports.PaternosterSchema = void 0;
const zod_1 = require("zod");
exports.PaternosterSchema = zod_1.z.object({
    name: zod_1.z.string(),
    maxSize: zod_1.z.number().positive().max(5, "Максимальный размер - 5 метров"),
    shopId: zod_1.z.number().positive()
});
exports.PaternosterAxisSchema = zod_1.z.object({
    AxisNum: zod_1.z.number().positive(),
    AxisLetter: zod_1.z.string().min(1).max(1)
});
exports.RollPlacementSchema = zod_1.z.object({
    ItemCode: zod_1.z.string()
});
