/*
  Warnings:

  - You are about to drop the `account_activate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "account_activate" DROP CONSTRAINT "account_activate_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "code_activate" TEXT;

-- DropTable
DROP TABLE "account_activate";
