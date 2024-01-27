import { money } from "@/utils/Util"
import { OrderItem, Product } from "@prisma/client";
import Link from "next/link"

const CartItem = function ({item} : {item: OrderItem & {product: Product}}) {

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
                    <form action="/api/cart" method="post">
                        <input type="hidden" name="id" value={item.id} />
                        <input type="hidden" name="qtd" value={item.quantity - 1} />
                        <input type="hidden" name="_method" value={item.quantity - 1 <= 0 ? 'delete' : 'put'} />
                        <button type="submit" className="size-full">
                            <i className="fa-solid fa-minus"></i>
                        </button>
                    </form>

                    <input type="number" value={item.quantity} disabled
                        className="col-span-2 font-semibold text-center m-0 bg-orange-100"/>
                    
                    <form action="/api/cart" method="post">
                        <input type="hidden" name="id" value={item.id} />
                        <input type="hidden" name="qtd" value={item.quantity + 1} />
                        <input type="hidden" name="_method" value={'put'} />
                        <button type="submit" className="size-full">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </form>
                </div>

                <p className="min-w-24 font-semibold">
                    <span className="block">Total:</span>
                    R$ {money(item.item_price * item.quantity)}
                </p>
                <form action="/api/cart" method="post">
                    <input type="hidden" name="id" value={item.id} />
                    <input type="hidden" name="qtd" value={0} />
                    <input type="hidden" name="_method" value={'delete'} />
                    <button type="submit" className="underline font-normal">Excluir</button>
                </form>
            </div>
        </li>
    )
}

export default CartItem;