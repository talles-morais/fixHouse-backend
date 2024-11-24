/*
  Warnings:

  - Added the required column `date` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;
