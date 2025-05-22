/*
  Warnings:

  - The primary key for the `Remain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Remain` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "showed" TIMESTAMP(6);

-- AlterTable
ALTER TABLE "Remain" DROP CONSTRAINT "Remain_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Remain_pkey" PRIMARY KEY ("id");
