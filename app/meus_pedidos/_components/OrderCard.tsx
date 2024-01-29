import { money } from "@/utils/Util";
import OrderProductRow from "./OrderProductRow";
import { Order, OrderItem, OrderStatus, Product } from "@prisma/client";

const OrderCard = function ({order} : {
    order: Order & {
        items : (OrderItem & {
            product: Product
        })[]
    }
}) {

    const dictionaryStatusColor = {
        [OrderStatus.CART]: ['bg-orange-300', 'bg-orange-500'], 
        [OrderStatus.PAYMENT]: ['bg-sky-300', 'bg-sky-500'],
        [OrderStatus.SHIPPING]: ['bg-violet-300', 'bg-violet-500'],
        [OrderStatus.COMPLETE]: ['bg-emerald-300', 'bg-emerald-500'],
        [OrderStatus.CANCELED]: ['bg-rose-400', 'bg-rose-500'],
    }

    return (
        <div key={order.id} className={`font-normal text-zinc-900 rounded-lg ${dictionaryStatusColor[order.status][0]}`}>
            <div className="flex flex-wrap p-2">
                <p>Pedido nº:
                    <span className="font-semibold"> {(order.id).toString().padStart(7, '0')} </span>
                    - {order.status}
                </p>
                <p className="ml-auto">{order.date?.toLocaleDateString("pt-BR")}</p>
                <p className="w-full text-right">Total do Pedido:
                    <span className="font-semibold"> R$ {money(order.total)}</span>
                </p>
            </div>
            <table className={`table-fixed w-full ${dictionaryStatusColor[order.status][1]}`}>
                <thead>
                    <tr>
                        <th className="w-20 pl-2"></th>
                        <th className="text-left">Produto</th>
                        <th className="text-right">qtd</th>
                        <th className="text-right">Preço</th>
                        <th className="text-right pr-2">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {order.items.map(item => (
                        <OrderProductRow item={item} key={item.id}></OrderProductRow>
                    ))}
                </tbody>
            </table>
            <div className={`h-6 rounded-b-lg ${dictionaryStatusColor[order.status][1]}`}></div>
        </div>
    )
}

export default OrderCard;