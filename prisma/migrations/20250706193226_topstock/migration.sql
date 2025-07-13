/*
  Warnings:

  - You are about to drop the column `endDate` on the `TopStock` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `TopStock` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stockId,standardDate]` on the table `TopStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stockId,standardDate,rank]` on the table `TopStock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `standardDate` to the `TopStock` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "TopStock_stockId_startDate_key";

-- DropIndex
DROP INDEX "TopStock_stockId_startDate_rank_key";

-- AlterTable
ALTER TABLE "TopStock" DROP COLUMN "endDate",
DROP COLUMN "startDate",
ADD COLUMN     "standardDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TopStock_stockId_standardDate_key" ON "TopStock"("stockId", "standardDate");

-- CreateIndex
CREATE UNIQUE INDEX "TopStock_stockId_standardDate_rank_key" ON "TopStock"("stockId", "standardDate", "rank");
