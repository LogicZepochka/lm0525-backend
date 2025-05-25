-- DropForeignKey
ALTER TABLE "PaternosterAxis" DROP CONSTRAINT "PaternosterAxis_PaternosterId_fkey";

-- DropForeignKey
ALTER TABLE "RollPlacement" DROP CONSTRAINT "RollPlacement_AxisId_fkey";

-- AddForeignKey
ALTER TABLE "PaternosterAxis" ADD CONSTRAINT "PaternosterAxis_PaternosterId_fkey" FOREIGN KEY ("PaternosterId") REFERENCES "Paternoster"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RollPlacement" ADD CONSTRAINT "RollPlacement_AxisId_fkey" FOREIGN KEY ("AxisId") REFERENCES "PaternosterAxis"("id") ON DELETE CASCADE ON UPDATE CASCADE;
