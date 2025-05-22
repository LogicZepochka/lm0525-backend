"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintArraySchema = exports.PrintParseSchema = void 0;
exports.ConvertToMetadata = ConvertToMetadata;
const zod_1 = require("zod");
const RollRemainMetadataSchema = zod_1.z.object({
    type: zod_1.z.string(),
    sizeX: zod_1.z.number().positive("SizeX must be positive"),
    sizeY: zod_1.z.number().positive("SizeY must be positive"),
    area: zod_1.z.number(),
    overlock: zod_1.z.object({
        meters: zod_1.z.number().positive(),
        price: zod_1.z.number().positive()
    }).optional().nullable()
});
const LinearMetadataSchema = zod_1.z.object({
    type: zod_1.z.string(),
    length: zod_1.z.number().positive()
});
function ConvertToMetadata(metadata) {
    console.log(metadata.type);
    const metaRoll = RollRemainMetadataSchema.safeParse(metadata);
    if (metaRoll.success) {
        return metaRoll.data;
    }
    console.log("Failed to parse as Roll Remains: " + metaRoll.error);
    const LinearMetadata = LinearMetadataSchema.safeParse(metadata);
    if (LinearMetadata.success) {
        return LinearMetadata.data;
    }
    console.log("Failed to parse as Linear: " + LinearMetadata.error);
    return null;
}
exports.PrintParseSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    metadata: zod_1.z.object({
        area: zod_1.z.number().positive(),
        type: zod_1.z.string(),
        sizeX: zod_1.z.number().positive(),
        sizeY: zod_1.z.number().positive(),
        overlock: zod_1.z.object({
            price: zod_1.z.number().positive(),
            meters: zod_1.z.number().positive()
        }).nullable().optional()
    }),
    itemId: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    type: zod_1.z.string()
});
exports.PrintArraySchema = zod_1.z.array(exports.PrintParseSchema);
