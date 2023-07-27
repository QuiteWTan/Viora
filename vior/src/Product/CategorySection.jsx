import { useState } from "react"

const CategorySection = () => {
    const CategoryList = [
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
            Name:'Review',
      
        },
    ]

    const [active, setActive] = useState(['','','',''])
    const SetType = (index) => {
        const activeList = [...active];
        if(activeList[index] === 'bg-gray-400'){
            activeList[index] = '';
        }else{
            for (let i = 0; i < active.length; i++) {
                activeList[i] = '';
            }
            activeList[index] = 'bg-gray-400';
        }
        setActive(activeList);
    }

    return(
        <div className="flex flex-row gap-4 font-poppins py-4 text-slate-500 text-sm items-center">
            <div>
                <h1 className=" text-gray-400">Filter Category</h1>
            </div>
            <div className="flex flex-row gap-x-8">
                {
                    CategoryList .map((Category,index) => (
                        <div key={index}>
                            <div className="flex flex-row items-center gap-x-2">
                                <div className= {`p-2 w-2 h-2 border-2 border-gray-400 rounded-md ${active[index]}`} onClick={() => SetType(index)}></div>
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