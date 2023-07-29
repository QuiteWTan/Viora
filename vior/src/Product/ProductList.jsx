import { useEffect, useState } from "react";
import { BathroomState, BedroomState, CartState, KitchenState, LivingroomState } from "../Context/Context";
import ProductCard from "./ProductCard";

const ProductList = ({ActiveBool}) => {
    const {state:{Bathfurniture}} = BathroomState();
    const {state:{Bedfurniture}} = BedroomState();
    const {state:{Livingfurniture}} = LivingroomState();
    const {state:{Kitchenfurniture}} = KitchenState();

    const [data,setData] = useState([Bathfurniture,Bedfurniture,Livingfurniture,Kitchenfurniture])

    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-4 py-4">
            {ActiveBool.map((val,key)=> (
                val ? 
                data[key].map((Furniture,_) =>(
                    <ProductCard Product={Furniture}/>
                )) :''
            ))}
        </div>
    )
}

export default ProductList