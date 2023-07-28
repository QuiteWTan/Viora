import { CartState } from "../Context/Context";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const {state:{furniture}} = CartState();
    return(
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 py-4">
            {furniture.map((Furniture,_) =>(
                <ProductCard Product={Furniture}/>
            ))}
        </div>
    )
}

export default ProductList