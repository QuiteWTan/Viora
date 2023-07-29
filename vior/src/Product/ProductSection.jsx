import CategorySection from "./CategorySection"
import FurnitureType from "./FurnitureType"
import ProductList from "./ProductList"
import { useState } from "react"

const ProductSection = () => {
    const [activeBool, setActiveBool] = useState([true,false,false,false])
    const [active, setActive] = useState(['bg-slate-500 text-white','bg-gray-200','bg-gray-200','bg-gray-200'])

    const SetType = (index) => {
        const activeList = [...active];
        const activeBoolList = [...activeBool];
        for (let i = 0; i < active.length; i++) {
            activeList[i] = 'bg-gray-200';
            activeBoolList[i]= false
        }
        activeList[index] = 'bg-slate-600 text-white'
        activeBoolList[index] = true
        setActive(activeList);
        setActiveBool(activeBoolList)
    }
    
    return(
        <div className="flex flex-row max-w-[1300px] justify-center py-2 gap-x-6">
            <div>
                <FurnitureType setType= {(i)=> SetType(i)} ActiveBool={activeBool} Active={active}/>
                <CategorySection />
                <ProductList ActiveBool={activeBool}/>
            </div>
        </div>
    )   
}

export default ProductSection