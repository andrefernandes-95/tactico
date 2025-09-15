-- CreateTable
CREATE TABLE "public"."Match" (
    "id" SERIAL NOT NULL,
    "homeTeam" TEXT NOT NULL,
    "awayTeam" TEXT NOT NULL,
    "scoreHome" INTEGER NOT NULL,
    "scoreAway" INTEGER NOT NULL,
    "matchDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);
