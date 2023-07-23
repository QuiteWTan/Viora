const ShopNavbar = () => {
    return(
        <div className="w-full py-4 px-4 bg-slate-200 flex justify-between">
            <div className="flex flex-row items-center">
                <box-icon name='left-arrow' type='solid' size='xs'></box-icon>
                <h1 className="text-lg ">Back</h1>
            </div>
        </div>
    )
}

export default ShopNavbar;