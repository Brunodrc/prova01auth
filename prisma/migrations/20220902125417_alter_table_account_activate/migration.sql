/*
  Warnings:

  - Added the required column `code` to the `account_activate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "account_activate" ADD COLUMN     "code" INTEGER NOT NULL;
