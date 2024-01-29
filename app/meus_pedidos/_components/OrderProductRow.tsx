import { money } from "@/utils/Util";
import { OrderItem, Product } from "@prisma/client";

const OrderProductRow = function ({item} : {item: OrderItem & {product: Product}}) {


    return (
        <tr key={item.id} className="border-y border-zinc-400 px-2">
            <td className="py-1 pl-2">
                <div className="size-16 bg-red-primary rounded-sm">
                    {/* <img src="" alt="" /> */}
                </div>
            </td>
            <td>{item.product.name}</td>
            <td className="text-right">{item.quantity}</td>
            <td className="text-right">R$ {money(item.item_price)}</td>
            <td className="text-right pr-2">R$ {money(item.quantity * item.item_price)}</td>
        </tr>
    )
}

export default OrderProductRow;