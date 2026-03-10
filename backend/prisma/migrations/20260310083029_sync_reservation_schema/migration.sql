/*
  Warnings:

  - You are about to drop the column `time` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `date` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "time",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endTime" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "startTime" TEXT NOT NULL;
