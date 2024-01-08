import { PrismaClient } from "@prisma/client";
import ProductProfile from "../_components/ProductProfile";
import ProductInfo from "../_components/ProductInfo";
import ProductCard from "../_components/ProductCard";

const ProductPage = async function ({params} : {params: {url: string}}) {

    const prisma = new PrismaClient();

    const product = await prisma.product.findUnique({
        where: {
            url: params.url
            // id: 1
        }
    });

    prisma.$disconnect();

    if (!product) {
        return (
            <>
            </>
        );
    }

    return (
        <div className="flex flex-col gap-4 font-semibold text-zinc-800">

            <ProductProfile name={product.name} price={product.price}></ProductProfile>

            <h3 className="text-3xl mt-10">👍 Outros Produtos</h3>

            <ul className="flex gap-x-4 overflow-x-scroll snap-x snap-mandatory">
                <li className="snap-center">
                    <ProductCard name={product.name} price={product.price}></ProductCard>
                </li>
                <li className="snap-center">
                    <ProductCard name={product.name} price={product.price}></ProductCard>
                </li>
                <li className="snap-center">
                    <ProductCard name={product.name} price={product.price}></ProductCard>
                </li>
                <li className="snap-center">
                    <ProductCard name={product.name} price={product.price}></ProductCard>
                </li>
                <li className="snap-center">
                    <ProductCard name={product.name} price={product.price}></ProductCard>
                </li>
            </ul>

            <h2 className="text-3xl mt-10">🔎 Informações do Produto</h2>
            <ProductInfo info={product.description}></ProductInfo>

        </div>
    );
}

export default ProductPage;