/*
  Warnings:

  - You are about to alter the column `value` on the `Service` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Service" ALTER COLUMN "value" SET DATA TYPE INTEGER;
