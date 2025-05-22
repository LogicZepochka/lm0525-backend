import {z} from "zod";
import { LinearMetadata, Metadata, RollMetadata } from "../dto/RemainDTO";
import ItemDTO from "../dto/ItemDTO";
import { ItemType } from "../../generated/prisma";

const RollRemainMetadataSchema = z.object({
    type: z.string(),
    sizeX: z.number().positive("SizeX must be positive"),
    sizeY: z.number().positive("SizeY must be positive"),
    area: z.number(),
    overlock: z.object({
        meters: z.number().positive(),
        price: z.number().positive()
    }).optional().nullable()
})

const LinearMetadataSchema = z.object({
    type: z.string(),
    length: z.number().positive()
})

export function ConvertToMetadata(metadata: Metadata): LinearMetadata | RollMetadata | null {
    console.log(metadata.type);
    const metaRoll = RollRemainMetadataSchema.safeParse(metadata);
    if(metaRoll.success) {
        return (metaRoll.data as RollMetadata);
    }
    console.log("Failed to parse as Roll Remains: "+metaRoll.error);
    const LinearMetadata = LinearMetadataSchema.safeParse(metadata);
    if(LinearMetadata.success) {
        return (LinearMetadata.data as LinearMetadata);
    }
    console.log("Failed to parse as Linear: "+LinearMetadata.error);
    return null;
}

export const PrintParseSchema = z.object({
    id: z.string(),
    name: z.string(),
    metadata: z.object({
        area: z.number().positive(),
        type: z.string(),
        sizeX: z.number().positive(),
        sizeY: z.number().positive(),
        overlock: z.object({
            price: z.number().positive(),
            meters: z.number().positive()
        }).nullable().optional()
    }),
    itemId: z.string(),
    price: z.number().positive(),
    type: z.string()
})

export const PrintArraySchema = z.array(PrintParseSchema);