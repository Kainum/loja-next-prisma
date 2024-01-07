import { Seeder } from './Seeder';
import { prisma } from '../client';
import { ProductFactory } from '../factories/ProductFactory';

export class ProductSeeder extends Seeder {
    
    static async seed (qtd: number): Promise<void> {
        super.seed(qtd);

        const _number = require('lodash/number');
        
        const qtd_category = await prisma.category.count();

        for(let i = 0; i < qtd; i++) {

            const category_id = _number.random(1, qtd_category);

            const obj = ProductFactory.create(category_id);

            await prisma.product.create({data: obj})
        }
    }
}