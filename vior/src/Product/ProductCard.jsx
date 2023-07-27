import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductCard = ({Name}) => {
    const [products, setProducts] = useState([]);



    return(
        <div className="flex flex-row">
            <img src="" alt="" />
            <h1>{Name}</h1>
            {console.log(products)}
        </div>
    )

}

export default ProductCard