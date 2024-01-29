import prisma from "@/prisma/client";
import { GetCurrentUserID } from "../api/auth/UserManager";
import { redirect } from "next/navigation";
import { OrderStatus } from "@prisma/client";
import OrderCard from "./_components/OrderCard";

const MyOrdersPage = async function () {

    const user_id = await GetCurrentUserID();

    if (user_id == null) {
        redirect('/api/auth/signin');
    }

    const myOrders = await prisma.order.findMany({
        where: {
            user_id,
            NOT: {
                status: OrderStatus.CART
            }
        },
        orderBy: {
            date: "desc"
        },
        include: {
            items: {
                include: {
                    product: true
                }
            }
        },
    })

    return (
        <div className="flex flex-col gap-4">
            {myOrders.map(order => (
                <OrderCard key={order.id} order={order}></OrderCard>
            ))}
        </div>
    )
}

export default MyOrdersPage;