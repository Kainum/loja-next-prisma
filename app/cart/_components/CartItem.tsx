import { OrderItem } from "@/prisma/models/OrderItem";
import { money } from "@/utils/Util"
import Link from "next/link"

const CartItem = function ({item} : {item: OrderItem & {product: any}}) {

    return (
        <li className="border-zinc-200 border-y px-6 py-3 flex gap-4
                        shadow-sm text-zinc-700">
            <div className="flex flex-1 min-w-0 items-center gap-2">
                <div className="min-w-20 size-20 bg-red-primary">
                    <img className="object-cover h-full"
                    alt={item.product.name}
                    src="https://i.ytimg.com/vi/Mw3jK9YwOxk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgSCg1MA8=&rs=AOn4CLADLNZ64XZMOhvfep-dTNe4ITNcBQ"/>
                </div>
                <Link className="font-semibold text-xl overflow-hidden overflow-ellipsis text-nowrap"
                    href={`product/${item.product.url}`}>{item.product.name}</Link >
            </div>
            <div className="flex items-center gap-4">
                <span className="text-right min-w-20">R$ {money(item.item_price)}</span>
                <div className="grid grid-cols-4 h-10 w-48 bg-orange-200 rounded-md">

                    <button><i className="fa-solid fa-minus"></i></button>

                    <input type="number" value={item.quantity} disabled
                        className="col-span-2 font-semibold text-center m-0 bg-orange-100"/>

                    <button><i className="fa-solid fa-plus"></i></button>
                </div>
                <p className="min-w-20 font-semibold">
                    <span className="block">Total:</span>
                    R$ {money(item.total_price)}
                </p>
                <button className="underline font-normal">Excluir</button>
            </div>
        </li>
    )
}

export default CartItem;