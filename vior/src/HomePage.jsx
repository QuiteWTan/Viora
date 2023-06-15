import Card1 from '../src/assets/FashionHomeStore.jpg'
import Card2 from '../src/assets/Clothes1.jpg'
import Card3 from '../src/assets/Clothes2.jpg'
const SContent = () => {
    return(
        <div className='w-full py-16 px-2 flex justify-center items-center'>
            <div className='max-w-[1800px] mx-auto grid lg:grid-cols-2 p-4'>
                <div className='max-w-[550px] md:ml-0 '>
                    <div className='max-w-[500px] grid grid-cols-[repeat(minmax(50px,1fr))] gap-x-2 gap-y-2 p-2 mx-auto justify-center items-center'>
                        <img src={Card1} alt="" className='col-span-2 w-full max-h-[550px]'/>
                        <img src={Card2} alt="" className='w-full max-h-[150px]'/>
                        <img src={Card3} alt="" className='w-full max-h-[150px]'/>
                    </div>
                </div>

                <div className='flex flex-col justify-center px-5 md:pr-10 md:text-center pt-4 md:pt-0'>
                    <p className='text-lg text-left md:text-1xl lg:text-2xl font-play text-gray-600'>Meet the Otter Store!</p>
                    <h1 className='text-bold text-3xl md:text-4xl lg:text-7xl text-left'>About Us</h1>
                    <p className='py-4 text-xs sm:text-sm md:text-lg text-left max-w-[500px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. </p>
                    <div className='flex flex-row gap-x-3 max-w-[100px]'>
                        <div className=' bg-gray-200 flex flex-col px-3 py-3 lg:py-5 md:px-6 items-center justify-center rounded-md shadow-xl'>
                            <h1 className='bg-gray-200 text-xl md:text-3xl font-montserrat font-bold p-1'>10</h1>
                            <p className='bg-gray-200 text-xs md:text-md lg:text-lg font-poppins text-gray-600'>Years</p>
                            <p className='bg-gray-200 text-xs md:text-md lg:text-lg font-poppins text-gray-600'>Experience</p>
                        </div>
                        <div className=' bg-gray-200 flex flex-col px-3 py-3 lg:py-5 md:px-6 items-center justify-center rounded-md shadow-xl'>
                            <h1 className='bg-gray-200 text-xl md:text-3xl font-montserrat font-bold p-1'>20k</h1>
                            <p className='bg-gray-200 text-xs md:text-md lg:text-lg font-poppins text-gray-600'>Happy</p>
                            <p className='bg-gray-200 text-xs md:text-md lg:text-lg font-poppins text-gray-600'>Customers</p>
                        </div>
                        <div className=' bg-gray-200 flex flex-col px-3 py-3 lg:py-5 md:px-6 items-center justify-center rounded-md shadow-xl'>
                            <h1 className='bg-gray-200 text-xl md:text-3xl font-montserrat font-bold p-1'>100</h1>
                            <p className='bg-gray-200 text-xs md:text-md lg:text-lg font-poppins text-gray-600'>Outlets</p>
                            <p className='bg-gray-200 text-xs md:text-md lg:text-lg font-poppins text-gray-600'>Anywhere</p>
                        </div>
                    </div>
                    <button className="max-w-[180px] p-1 mt-4 border bg-gray-800 text-md text-white hover:bg-gray-700  hover:text-opacity-75 transition-all ease-linear duration-250 rounded-md md:text-xl md:p-2 md:pl-4 md:pr-4">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default SContent;