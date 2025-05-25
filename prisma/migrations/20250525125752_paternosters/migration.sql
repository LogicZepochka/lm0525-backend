-- CreateTable
CREATE TABLE "Paternoster" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "MaxSize" DOUBLE PRECISION NOT NULL,
    "ShopId" INTEGER NOT NULL,

    CONSTRAINT "Paternoster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaternosterAxis" (
    "id" SERIAL NOT NULL,
    "PaternosterId" INTEGER NOT NULL,

    CONSTRAINT "PaternosterAxis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RollPlacement" (
    "id" SERIAL NOT NULL,
    "AxisId" INTEGER NOT NULL,
    "Itemcode" TEXT NOT NULL,

    CONSTRAINT "RollPlacement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PaternosterAxis" ADD CONSTRAINT "PaternosterAxis_PaternosterId_fkey" FOREIGN KEY ("PaternosterId") REFERENCES "Paternoster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RollPlacement" ADD CONSTRAINT "RollPlacement_AxisId_fkey" FOREIGN KEY ("AxisId") REFERENCES "PaternosterAxis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RollPlacement" ADD CONSTRAINT "RollPlacement_Itemcode_fkey" FOREIGN KEY ("Itemcode") REFERENCES "Item"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
