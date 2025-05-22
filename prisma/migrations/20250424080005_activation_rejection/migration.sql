-- CreateTable
CREATE TABLE "ActivationRejection" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,

    CONSTRAINT "ActivationRejection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActivationRejection_userId_key" ON "ActivationRejection"("userId");

-- AddForeignKey
ALTER TABLE "ActivationRejection" ADD CONSTRAINT "ActivationRejection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
