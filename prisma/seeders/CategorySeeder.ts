import { CategoryFactory } from '../factories/CategoryFactory';
import { prisma } from '../client';

export class CategorySeeder {
    
    static async seed (qtd: number): Promise<void> {

        const list: {name: string, url: string}[] = [];

        for(let i = 0; i < qtd; i++) {

            const obj = CategoryFactory.makeOne();

            list.push(obj);
        }
        
        await prisma.category.createMany({
            data: list,
            skipDuplicates: true,
        })
    }
}