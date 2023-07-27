import { CartState } from "../Context/Context";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const {state:{furniture}} = CartState();
    return(
        <div className="grid grid-cols-4 gap-x-6 gap-y-4 py-4">
            {furniture.map((Furniture,_) =>(
                <ProductCard Product={Furniture}/>
            ))}
        </div>
    )
}

export default ProductList