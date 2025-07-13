/*
  Warnings:

  - Added the required column `junkBondDemand` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketMomentum` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marketVolatility` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `putCallOptions` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `safeHavenDemand` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockPriceBreadth` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockPriceStrength` to the `FearAndGreedIndex` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FearGreedRating" AS ENUM ('EXTREME_FEAR', 'FEAR', 'NEUTRAL', 'GREED', 'EXTREME_GREED');

-- AlterTable
ALTER TABLE "FearAndGreedIndex" 
ADD COLUMN "junkBondDemand" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "marketMomentum" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "marketVolatility" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "putCallOptions" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "rating" "FearGreedRating" NOT NULL,
ADD COLUMN     "safeHavenDemand" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "stockPriceBreadth" DECIMAL(4,1) NOT NULL,
ADD COLUMN     "stockPriceStrength" DECIMAL(4,1) NOT NULL,
ALTER COLUMN "score" SET DATA TYPE DECIMAL(4,1);
