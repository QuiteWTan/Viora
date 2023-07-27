
import { useState } from "react"
const FurnitureType = ( ) => {

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

    const [active, setActive] = useState(['bg-slate-500 text-white','bg-gray-200','bg-gray-200','bg-gray-200'])
    const SetType = (index) => {
        const activeList = [...active];
        for (let i = 0; i < active.length; i++) {
            activeList[i] = 'bg-gray-200';
        }
        activeList[index] = 'bg-slate-600 text-white'
        setActive(activeList);
    }

    return(
        <div className="text-slate-600">
            <h1 className="font-poppins font-bold py-2">Room Preference</h1>
            <div className=" flex flex-row text-md font-poppins gap-x-6">
                {
                    FurnitureTypeList.map((Fur,index) => (
                        <div key={index}>
                            <div className="flex flex-row items-center gap-x-2">
                                <div className= {`py-2 px-6  rounded-md ${active[index]}`} onClick={() => SetType(index)}>{Fur.Name}</div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FurnitureType