import { CategorySeeder } from './seeders/CategorySeeder';
import { ProductSeeder } from './seeders/ProductSeeder';
import { UserSeeder } from './seeders/UserSeeder';


async function main () {
    await UserSeeder.seed(10);
    await CategorySeeder.seed(5);
    await ProductSeeder.seed(15);
}

main();