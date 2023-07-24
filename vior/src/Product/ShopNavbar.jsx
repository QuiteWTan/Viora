const ShopNavbar = () => {
    return(
        <>
            <header className="w-full flex flex-col shadow-md">
                <div className="w-full py-4 px-2 md:px-4 flex justify-between">
                    <div className="flex flex-row items-center justify-between w-full px-6">
                        <h1 className="text-4xl font-ysa font-bold hidden md:block px-12">Vior</h1>
                        <div className="flex flex-row items-center bg-white rounded-full w-4/6 md:w-3/6 px-3 py-4 md:py-2 border-gray-400 border">
                            <div className="border-gray-400 border-r flex items-center justify-center px-1">
                                <box-icon name='search-alt-2' className color='gray'></box-icon>
                            </div>
                            <input type="text" className="bg-transparent w-[80%] px-2 outline-none" placeholder="Search Furniture Here"/>
                        </div>
                        <div className="flex items-center gap-x-4">
                            <div className="rounded-full px-3 py-2 bg-slate-200">
                                <box-icon name='shopping-bag' ></box-icon>
                            </div>
                            <div className="rounded-full px-3 py-2 bg-slate-200">
                                <box-icon name='user' ></box-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center text-gray-500 ">
                    <ul className="hover:bg-gray-200 duration-300 transition-all py-4 text-lg md:text-sm md:py-2 px-12">Home</ul>
                    <ul className="hover:bg-gray-200 duration-300 transition-all py-4 text-lg md:text-sm md:py-2 px-12">Order</ul>
                    <ul className="hover:bg-gray-200 duration-300 transition-all py-4 text-lg md:text-sm md:py-2 px-12">Account</ul>
                </div>
            </header>
        </>
    )
}

export default ShopNavbar;