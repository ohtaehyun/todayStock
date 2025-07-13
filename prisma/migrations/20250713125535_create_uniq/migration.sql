/*
  Warnings:

  - A unique constraint covering the columns `[createdAt]` on the table `FearAndGreedIndex` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "FearAndGreedIndex" ALTER COLUMN "score" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "junkBondDemand" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "marketMomentum" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "marketVolatility" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "putCallOptions" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "safeHavenDemand" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "stockPriceBreadth" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "stockPriceStrength" SET DATA TYPE DECIMAL(65,30);

-- CreateIndex
CREATE UNIQUE INDEX "FearAndGreedIndex_createdAt_key" ON "FearAndGreedIndex"("createdAt");
