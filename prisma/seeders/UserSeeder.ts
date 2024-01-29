import { Seeder } from './Seeder';
import { User } from '../models/User';
import { UserFactory } from '../factories/UserFactory';
import prisma from '../client';

export class UserSeeder extends Seeder {
    
    static async seed (qtd: number): Promise<void> {

        super.seed(qtd);

        const list: User[] = [];

        for(let i = 0; i < qtd; i++) {

            const obj = UserFactory.create();

            list.push(obj);
        }

        await prisma.user.createMany({
            data: list,
            skipDuplicates: true,
        });
    }
}