import { z } from "zod";
export declare const PaternosterSchema: z.ZodObject<{
    name: z.ZodString;
    maxSize: z.ZodNumber;
    shopId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    shopId: number;
    maxSize: number;
}, {
    name: string;
    shopId: number;
    maxSize: number;
}>;
export declare const PaternosterAxisSchema: z.ZodObject<{
    AxisNum: z.ZodNumber;
    AxisLetter: z.ZodString;
}, "strip", z.ZodTypeAny, {
    AxisNum: number;
    AxisLetter: string;
}, {
    AxisNum: number;
    AxisLetter: string;
}>;
export declare const RollPlacementSchema: z.ZodObject<{
    ItemCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    ItemCode: string;
}, {
    ItemCode: string;
}>;
