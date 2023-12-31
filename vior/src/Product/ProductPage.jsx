import Footer from "../Footer";
import ProductSection from "./ProductSection";
import ShopNavbar from "./ShopNavbar"
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

const ProductPage = ( ) => {
    
    return(
        <div className="">
           <ShopNavbar showSearch={true}/>
            <div className="w-full flex justify-center items-center px-1 md:px-4">
                <ProductSection/>
            </div>
            <Footer/>
        </div>
        
    )
}

export default ProductPage