import ProductCard from "@/app/_components/ProductCard";
import prisma from "@/prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";

const CategoryPage = async function ({params} : {params: {url: string}}) {

    const category = await prisma.category.findUnique({
        where: {
            url: params.url
        }
    });

    if (!category) {
        return notFound();
    }

    const products = await prisma.product.findMany({
        where: {
            category_id: category.id,
        },
        take: 7,
    });

    return (
        <ul className="flex flex-wrap gap-y-4 justify-between">
            {products.map((item, index) => (
                <li key={index}>
                    <Link href={`/product/${item.url}`}>
                        <ProductCard name={item.name} price={item.price}></ProductCard>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default CategoryPage;