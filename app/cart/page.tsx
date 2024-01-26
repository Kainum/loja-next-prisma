import { money } from "@/utils/Util";
import { OrderStatus, PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CartItem from "./_components/CartItem";
import Link from "next/link";

const Cart = async function () {

    const session = await getServerSession();
    const user = session?.user;

    if (user == null) {
        redirect('/api/auth/signin')
    }

    const prisma = new PrismaClient();

    const {id: user_id} = await prisma.user.findFirstOrThrow({
        where: {
            email: user.email?.toString()
        },
        select: {
            id: true
        }
    })

    const cart = await prisma.order.findFirst({
        where: {
            user_id: user_id,
            status: OrderStatus.CART,
        },
        include: {
            items: {
                include: {
                    product: {
                        select: {
                            name: true,
                            price: true,
                            stock: true,
                            url: true,

                        }
                    }
                }
            }
        }
    })


    if (cart == null || cart?.items.length == 0) {
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
                {cart.items.map(item => (
                    <CartItem key={item.id} item={item}></CartItem>
                ))}
            </ul>
            <button>Finalizar compra</button>
        </>
    )
}

export default Cart;