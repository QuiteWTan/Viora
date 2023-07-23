import Blog1 from '../assets/Home/Content2.jpg'
import { HandleScroll } from './HandleScroll'

const FourthHomeSection = () => { 
    const SlideLeft = () => {
        let Slider = document.getElementById('Slider')
        Slider.scrollLeft = Slider.scrollLeft -500
    }

    const SlideRight = () => {
        let Slider = document.getElementById('Slider')
        Slider.scrollLeft = Slider.scrollLeft + 500
    }

    const Image = [Blog1,Blog1,Blog1,Blog1,Blog1,Blog1,Blog1,Blog1,Blog1,Blog1,Blog1,Blog1]
    return(
        <div className='w-full lg:h-screen flex flex-col justify-center items-center bg-slate-100' name='FourthHomeSection'>
            <div className='flex flex-col justify-center items-center py-10 px-2'>
                <div className='max-w-[1100px] flex flex-col justify-center items-center gap-y-10'>
                    <h1 className='text-3xl text-gray-600 font-bold font-Robot'>Our History</h1>
                    <p className='font-poppins text-sm text-center text-gray-500'>Founded in the heart of a small town, our furniture company traces its roots back to a humble workshop where skilled artisans dedicated their passion to crafting exquisite pieces. Over the years, our commitment to uncompromising quality and attention to detail has earned us a reputation for timeless designs that transform spaces into havens of comfort and elegance.</p>
                    <h1 className='text-3xl text-gray-600 font-bold font-Robot'>Instagram</h1>

                    <div className='relative flex items-center'>
                        <box-icon name='chevron-left' size='md' onClick={SlideLeft} ></box-icon>
                        <div id='Slider' className='w-full h-full overflow-x-scroll scroll scrollbar-hide whitespace-nowrap scroll-smooth overflow-y-hidden'>
                            {
                            Image.map((src) => (
                                <img src={src} alt=""  className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'/>
                            ))
                            }
                        </div>
                        <box-icon name='chevron-right' size='md' onClick={SlideRight}></box-icon>
                    </div>
                    <div className='flex flex-row gap-x-5'>
                        <box-icon type='logo' name='facebook' size='md' color='gray'></box-icon>
                        <box-icon name='instagram-alt' type='logo' size='md' color='gray'></box-icon>
                        <box-icon name='twitter' type='logo' size='md' color='gray'></box-icon>
                    </div>
                </div>
            </div>
            <HandleScroll Destination='FifthHomeSection'/>
        </div>
    )
}

export default FourthHomeSection;