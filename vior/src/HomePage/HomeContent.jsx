import Home1 from '../assets/Home/HomeContent1.jpg'
import Home2 from '../assets/Home/Content2.jpg'
import Home3 from '../assets/Home/Content3.jpg'
import Home4 from '../assets/Home/Content4.jpg'

const HomeContent = () => {
    return(
        <div className='w-full flex justify-center items-center bg-slate-100'>
            <div className='flex flex-col py-5 px-2 md:pl-24 xl:pl-24'>
                <div>
                    <h1 className='text-xl md:text-3xl text-left  py-5'>―― Find Your <span className='font-bold text-slate-700'>Furniture </span></h1>
                </div>
                <div className='max-w-[1350px] h-[1000px] md:h-[600px] grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-none md:grid-cols-3 gap-x-4 items-center gap-y-4 '>
                    <div className='w-full h-full grid grid-cols-4 grid-rows-4 overflow-hidden col-span-2 md:col-span-1 gap-3'>
                        <div className='border-t-2 border-l-2 border-gray-400 p-3 col-span-2 flex flex-col justify-center items-center'>
                            <h1 className='font-Robot text-3xl'>High Quality</h1>
                            <h1 className='text-2xl'><span className='text-gray-400 text-4xl'>& </span>Like No Other</h1>
                        </div>

                        <div className='row-start-2 row-end-5 col-span-2 p-1 grid grid-rows-3 overflow-hidden'>
                            <img src={Home3} alt="" className='row-span-2 h-full w-full'/>
                            <div className='py-2 font-Robot text-xs bg-slate-500 text-white px-4'>
                                <h1 className='text-lg'>LOREM IPSUM</h1>
                                <div className='w-full'>
                                    <hr className='w-[20%] h-[4px]'/>
                                </div>
                                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                        <div className='row-start-1 row-end-4 col-span-2 p-1 grid grid-rows-3'>
                            <img src={Home2} alt="" className='row-span-2 h-full w-full'/>
                            <div className='py-2 font-Robot text-xs bg-slate-500 text-white px-4'>
                                <h1 className='text-lg'>LOREM IPSUM</h1>
                                <div className='w-full'>
                                    <hr className='w-[20%] h-[4px]'/>
                                </div>
                                <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-2 p-4 col-span-2 border-r-2 border-b-2 border-gray-400 justify-center'>
                            <p className='text-xs font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. </p>
                            <button className='bg-slate-400 px-6 py-2 text-md'>View More</button>
                        </div>

                    </div>
                    <div className='grid grid-rows-2 gap-y-2 w-full h-full relative overflow-hidden col-span-1'>
                        <img src={Home2} alt=""  className='shadow-xl rounded-md h-full w-full'/>
                        <img src={Home3} alt=""  className='shadow-xl rounded-md h-full w-full'/>
                    </div>
                    <div className='w-full h-full relative overflow-hidden grid grid-rows-4 col-span-1 rounded-md gap-y-2 shadow-xl'>
                        <img src={Home1} alt=""  className=' w-full h-full row-span-4'/>
                        <div className='grid grid-cols-4 gap-x-2'>
                            <img src={Home2} alt=""  className='h-full w-full'/>
                            <img src={Home3} alt=""  className='h-full w-full'/>
                            <img src={Home2} alt=""  className='h-full w-full'/>
                            <img src={Home3} alt=""  className='h-full w-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent;