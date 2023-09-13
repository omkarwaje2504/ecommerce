/*
  Warnings:

  - A unique constraint covering the columns `[subcategoryName]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Category_subcategoryName_key` ON `Category`(`subcategoryName`);
