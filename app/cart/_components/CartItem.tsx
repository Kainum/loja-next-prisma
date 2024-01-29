import { money } from "@/utils/Util"
import { OrderItem, Product } from "@prisma/client";
import Link from "next/link"
import CartItemButton from "./CartItemButton";

const CartItem = function ({item} : {item: OrderItem & {product: Product}}) {

    return (
        <li className="border-zinc-200 border-y px-6 py-3 flex gap-4
                        shadow-sm text-zinc-700">
            <div className="flex flex-1 min-w-0 items-center gap-2">
                <div className="min-w-20 size-20">
                    <img className="object-cover h-full rounded-sm"
                    alt={item.product.name}
                    src="https://i.ytimg.com/vi/Mw3jK9YwOxk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgSCg1MA8=&rs=AOn4CLADLNZ64XZMOhvfep-dTNe4ITNcBQ"/>
                </div>
                <Link className="font-semibold text-xl overflow-hidden overflow-ellipsis text-nowrap"
                    href={`product/${item.product.url}`}>{item.product.name}</Link >
            </div>
            <div className="flex items-center gap-4">
                <span className="text-right min-w-20">R$ {money(item.item_price)}</span>

                <div className="grid grid-cols-4 h-10 w-48 bg-indigo-200 rounded-md">

                    <CartItemButton id={item.id} quantity={item.quantity-1}
                                    method={item.quantity - 1 <= 0 ? 'delete' : 'put'}>
                        <i className="fa-solid fa-minus"></i>
                    </CartItemButton>

                    <input type="number" value={item.quantity} disabled
                        className="col-span-2 font-semibold text-center m-0 bg-indigo-100"/>
                    
                    <CartItemButton id={item.id} quantity={item.quantity+1} method={'put'}>
                        <i className="fa-solid fa-plus"></i>
                    </CartItemButton>
                </div>

                <p className="min-w-24 font-semibold">
                    <span className="block">Total:</span>
                    R$ {money(item.item_price * item.quantity)}
                </p>
                <CartItemButton id={item.id} quantity={0} method={'delete'}>
                    <>Excluir</>
                </CartItemButton>
            </div>
        </li>
    )
}

export default CartItem;