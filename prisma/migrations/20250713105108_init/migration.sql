-- CreateTable
CREATE TABLE "FearAndGreedIndex" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FearAndGreedIndex_pkey" PRIMARY KEY ("id")
);
