import { faker } from '@faker-js/faker';
import { Product } from '../models/Product';

export class ProductFactory {
    
    static create (category_id: number = 1): Product {

        const _number = require('lodash/number');

        const name = faker.commerce.productName();
        const url = name.toLowerCase().replaceAll(' ', '-');
        const image = '';

        const obj = {
            name,
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price()),
            stock: _number.random(200),
            url,
            image,
            category: {
                connect: {
                    id: category_id,
                }
            }
        }

        return obj;
    }
}