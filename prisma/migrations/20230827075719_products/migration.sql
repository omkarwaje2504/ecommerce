-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_SubcategoryId_fkey`;

-- AlterTable
ALTER TABLE `product` MODIFY `SubcategoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_SubcategoryId_fkey` FOREIGN KEY (`SubcategoryId`) REFERENCES `Category`(`subcategoryId`) ON DELETE SET NULL ON UPDATE CASCADE;
