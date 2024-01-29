const ProductPictures = function () {

    let rows = []
    for (let i = 0; i < 4; i++) {
        rows.push(
            <div className="h-1/5 bg-yellow-200 rounded-sm"></div>
        );
    }

    return (
        <div className="flex gap-2">
            <div className="h-full w-44 px-2 space-y-2">
                {rows}
            </div>
            <div className="size-96">
                <img className="object-cover size-full" src="https://i.pinimg.com/736x/28/be/5e/28be5e9288570ccf68dee3c213534d19.jpg" alt="product image" />
            </div>
        </div>
    )
}

export default ProductPictures;