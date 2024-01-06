import { faker } from '@faker-js/faker';

export class ProductFactory {
    
    static makeOne (category_id: number = 1): {
        name: string, description: string, price: number, stock: number, url: string, category: {},
    }
    {
        const name = faker.commerce.productName();
        const url = name.toLowerCase().replaceAll(' ', '-');

        const obj = {
            name,
            description: faker.commerce.productDescription(),
            price: parseFloat(faker.commerce.price()),
            stock: 100,
            url,
            category: {
                connect: {
                    id: category_id,
                }
            }
        }

        return obj;
    }
}