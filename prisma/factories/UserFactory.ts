import { faker } from '@faker-js/faker';

export class UserFactory {
    
    static makeOne (): {
        name: string, email: string, password: string
    }
    {
        const obj = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };

        return obj;
    }
}