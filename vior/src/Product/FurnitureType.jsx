import { useEffect, useState } from "react"
import ProductList from "./ProductList"

const FurnitureType = ({setType, ActiveBool,Active}) => {

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
            <div className=" flex flex-row text-md font-poppins gap-x-4 md:gap-x-6">
                {
                    FurnitureTypeList.map((Fur,index) => (
                        <div key={index}>
                            <div className="flex flex-row items-center gap-x-2">
                                <div className= {`py-2 text-xs sm:text-sm md:text-md px-3 md:px-6  rounded-md ${Active[index]}`} onClick={() => setType(index)}>{Fur.Name}</div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FurnitureType