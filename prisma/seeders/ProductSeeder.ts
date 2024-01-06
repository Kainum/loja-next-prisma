import { prisma } from '../client';
import { ProductFactory } from '../factories/ProductFactory';

export class ProductSeeder {
    
    static async seed (qtd: number): Promise<void> {

        const qtd_category = await prisma.category.count();

        for(let i = 0; i < qtd; i++) {

            const category_id = Math.floor(Math.random() * qtd_category) + 1;

            const obj = ProductFactory.makeOne(category_id);

            await prisma.product.create({data: obj})
        }
    }
}