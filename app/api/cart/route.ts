import prisma from "@/prisma/client";
import { OrderStatus } from "@prisma/client";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { GetCartFromCurrentUser } from "./CartManager";
import { GetCurrentUserID } from "../auth/UserManager";


export async function POST (request : NextRequest) {

    const user_id = await GetCurrentUserID();

    if (user_id == null) {
        redirect('/api/auth/signin');
    }

    const formData = await request.formData();

    const id = formData.get('id');
    const qtd = formData.get('qtd');
    const _method = formData.get('_method');

    if (id == null || qtd == null || _method == null ||
        !['post', 'put', 'delete'].includes(_method.toString())) {

        redirect('/cart');
    }

    switch (_method.toString().toLowerCase()) {
        case 'post':
            await AddItem(+id, user_id);
            break;
        case 'put':
            await UpdateItem(+qtd, +id);
            break;
        case 'delete':
            await DeleteItem(+id);
            break;
    }

    redirect('/cart');
}

// ==================================================

async function AddItem (product_id : number, user_id : number, qtd : number = 1) {
    let cart = await GetCartFromCurrentUser();
    if (cart == null) {

        cart = await prisma.order.create({
            data: {
                total: 0,
                status: OrderStatus.CART,
                user: {
                    connect: {
                        id: user_id,
                    },
                },
            }
        })
    }

    // Checking if product is already in cart
    const item = await prisma.orderItem.findFirst({
        where: {
            product_id,
            order_id: cart.id
        },
    })

    if (item != null) {
        await UpdateItem(item.quantity + 1, item.id)
        return;
    }

    // if not, continues

    const product = await prisma.product.findFirst({
        where: {
            id: product_id,
        }
    })

    const item_price = product ? product.price : 0;

    await prisma.orderItem.create({
        data: {
            item_price,
            total_price: qtd * item_price,
            quantity: qtd,
            product_id,
            order_id: cart.id,
        }
    })
}

async function UpdateItem (qtd: number, id: number) {
    await prisma.orderItem.update({
        data: {
            quantity: qtd
        },
        where: {
            id: id,
        }
    })
}

async function DeleteItem (id: number) {
    await prisma.orderItem.delete({
        where: {
            id: +id,
        }
    })
}