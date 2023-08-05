import { BathroomState, BedroomState, KitchenState, LivingroomState } from "../Context/Context"
import CategorySection from "./CategorySection"
import FurnitureType from "./FurnitureType"
import ProductList from "./ProductList"
import { useState } from "react"

const ProductSection = () => {
    
    const {bathroomFurnitureData} = BathroomState();
    const {bedroomFurnitureData} = BedroomState();
    const {livingroomFurnitureData} = LivingroomState();
    const {kitchenFurnitureData} = KitchenState();

    const [activeBool, setActiveBool] = useState([true,false,false,false])
    const [active, setActive] = useState(['bg-slate-500 text-white','bg-gray-200','bg-gray-200','bg-gray-200'])
    const defaultFurnitureList = [bathroomFurnitureData, bedroomFurnitureData, livingroomFurnitureData, kitchenFurnitureData];
    const [furniture, setFurniture] = useState([...defaultFurnitureList]);

    const [activeCategory, setActiveCategory] = useState(['bg-gray-400','','','',''])

    const SetTypeCategory = (index) => {
        const activeList = [...activeCategory];

        for (let i = 0; i < activeList.length; i++) {
            activeList[i] = '';
        }
        activeList[index] = 'bg-gray-400';
        

        setActiveCategory(activeList);
        for(let i =0 ; i<activeBool.length ;i++){
            if(activeBool[i]){
                FilterData(index,i);
            }
        }
    }

    const FilterData = (index,i) => {
        if(index == 0){
            setFurniture([...defaultFurnitureList])
        }else if(index == 1){
            const updatedFurniture = [...furniture];
            const sortDescendFurniture = updatedFurniture[i].sort((a,b) => (a.price < b.price ? 1 : -1))
            updatedFurniture[i] = sortDescendFurniture
            setFurniture(updatedFurniture)
        }else if(index == 2){
            const updatedFurniture = [...furniture];
            const sortAscendFurniture = updatedFurniture[i].sort((a,b) => (a.price > b.price ? 1 : -1))
            updatedFurniture[i] = sortAscendFurniture
            setFurniture(updatedFurniture)
        }if(index == 3 ){
            const updatedFurniture = [...furniture];
            const fastDeliveryFurniture = updatedFurniture[i].sort((a) => (a.fastDelivery ? -1 : 1))
            updatedFurniture[i] = fastDeliveryFurniture
            setFurniture(updatedFurniture)
        }if(index == 4 ){
            const updatedFurniture = [...furniture];
            const HighestRatingFurniture = updatedFurniture[i].sort((a,b) => (a.ratings < b.ratings ? 1 : -1))
            updatedFurniture[i] = HighestRatingFurniture
            setFurniture(updatedFurniture)
        }
    }

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
        setActiveCategory(['','','','',''])
    }


    return(
        <div className="flex flex-row max-w-[1300px] justify-center py-2 gap-x-6">
            <div>
                <FurnitureType setType= {(i)=> SetType(i)} ActiveBool={activeBool} Active={active}/>
                <CategorySection activeCategory = {activeCategory} setTypeCategory = {SetTypeCategory}/>
                <ProductList ActiveBool={activeBool} furniture={furniture}/>
            </div>
        </div>
    )   
}

export default ProductSection