import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from './Category/Rating';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';

const ProductCard = ({Product}) => {
    const [product,setProduct] = useState(Product)
    return(
        <div className="flex flex-col shadow-xl rounded-md border">
            <img src={Product.Image} alt="" className='w-full h-[80%] p-2 border' style={{objectFit:"contain"}}/>
            <div className='px-3 py-1'>
                <div className='flex justify-between'>
                    <h1 className='font-ysa text-gray-400'>{Product.Type}</h1>
                    <Rating Ratings={Product.ratings} Valid = {true} Color={'#F4D160'} />
                </div>
                <div className='flex flex-row justify-between text-slate-600 font-poppins font-bold text-xs md:text-sm'>
                    <h1>{Product.Name}</h1>
                    <h1>$ {Product.price}</h1>
                </div>
                
                <div className='pt-6 font-poppins text-[12px] flex flex-row justify-between'>
                    <div>
                        <h1 className='text-gray-400'>Fast Delivery :</h1>
                        <h1 className={` font-bold ${Product.fastDelivery? 'text-green-600' : 'text-red-600'}`}>{Product.fastDelivery? 'Available' : 'Unavailable'}</h1>
                    </div>
                    <div className='font-bold '>
                        <h1 className='text-gray-400'>Stock : <span className='text-black font-Robot'>{Product.Stock}</span></h1>
                    </div>
                </div>
                <div className='py-4'>
                    <Link to="/product" state={product}>
                        <button className='bg-slate-400 text-white w-full py-2 font-poppins rounded-md text-sm hover:bg-slate-600 transition-all duration-300'> View More</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default ProductCard