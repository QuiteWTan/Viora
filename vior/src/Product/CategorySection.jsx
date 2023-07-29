import { useState } from "react"
import Rating from './Category/Rating';

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
        {
            Name:'Highest Ratings'
        }
    ]
    const [isValid,setIsValid] = useState(true)
    const [tempRating, setTempRating] = useState(0)
    const ClearRating = (i) => {
        if(i === tempRating){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
        setTempRating(i)
        console.log(i)
        console.log(tempRating)
        setRating(i+1)
    }

    const [active, setActive] = useState(['','','','',''])
    const [check, setCheck] = useState([false,false,false,false,false])
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

    const [rating,setRating] = useState(0);
    
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
                                <div className= {`p-1 w-2 h-2 border-2 border-gray-400 rounded-md ${active[index]}`} onClick={() => SetType(index)}></div>
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