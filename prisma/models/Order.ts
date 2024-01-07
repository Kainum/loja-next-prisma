import { OrderStatus } from "@prisma/client"

export type Order = {
    total: number,
    date: Date,
    status: OrderStatus,
    user: {},
}