-- AlterTable
ALTER TABLE "users" ALTER COLUMN "conta_ativa" DROP DEFAULT;

-- CreateTable
CREATE TABLE "account_activate" (
    "id" TEXT NOT NULL,
    "expersIn" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "account_activate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_activate_userId_key" ON "account_activate"("userId");

-- AddForeignKey
ALTER TABLE "account_activate" ADD CONSTRAINT "account_activate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
