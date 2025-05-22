/*
  Warnings:

  - Added the required column `shopId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('Linoleym', 'Kovrolin', 'Dorozhka', 'Rezina', 'Trava');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "shopId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Item" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "ItemType" NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Remain" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sizeX" DOUBLE PRECISION NOT NULL,
    "sizeY" DOUBLE PRECISION NOT NULL,
    "shop" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "itemId" TEXT NOT NULL,
    "SellDate" TIMESTAMP(3),

    CONSTRAINT "Remain_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Remain" ADD CONSTRAINT "Remain_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Remain" ADD CONSTRAINT "Remain_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
