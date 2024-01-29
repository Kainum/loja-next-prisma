import { ReactElement } from "react";

const CartItemButton = function ({children, id, quantity, method} : {children: ReactElement, id:number, quantity: number, method: string}) {

    return (
        <form action="/api/cart" method="post">
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="qtd" value={quantity} />
            <input type="hidden" name="_method" value={method} />
            <button type="submit" className="size-full font-normal underline">
                {children}
            </button>
        </form>
    )
}

export default CartItemButton;