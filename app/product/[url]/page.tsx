import ProductProfile from "../_components/ProductProfile";
import ProductInfo from "../_components/ProductInfo";
import ProductCard from "../../_components/ProductCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import prisma from "@/prisma/client";

const ProductPage = async function ({params} : {params: {url: string}}) {

    const product = await prisma.product.findUnique({
        where: {
            url: params.url
            // id: 1
        }
    });

    if (!product) {
        return notFound();
    }

    const other_products = await prisma.product.findMany({
        where: {
            category_id: product.category_id,
            NOT: {
                id: product.id,
            }
        },
        take: 7,
    });

    return (
        <div className="flex flex-col gap-4 font-semibold text-zinc-800">

            <ProductProfile name={product.name} price={product.price} id={product.id}></ProductProfile>

            <h3 className="text-3xl mt-10">👍 Outros Produtos</h3>

            <ul className="flex gap-x-4 overflow-x-scroll snap-x snap-mandatory">
                {other_products.map((item, index) => (
                    <li key={index} className="snap-center">
                        <Link href={`/product/${item.url}`}>
                            <ProductCard name={item.name} price={item.price}></ProductCard>
                        </Link>
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl mt-10">🔎 Informações do Produto</h2>
            <ProductInfo info={product.description}></ProductInfo>

        </div>
    );
}

export default ProductPage;