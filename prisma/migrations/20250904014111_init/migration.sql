/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "imageUrl",
ADD COLUMN     "imageData" BYTEA;

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "photoUrl",
ADD COLUMN     "imageData" BYTEA;
