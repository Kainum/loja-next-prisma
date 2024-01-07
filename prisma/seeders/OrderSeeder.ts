import { Seeder } from './Seeder';
import { OrderItem } from '../models/OrderItem';
import { OrderFactory } from '../factories/OrderFactory';
import { OrderItemFactory } from '../factories/OrderItemFactory';
import { prisma } from '../client';

export class OrderSeeder extends Seeder {
    
    static async seed (qtd: number): Promise<void> {

        super.seed(qtd);

        const _number = require('lodash/number');

        const qtd_products = await prisma.product.count();
        const qtd_users = await prisma.user.count();
        
        for(let i = 0; i < qtd; i++) {

            const list_items: OrderItem[] = [];
            const user_id = _number.random(1, qtd_users);

            const qtd_items = _number.random(1, 4);

            for (let j = 0; j < qtd_items; j++) {
                const product_id = _number.random(1, qtd_products);

                const { price } = await prisma.product.findUniqueOrThrow({
                    where: {
                        id: product_id,
                    },
                    select: {
                        price: true,
                    }
                });
            
                const item = OrderItemFactory.create(product_id, price);

                list_items.push(item);
            }

            const obj = OrderFactory.create(user_id, list_items);

            await prisma.order.create({data: obj});
        }

    }
}