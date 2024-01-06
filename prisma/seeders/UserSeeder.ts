import { UserFactory } from '../factories/UserFactory';
import { prisma } from '../client';

export class UserSeeder {
    
    static async seed (qtd: number): Promise<void> {

        const list: {name: string, email: string, password: string}[] = [];

        for(let i = 0; i < qtd; i++) {

            const obj = UserFactory.makeOne();

            list.push(obj);
        }

        await prisma.user.createMany({
            data: list,
            skipDuplicates: true,
        });
    }
}