import { OrderItem } from '../models/OrderItem';

export class OrderItemFactory {
    
    static create (product_id: number = 1, price: number): OrderItem {

        const _number = require('lodash/number');

        const quantity = _number.random(1, 3);

        const obj : OrderItem = {
            item_price: price,
            quantity,
            total_price: price * quantity,
            product: {
                connect: {
                    id: product_id,
                }
            }
        };

        return obj;
    }
}