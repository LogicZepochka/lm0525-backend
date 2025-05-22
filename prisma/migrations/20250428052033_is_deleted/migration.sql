-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "IsDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Remain" ADD COLUMN     "IsDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ToolRequest" ADD COLUMN     "IsDeleted" BOOLEAN NOT NULL DEFAULT false;
