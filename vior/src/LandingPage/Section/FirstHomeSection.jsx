import {Link} from 'react-scroll';
import Furn1 from '../assets/Home/Furn1.png'

import { HandleScroll } from './HandleScroll';

const FirstHomeSection = () => {
    return(
        <div className='w-full flex flex-col items-center justify-center bg-slate-100' name='FirstHomeSection'>
            <div className='flex flex-col max-w-[1200px] py-24 px-4 md:px-20  '>
                <div className='flex flex-col lg:flex-row gap-y-4 gap-x-8' >
                    
                    <div className=''>
                        <img src={Furn1} alt="" />
                    </div>
                    <div className='w-full max-w-[1200px] lg:max-w-[450px] lg:w-full flex flex-col my-12 gap-y-6 p-6'>
                        
                        <h1 className='text-3xl lg:text-5xl font-poppins py-4 font-bold'>STATE OF THE ART</h1>
                        <p className="text-md lg:text-lg max-w-[600px] py-6 font-poppins">Transform your home into a summer oasis with our unbeatable furniture sale! Discover a wide selection of chic outdoor loungers, stylish patio sets, and refreshing indoor pieces at <span className='font-bold text-red-900 text-'> up to 60% off.</span> Elevate your living space with summer vibes—shop now and bask in the comfort of our exclusive deals!</p>
                        <div className='flex w-full items-start'>
                            <button className='py-3 text-lg text-white bg-slate-500 px-24 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300'>Get Started</button>
                        </div>
                    </div>
                </div>
                <HandleScroll Destination="SecondHomeSection"/>
            </div>
            
        </div>
    )
}

export default FirstHomeSection;