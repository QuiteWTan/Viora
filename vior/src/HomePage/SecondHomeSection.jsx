import LoginBG from '../assets/Login/LoginBG.jpg'
import Home2 from '../assets/Home/Content2.jpg'
import { HandleScroll } from './HandleScroll'
const SecondHomeSection = () => {
    const SecondHomeList = [
    {
        icon: <box-icon type='solid' name='truck'></box-icon>,
        Title:"Reliable and Quick Shipping",
        Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
        icon:<box-icon name='money'></box-icon>,
        Title:"MoneyBack Guarantee",
        Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
        icon:<box-icon name='phone' type='solid' ></box-icon>,
        Title:"Free Available Support",
        Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    {
        icon:<box-icon name='shopping-bags' type='solid' ></box-icon>,
        Title:"Daily Tempting Deals",
        Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
    },
    ]
    return(
        <div className='w-full lg:h-screen py-12 md:px-20 flex flex-col justify-center items-center' name='SecondHomeSection'>
            <div className='flex flex-col '>
                <div className='max-w-[1100px]  grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 p-4 gap-y-20 '>
                    <div className='flex flex-col justify-center px-5 md:pr-10 md:text-center pt-4 md:pt-0 col-span-1'>
                        <p className='text-lg text-left md:text-1xl lg:text-2xl font-Robot text-gray-800 font-bold'>Why Choose Us ?</p>
                        <p className='py-4 text-xs sm:text-sm  text-left max-w-[600px] font-Robot text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                        <div className='grid grid-cols-2 gap-x-4 gap-y-4'>
                            {SecondHomeList.map((Content,index) =>(
                                <div key={index} className='bg-slate-100 flex flex-col gap-y-1 px-3 py-3 lg:py-5 md:px-4 rounded-md shadow-md text-left text-gray-500' >
                                    {Content.icon}
                                    <h1 className="md:text-xs text-sm font-bold">{Content.Title}</h1>
                                    <p className="text-[9px] md:text-xs">{Content.Desc}</p>
                                </div>
                            )) }
                            
                        </div>
                    </div>

                    <div className='w-full pl-20 pt-10 relative text-center col-span-1'>
                        <div className='relative w-full h-full z-7'>
                            <img src={LoginBG} alt=""  className='absolute w-full h-full'/>
                        </div>
                        <img src={Home2} alt=""  className='absolute top-[-5%] left-[0px] w-44 h-44 z-[-1]'/>
                        <img src={Home2} alt=""  className='hidden md:block absolute bottom-[-60px] right-[-10%] w-44 h-44 z-8'/>
                    </div>
                </div>
            </div>
            <HandleScroll Destination='ThirdHomeSection'/>
        </div>
    )   
}

export default SecondHomeSection