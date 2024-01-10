import { money } from "@/utils/Util";
import Link from "next/link";

const ProductProfile = ({name, price} : {
    name: string,
    price: number,
}) => {

    return (
        <div>
            <h1 className="text-4xl text-zinc-800 font-semibold mb-8">{name}</h1>
            <div className=" flex justify-between">
                <div className="size-96">
                    <img className="object-cover size-full" src="https://i.pinimg.com/736x/28/be/5e/28be5e9288570ccf68dee3c213534d19.jpg" alt="product image" />
                </div>
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
                    
                    <button className="relative w-96 text-white font-semibold text-xl py-4
                        bg-green-primary hover:bg-green-secondary
                        rounded">
                        <i className="fa-solid fa-basket-shopping absolute left-4 top-5"></i>
                        <span className="uppercase">Comprar agora</span>
                    </button>
                    <button className="relative w-96 text-white font-semibold text-lg py-4
                        bg-green-primary hover:bg-green-secondary
                        rounded">
                        <i className="fa-solid fa-basket-shopping absolute left-4 top-5 text-xl"></i>
                        <span className="uppercase">Adicionar à sacola</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductProfile;