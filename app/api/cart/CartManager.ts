import prisma from "@/prisma/client";
import { OrderStatus } from "@prisma/client";
import { redirect } from "next/navigation";
import { GetCurrentUserID } from "../auth/UserManager";

export async function GetCartFromCurrentUser () {
    
    const user_id = await GetCurrentUserID();

    if (user_id == null) {
        redirect('/api/auth/signin');
    }

    return await prisma.order.findFirst({
        where: {
            user_id: user_id,
            status: OrderStatus.CART,
        },
    });

}