import { money } from "@/utils/Util";

const ProductCard = ({name, price}: {
    name: string,
    price: number,
}) => {
    

    return (
        <div className="text-zinc-700 text-sm hover:shadow-xl p-2">
            <div className="size-64 bg-green-500"></div>
            <p className="text-lg leading-tight my-2">{name}</p>
            <p className="leading-none">
                <span className="line-through block">R$ {money(price)}</span>
                <span className="text-2xl font-semibold">R$ {money(price * .9)}</span>
                <span> no Pix</span>
            </p>
        </div>
    )
}

export default ProductCard;