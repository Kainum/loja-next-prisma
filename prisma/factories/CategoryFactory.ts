import { faker } from '@faker-js/faker';
import { Category } from '../models/Category';

export class CategoryFactory {
    
    static create (): Category {
        const name = faker.commerce.department();
        const url = name.toLowerCase().replaceAll(' ', '-');

        const obj = {
            name,
            url,
        };

        return obj;
    }
}