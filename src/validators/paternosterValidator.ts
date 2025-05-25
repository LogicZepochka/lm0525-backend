import { z } from "zod";



export const PaternosterSchema = z.object({
    name: z.string(),
    maxSize: z.number().positive().max(5,"Максимальный размер - 5 метров"),
    shopId: z.number().positive()
})

export const PaternosterAxisSchema = z.object({
    AxisNum: z.number().positive(),
    AxisLetter: z.string().min(1).max(1)
})

export const RollPlacementSchema = z.object({
    ItemCode: z.string()
})