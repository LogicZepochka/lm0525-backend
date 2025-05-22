-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('CREATED', 'APPROVED', 'DEVELOPING', 'FINISHED', 'REJECTED');

-- CreateTable
CREATE TABLE "ToolRequest" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "toolName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "howToContact" TEXT,
    "status" "RequestStatus" NOT NULL DEFAULT 'CREATED',
    "userId" INTEGER NOT NULL,
    "departamentId" INTEGER NOT NULL,
    "RejectionReason" TEXT,

    CONSTRAINT "ToolRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToolRequest" ADD CONSTRAINT "ToolRequest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
