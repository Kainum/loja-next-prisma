/*
  Warnings:

  - You are about to drop the column `total_price` on the `order_items` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `order_items` DROP COLUMN `total_price`;

-- AlterTable
ALTER TABLE `orders` MODIFY `status` ENUM('CART', 'PAYMENT', 'SHIPPING', 'COMPLETE', 'CANCELED') NOT NULL;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `image` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `categories_name_key` ON `categories`(`name`);
