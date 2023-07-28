import CategorySection from "./CategorySection"
import FurnitureType from "./FurnitureType"
import ProductList from "./ProductList"

const ProductSection = () => {
    return(
        <div className="flex flex-row max-w-[1200px] justify-center py-2 gap-x-6">
            <div>
                <FurnitureType />
                <CategorySection/>
                <ProductList/>
            </div>
        </div>
    )   
}

export default ProductSection