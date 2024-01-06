import { faker } from '@faker-js/faker';

export class CategoryFactory {
    
    static makeOne (): {
        name: string, url: string
    }
    {
        const name = faker.commerce.department();
        const url = name.toLowerCase().replaceAll(' ', '-');

        const obj = {
            name,
            url,
        };

        return obj;
    }
}