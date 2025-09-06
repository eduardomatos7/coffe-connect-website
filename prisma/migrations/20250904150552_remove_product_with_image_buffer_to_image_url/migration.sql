/*
  Warnings:

  - You are about to drop the column `imageData` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `imageData` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "imageData",
ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "imageData",
ADD COLUMN     "photoUrl" TEXT;
