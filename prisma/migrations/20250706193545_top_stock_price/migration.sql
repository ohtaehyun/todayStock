/*
  Warnings:

  - You are about to drop the column `standardDate` on the `TopStock` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stockId,tradeDate]` on the table `TopStock` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[stockId,tradeDate,rank]` on the table `TopStock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `closePrice` to the `TopStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startPrice` to the `TopStock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tradeDate` to the `TopStock` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "TopStock_stockId_standardDate_key";

-- DropIndex
DROP INDEX "TopStock_stockId_standardDate_rank_key";

-- AlterTable
ALTER TABLE "TopStock" DROP COLUMN "standardDate",
ADD COLUMN     "closePrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "startPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "tradeDate" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TopStock_stockId_tradeDate_key" ON "TopStock"("stockId", "tradeDate");

-- CreateIndex
CREATE UNIQUE INDEX "TopStock_stockId_tradeDate_rank_key" ON "TopStock"("stockId", "tradeDate", "rank");
