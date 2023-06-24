import Blog1 from '../assets/Home/Content2.jpg'
import { HandleScroll } from './HandleScroll'

const FifthHomeSection = () => { 
    const ThirdHomeList = [
        {
            Image: Blog1,
            Date:"06/03/2023",
            Title:"Lorem Ipsum",
            Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
            AddedClass: ""
        },
        {
            Image: Blog1,
            Date:"06/03/2023",
            Title:"Lorem Ipsum",
            Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
            AddedClass: ""
        },
        {
            Image: Blog1,
            Date:"06/03/2023",
            Title:"Lorem Ipsum",
            Desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
            AddedClass: "sm:col-span-2 md:col-span-1"
        },
    ]
    return(
        <div className='w-full lg:h-screen px-10 sm:px-20 flex justify-center items-center' name='ThirdHomeSection'>
            <div className="max-w-[1000px] flex flex-col justify-center gap-y-10">
                <h1 className="text-3xl font-bold font-Robot text-gray-700">From Our Blog</h1>
                <div className="grid grid-cols-1 sm:grid-rows-none sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
                    {ThirdHomeList.map((Content,index) => (
                        <div className={`flex flex-col ${Content.AddedClass}`} key={index}>
                            <div className='w-full max-h-[200px] relative overflow-hidden'>
                                <img src={Content.Image} alt="absolute w-full h-full" />
                            </div>
                            <div className='py-4 flex flex-col gap-y-1'>
                                <h3 className='text-sm text-gray-400'>{Content.Date}</h3>
                                <h1 className='font-bold text-gray-600'>{Content.Title}</h1>
                                <p className='text-xs text-gray-600'>{Content.Desc}</p>
                                <button className='text-left font-bold text-gray-500 text-sm py-2'>―― See More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <HandleScroll Destination={'FirstHomeSection'}/>
        </div>
    )
}

export default FifthHomeSection;