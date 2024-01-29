import { Seeder } from './Seeder';
import { Category } from '../models/Category';
import { CategoryFactory } from '../factories/CategoryFactory';
import prisma from '../client';

export class CategorySeeder extends Seeder {
    
    static async seed (qtd: number): Promise<void> {

        super.seed(qtd);

        const list: Category[] = [];

        for(let i = 0; i < qtd; i++){

            const obj = CategoryFactory.create();

            list.push(obj);
        }
        
        await prisma.category.createMany({
            data: list,
            skipDuplicates: true,
        })
    }
}