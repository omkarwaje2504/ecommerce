-- CreateTable
CREATE TABLE `Product` (
    `productId` INTEGER NOT NULL AUTO_INCREMENT,
    `ProductName` VARCHAR(191) NOT NULL,
    `ProductPrice` INTEGER NOT NULL,
    `ProductImagepath` VARCHAR(191) NOT NULL,
    `BrandId` VARCHAR(191) NOT NULL,
    `SubcategoryId` INTEGER NOT NULL,
    `ProductDescription` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `subcategoryId` INTEGER NOT NULL AUTO_INCREMENT,
    `subcategoryName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`subcategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_SubcategoryId_fkey` FOREIGN KEY (`SubcategoryId`) REFERENCES `Category`(`subcategoryId`) ON DELETE RESTRICT ON UPDATE CASCADE;
