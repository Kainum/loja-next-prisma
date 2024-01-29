import { faker } from '@faker-js/faker';
import { Order } from '../models/Order';
import { OrderItem } from '../models/OrderItem';
import { OrderStatus } from '@prisma/client';

export class OrderFactory {
    
    static create (user_id: number = 1, items: OrderItem[]): Order {

        const _collection = require('lodash/collection');

        let total_order : number = 0;
        items.forEach((item) => {
            total_order += item.item_price * item.quantity;
        });

        const obj = {
            total: total_order,
            date: faker.date.recent(),
            status: _collection.sample(OrderStatus),
            user: {
                connect: {
                    id: user_id,
                },
            },
            items: {
                create: items,
            }
        }

        return obj;
    }
}