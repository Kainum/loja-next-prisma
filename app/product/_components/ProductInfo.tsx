import { lorem } from "@/utils/Util";

const ProductInfo = ({info: description} : {
    info: string,
}) => {

    return (
        <>
            <p className="font-semibold">{description}</p>
            <p className="font-normal">{lorem()}</p>
        </>
    );
}

export default ProductInfo;