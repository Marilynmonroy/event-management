/*
  Warnings:

  - You are about to drop the column `dateTime` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - Added the required column `beginningEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacity` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endEvent` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_category_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "dateTime",
DROP COLUMN "subject",
ADD COLUMN     "beginningEvent" TEXT NOT NULL,
ADD COLUMN     "capacity" INTEGER NOT NULL,
ADD COLUMN     "dataEvent" TEXT NOT NULL,
ADD COLUMN     "endEvent" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ALTER COLUMN "category" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address";

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_category_fkey" FOREIGN KEY ("category") REFERENCES "Subject"("name") ON DELETE SET NULL ON UPDATE CASCADE;
