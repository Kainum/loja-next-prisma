import { ReactElement } from "react"

const ProductAddButton = function ({children, id, quantity} : {
    children: ReactElement,
    id: number,
    quantity: number,
}) {

    return (
        <form action="/api/cart" method="post">
            <input type="hidden" name="id" value={id} />
            <input type="hidden" name="qtd" value={quantity} />
            <input type="hidden" name="_method" value={'post'} />
            <button type="submit"
                className="relative w-96 text-white font-semibold text-xl py-4
                bg-green-primary hover:bg-green-secondary
                rounded">
                <i className="fa-solid fa-basket-shopping absolute left-4 top-5"></i>
                <span className="uppercase">{children}</span>
            </button>
        </form>
    )
}

export default ProductAddButton;