const SecondBlogSection = ({Img1,Img2,Img3}) => {
    return(
        <div className="flex flex-col max-w-[1300px] px-2 md:pl-20 md:pr-4 py-8">
            <div className="w-full col-span-3 py-4 ">
                <h1 className="px-4 py-1 text-3xl font-bold font-Robot text-gray-700">Work & Life</h1>
                <hr className="w-full text-black border"/>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4  gap-6 sm:gap-0 md:gap-4 font-poppins font-bold px-2">
                <div className="col-span-4 md:col-span-2 w-full relative">
                    <img src={Img1} alt="" className="w-full h-[65%]"/>
                    <div className="flex flex-col gap-y-2 py-2">
                        <div className="flex justify-between text-gray-400 text-sm">
                            <h2>Customer Service</h2>
                            <h2>30th July 2023</h2>
                        </div>
                        <h1 className="text-lg py-1">New Wooden Furniture for simple interior</h1>
                        <p className="text-xs ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-1  grid grid-cols-2 md:grid-cols-none md:grid-rows-2 gap-4 pb-14">
                    <div className="w-full">
                        <img src={Img2} alt="" className="w-full h-[60%]"/>
                        <div className="flex flex-col py-2 text-sm">
                            <div className="flex justify-between text-gray-400">
                                <h2>Customer Service</h2>
                                <h2>30th July 2023</h2>
                            </div>
                            <h1 className="py-1 font-bold">Behind The Wood Process</h1>
                            <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src={Img3} alt="" className="w-full h-[60%]"/>
                        <div className="flex flex-col py-2 text-sm">
                            <div className="flex justify-between text-gray-400">
                                <h2>Customer Service</h2>
                                <h2>30th July 2023</h2>
                            </div>
                            <h1 className="py-1 font-bold">New Second Branch Open</h1>
                            <p className="text-xs text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 md:col-span-4 lg:col-span-1 w-full">
                    <div className="w-full ">
                        <h1 className="px-2 font-bold font-Robot text-gray-700">Related Content</h1>
                        <hr className="w-full text-black border"/>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-none">
                        <div className="flex flex-row  gap-1 py-2 px-1">
                            <div>
                                <h1 className="text-xs font-Robot pb-1">Content</h1>
                                <p className="text-[9px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dapibus lectus, id ultrices ipsum. </p>
                            </div>
                            <img src={Img1} alt="" className=" w-[100px] h-[90px]"/>
                        </div>
                        <div className="flex flex-row  gap-1 py-2 px-1">
                            <div>
                                <h1 className="text-xs font-Robot pb-1">Content</h1>
                                <p className="text-[9px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dapibus lectus, id ultrices ipsum. </p>
                            </div>
                            <img src={Img1} alt="" className=" w-[100px] h-[90px]"/>
                        </div>
                        <div className="flex flex-row  gap-1 py-2 px-1">
                            <div>
                                <h1 className="text-xs font-Robot pb-1">Content</h1>
                                <p className="text-[9px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dapibus lectus, id ultrices ipsum. </p>
                            </div>
                            <img src={Img1} alt="" className=" w-[100px] h-[90px]"/>
                        </div>
                        <div className="flex flex-row  gap-1 py-2 px-1">
                            <div>
                                <h1 className="text-xs font-Robot pb-1">Content</h1>
                                <p className="text-[9px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dapibus lectus, id ultrices ipsum. </p>
                            </div>
                            <img src={Img1} alt="" className=" w-[100px] h-[90px]"/>
                        </div>
                        <div className="flex flex-row  gap-1 py-2 px-1">
                            <div>
                                <h1 className="text-xs font-Robot pb-1">Content</h1>
                                <p className="text-[9px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo dapibus lectus, id ultrices ipsum. </p>
                            </div>
                            <img src={Img1} alt="" className=" w-[100px] h-[90px]"/>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default SecondBlogSection