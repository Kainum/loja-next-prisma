import { faker } from '@faker-js/faker';
import { User } from '../models/User';

export class UserFactory {
    
    static create (): User {
        const obj = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };

        return obj;
    }
}