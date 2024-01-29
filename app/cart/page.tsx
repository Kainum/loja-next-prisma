import CartItem from "./_components/CartItem";
import Link from "next/link";
import { GetCartFromCurrentUser } from "../api/cart/CartManager";
import prisma from "@/prisma/client";
import { money } from "@/utils/Util";

const Cart = async function () {

    const cart = await GetCartFromCurrentUser();

    const items = await prisma.orderItem.findMany({
        where: {
            order_id: cart?.id
        },
        include: {
            product: true,
        }
    })


    if (cart == null || items.length == 0) {
        return <div className="flex flex-col h-full items-center justify-center gap-2 text-lg">
            <p>{"Não há nada no carrinho D:"}</p>
            <Link className="underline font-normal"
                href={'/'}>Continuar comprando</Link>
        </div>
    }

    let total = 0;
    items.forEach(item => {
        total += item.quantity * item.item_price;
    });

    return (
        <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-semibold text-zinc-800 px-6">Carrinho</h2>
            <ul className="space-y-4">
                {items.map(item => (
                    <CartItem key={item.id} item={item}></CartItem>
                ))}
            </ul>

            <p className="ml-auto text-xl">
                Total do Pedido: <span className="font-semibold">R$ {money(total)}</span>
            </p>
            <button className="py-3 px-6 bg-blue-primary rounded-md text-xl font-semibold ml-auto">Finalizar compra</button>
        </div>
    )
}

export default Cart;