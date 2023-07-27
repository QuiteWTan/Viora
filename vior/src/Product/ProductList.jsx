import { CartState } from "../Context/Context";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const {state:{furniture}} = CartState();
    return(
        <div>
            {furniture.map((furni) =>(
                <ProductCard Name= {furni.name}/>
            ))}
        </div>
    )
}

export default ProductList