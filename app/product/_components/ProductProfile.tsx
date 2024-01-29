import { money } from "@/utils/Util";
import Link from "next/link";
import ProductPictures from "./ProductPictures";
import ProductAddButton from "./ProductAddButton";

const ProductProfile = ({name, price, id} : {
    name: string,
    price: number,
    id: number,
}) => {

    return (
        <div>
            <h1 className="text-4xl text-zinc-800 font-semibold mb-8">{name}</h1>
            <div className=" flex justify-between">
                <ProductPictures></ProductPictures>
                <div className="flex flex-col gap-6">
                    <p className="text-yellow-secondary">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <Link href="#" className="ml-4 text-zinc-900 font-normal underline">Avaliar produto</Link>
                    </p>
                    <p className="text-zinc-700">
                        <span className="block">Vendido e entregue por loja.</span>
                        <span>A loja garante a sua compra, do pedido à entrega.</span>
                    </p>
                    <div className="flex flex-col space-y-2 text-sm">
                        <p className="leading-none">
                            <span className="line-through block">R$ {money(price)}</span>
                            <span className="text-2xl font-semibold">R$ {money(price * .9)}</span>
                            <span> no Pix</span>
                        </p>
                        <p className="text-green-secondary">(10% de desconto)</p>
                        <p className="">ou R$ {money(price)} em 10x de R$ {money(price / 10)} sem juros</p>
                    </div>

                    <ProductAddButton id={id} quantity={1}><>Comprar agora</></ProductAddButton>
                    <ProductAddButton id={id} quantity={1}><>Adicionar à sacola</></ProductAddButton>
                </div>
            </div>
        </div>
    );
}

export default ProductProfile;