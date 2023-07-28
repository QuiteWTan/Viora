import { CartState } from "../Context/Context"
import ProductSection from "./ProductSection";
import ShopNavbar from "./ShopNavbar"
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

const ProductPage = ( ) => {
    
    return(
        <div className="">
           <ShopNavbar/> 
            <div className="w-full flex justify-center items-center px-4">
                <ProductSection/>
            </div>
        </div>
        
    )
}

export default ProductPage