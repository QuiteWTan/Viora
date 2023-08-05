import { useState } from "react"
import Rating from './Category/Rating';

const CategorySection = ({activeCategory, setTypeCategory}) => {
    const CategoryList = [
        {
            Name: 'Default'
        },
        {
            Name:'Highest',
     
        },
        {
            Name:'Lowest',
       
        },
        {
            Name:'Fast Delivery',
      
        },
        {
            Name:'Highest Ratings'
        },
    ]

    
    return(
        <div className="flex flex-row gap-4 font-poppins py-4 text-slate-500 text-sm">
            <div>
                <h1 className=" text-gray-400">Filter Category : </h1>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-row gap-x-8">
                {
                    CategoryList .map((Category,index) => (
                        <div key={index}>
                            <div className="flex flex-row items-center gap-x-2 text-sm">
                                <div className= {`p-1 w-2 h-2 border-2 border-gray-400 rounded-md ${activeCategory[index]}`} onClick={() => setTypeCategory(index)}></div>
                                <h1>{Category.Name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CategorySection