/*
  Warnings:

  - You are about to drop the column `sizeX` on the `Remain` table. All the data in the column will be lost.
  - You are about to drop the column `sizeY` on the `Remain` table. All the data in the column will be lost.
  - Added the required column `metadata` to the `Remain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Remain" DROP COLUMN "sizeX",
DROP COLUMN "sizeY",
ADD COLUMN     "metadata" JSONB NOT NULL;
