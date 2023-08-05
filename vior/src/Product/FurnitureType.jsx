import { useEffect, useState } from "react"
import ProductList from "./ProductList"

const FurnitureType = ({setType,Active}) => {

    const FurnitureTypeList = [
        {
            Name:'Bedroom',
     
        },
        {
            Name:'Bathroom',
       
        },
        {
            Name:'Livingroom',
      
        },
        {
            Name:'Kitchen',
      
        },
    ]
    
    return(
        <div className="text-slate-600">
            <h1 className="font-poppins font-bold py-2">Room Preference</h1>
            <div className="grid grid-cols-2 md:flex md:flex-row text-md font-poppins gap-4 md:gap-x-6">
                {
                    FurnitureTypeList.map((Fur,index) => (
                        <div key={index}>
                            <div className="flex flex-row items-center gap-x-2 w-full">
                                <button className= {`py-2 text-xs sm:text-sm md:text-md px-3 md:px-6  rounded-md w-full ${Active[index]}`} onClick={() => setType(index)}>{Fur.Name}</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FurnitureType