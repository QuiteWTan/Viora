import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ProductCard = ({Product}) => {
    const [products, setProducts] = useState([]);
    return(
        <div className="flex flex-col shadow-xl rounded-md border ">
            <img src={Product.Image} alt="" className='w-full h-[80%] p-2 border' style={{objectFit:"contain"}}/>
            <div className='px-3 py-1'>
                <h1 className='font-ysa text-gray-400'>{Product.Type}</h1>
                <div className='flex flex-row justify-between text-slate-600 font-poppins font-bold text-sm'>
                    <h1>{Product.Name}</h1>
                    <h1>$ {Product.price}</h1>
                </div>
                <h1 className={`font-poppins pt-8 pb-4 text-[10px] font-bold ${Product.fastDelivery? 'text-green-600' : 'text-red-600'}`}>{Product.fastDelivery? 'Fast Delivery Available' : 'Fast Delivery Unavailable'}</h1>
            </div>
        </div>
    )

}

export default ProductCard