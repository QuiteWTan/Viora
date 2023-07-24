import { CartState } from "../Context/Context"
import ShopNavbar from "./ShopNavbar"

const ProductListPage = ( ) => {
    const {state} = CartState();
    
    return(
        <div>
            <ShopNavbar/>
        </div>
    )
}

export default ProductListPage