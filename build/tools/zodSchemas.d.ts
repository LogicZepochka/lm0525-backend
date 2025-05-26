import { z } from "zod";
import { LinearMetadata, Metadata, RollMetadata } from "../dto/RemainDTO";
export declare function ConvertToMetadata(metadata: Metadata): LinearMetadata | RollMetadata | null;
export declare const PrintParseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    metadata: z.ZodObject<{
        area: z.ZodNumber;
        type: z.ZodString;
        sizeX: z.ZodNumber;
        sizeY: z.ZodNumber;
        overlock: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            price: z.ZodNumber;
            meters: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            price: number;
            meters: number;
        }, {
            price: number;
            meters: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    }, {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    }>;
    itemId: z.ZodString;
    price: z.ZodNumber;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    metadata: {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    };
    itemId: string;
    name: string;
    type: string;
    price: number;
}, {
    id: string;
    metadata: {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    };
    itemId: string;
    name: string;
    type: string;
    price: number;
}>;
export declare const PrintArraySchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    metadata: z.ZodObject<{
        area: z.ZodNumber;
        type: z.ZodString;
        sizeX: z.ZodNumber;
        sizeY: z.ZodNumber;
        overlock: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            price: z.ZodNumber;
            meters: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            price: number;
            meters: number;
        }, {
            price: number;
            meters: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    }, {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    }>;
    itemId: z.ZodString;
    price: z.ZodNumber;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    metadata: {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    };
    itemId: string;
    name: string;
    type: string;
    price: number;
}, {
    id: string;
    metadata: {
        type: string;
        area: number;
        sizeX: number;
        sizeY: number;
        overlock?: {
            price: number;
            meters: number;
        } | null | undefined;
    };
    itemId: string;
    name: string;
    type: string;
    price: number;
}>, "many">;
