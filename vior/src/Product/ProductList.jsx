import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ActiveBool,furniture}) => {


    const [data,setData] = useState(furniture)

    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 md:gap-x-4 gap-y-4 py-4">
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