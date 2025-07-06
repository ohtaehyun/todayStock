-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopStock" (
    "id" SERIAL NOT NULL,
    "stockId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "rank" INTEGER NOT NULL,
    "marketCap" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TopStock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_ticker_key" ON "Stock"("ticker");

-- CreateIndex
CREATE UNIQUE INDEX "TopStock_stockId_startDate_key" ON "TopStock"("stockId", "startDate");

-- CreateIndex
CREATE UNIQUE INDEX "TopStock_stockId_startDate_rank_key" ON "TopStock"("stockId", "startDate", "rank");

-- AddForeignKey
ALTER TABLE "TopStock" ADD CONSTRAINT "TopStock_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
