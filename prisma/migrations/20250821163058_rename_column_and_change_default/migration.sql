/*
  Warnings:

  - You are about to drop the column `telefone` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "telefone",
ADD COLUMN     "phone" VARCHAR(20),
ALTER COLUMN "rule" SET DEFAULT 'user';
