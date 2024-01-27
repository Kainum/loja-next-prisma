import CartItem from "./_components/CartItem";
import Link from "next/link";
import { GetCartFromCurrentUser } from "../api/cart/CartManager";
import { prisma } from "@/prisma/client";

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

    return (
        <>
            <h2>Carrinho</h2>
            <ul className="space-y-4">
                {items.map(item => (
                    <CartItem key={item.id} item={item}></CartItem>
                ))}
            </ul>
            <button>Finalizar compra</button>
        </>
    )
}

export default Cart;