import { faker } from '@faker-js/faker/locale/en';
const uuid = require('uuid');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Product {
  ProductName: string;
  ProductPrice: number;
  ProductImagepath: string;
  BrandId: string;
  ProductDescription: string;
}

interface Category {
  subcategoryName: string;
}

const generateFakeProduct = (id: number, categoryIds: number[]): Product => {
  const productName = faker.commerce.productName();
  const productPrice = parseInt(faker.commerce.price({ min: 50, max: 1000 }));
  const productImagepath = faker.image.imageUrl();
  const brandId = uuid.v4();
  const productDescription = faker.lorem.paragraphs(1).substring(0, 100);

  return {
    ProductName: productName,
    ProductPrice: productPrice,
    ProductImagepath: productImagepath,
    BrandId: brandId,
    ProductDescription: productDescription,
  };
};

const generateFakeCategory = (): Category => {
  const subcategoryName = faker.commerce.department();
  return {
    subcategoryName: subcategoryName,
  };
};

const generateFakerData = (numProducts: number, numCategories: number): { products: Product[], categories: Category[] } => {
  const products: Product[] = [];
  const categories: Category[] = [];

  for (let i = 1; i <= numCategories; i++) {
    categories.push(generateFakeCategory());
  }

  const categoryIds = categories.map((category, index) => index + 1);

  for (let i = 1; i <= numProducts; i++) {
    products.push(generateFakeProduct(i, categoryIds));
  }

  return { products, categories };
};

const numProducts = 50;
const numCategories = 10;

const { products, categories } = generateFakerData(numProducts, numCategories);

console.log('Generated Products:', products);
console.log('Generated Categories:', categories);

async function main() {
    console.log(`Start seeding ...`);
    for (const product of products) {
        const createdProduct = await prisma.product.create({
            data: product,
        });
        console.log(`Created product with id: ${createdProduct.productId}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
