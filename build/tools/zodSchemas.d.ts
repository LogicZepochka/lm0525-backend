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
            meters: number;
            price: number;
        }, {
            meters: number;
            price: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    }, {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    }>;
    itemId: z.ZodString;
    price: z.ZodNumber;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    type: string;
    metadata: {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    };
    price: number;
    itemId: string;
}, {
    name: string;
    id: string;
    type: string;
    metadata: {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    };
    price: number;
    itemId: string;
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
            meters: number;
            price: number;
        }, {
            meters: number;
            price: number;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    }, {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    }>;
    itemId: z.ZodString;
    price: z.ZodNumber;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    type: string;
    metadata: {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    };
    price: number;
    itemId: string;
}, {
    name: string;
    id: string;
    type: string;
    metadata: {
        type: string;
        sizeX: number;
        sizeY: number;
        area: number;
        overlock?: {
            meters: number;
            price: number;
        } | null | undefined;
    };
    price: number;
    itemId: string;
}>, "many">;
