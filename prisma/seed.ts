import { CategorySeeder } from './seeders/CategorySeeder';
import { ProductSeeder } from './seeders/ProductSeeder';
import { UserSeeder } from './seeders/UserSeeder';
import { OrderSeeder } from './seeders/OrderSeeder';


async function main () {
    await UserSeeder.seed(10);
    await CategorySeeder.seed(8);
    await ProductSeeder.seed(45);
    await OrderSeeder.seed(10);
}

main();