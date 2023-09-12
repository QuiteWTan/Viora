import ShopNavbar from "../Product/ShopNavbar"
import AboutUs1 from '../assets/AboutUs/AboutUs1.png'
import AboutUs2 from '../assets/AboutUs/AboutUs2.png'
import AboutUs3 from '../assets/AboutUs/AboutUs3.jpg'
const AboutUs = () => {
    return(
        <div>
            <ShopNavbar showSearch={false}/>
            <div className="w-full flex flex-col justify-center items-center ">
                <h1 className="font-bold text-3xl min-[450px]:text-6xl font-Robot text-gray-600 py-6">ABOUT US</h1>
                <div className="w-full flex justify-center py-4 md:py-20 px-6 ">
                    <div className="flex flex-row max-w-[1200px] justify-center text-gray-600 text-xs sm:text-sm md:text-md">
                        <div className='flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center'>
                            
                            <div className='w-full max-w-[1200px] lg:max-w-[450px] lg:w-full flex flex-col '>
                                
                                <h1 className='text-xl min-[450px]:text-5xl font-poppins py-2 font-bold'>First Started</h1>
                                <p className="text-sm md:text-md max-w-[500px] py-6 font-Robot">
                                In the bustling heart of urban creativity, Vior emerged as a visionary furniture company that transcended the boundaries of conventional design. Founded by a group of passionate artisans and innovative thinkers, Vior aimed to reshape the concept of furniture by blending timeless craftsmanship with cutting-edge technologies. With a commitment to sustainability, each piece bore the hallmark of meticulous artistry and eco-conscious materials. 
                                </p>
                                <div className='flex items-start'>
                                    <button className='py-2 text-xl  px-24 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 flex items-end gap-2'>
                                        See More
                                        <box-icon name='chevrons-right' color='gray'></box-icon>
                                    </button>
                                </div>
                            </div>
                            <div className='max-w-[650px]'>
                                <img src={AboutUs1 } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center py-24 px-6 bg-slate-50">
                    <div className="flex flex-row max-w-[1200px] justify-center text-gray-600 text-xs sm:text-sm md:text-md">
                        <div className='flex flex-col lg:flex-row gap-y-4 gap-x-6 '>
                            <div className='max-w-[450px]'>
                                <img src={AboutUs2 } alt="" className=""/>
                            </div>

                            <div className="flex flex-col lg:flex-row items-end gap-6 py-4">
                                <div className='w-full max-w-[1200px] lg:max-w-[300px] flex flex-col border-t-4 border-slate-500 py-6 px-4'>
                                    
                                    <h1 className='text-2xl lg:text-5xl font-poppins py-2 font-bold'>Vision</h1>
                                    <p className="text-sm md:text-md max-w-[500px] py-6 font-Robot">
                                    In the bustling heart of urban creativity, Vior emerged as a visionary furniture company that transcended the boundaries of conventional design. Founded by a group of passionate artisans and innovative thinkers, Vior aimed to reshape the concept of furniture by blending timeless craftsmanship with cutting-edge technologies. With a commitment to sustainability, each piece bore the hallmark of meticulous artistry and eco-conscious materials. 
                                    </p>
                                    <h1 className='text-lg font-bold w-full text-center'>
                                        "John Doe (CEO of VIor)"
                                    </h1>
                                </div>
                                <div className='w-full max-w-[1200px] lg:max-w-[300px] lg:w-full flex flex-col border-t-4 border-slate-500 py-6 px-4'>
                                    
                                    <h1 className='text-2xl lg:text-5xl font-poppins py-2 font-bold'>Mission</h1>
                                    <p className="text-sm md:text-md max-w-[500px] py-6 font-Robot">
                                    In the bustling heart of urban creativity, Vior emerged as a visionary furniture company that transcended the boundaries of conventional design. Founded by a group of passionate artisans and innovative thinkers, Vior aimed to reshape the concept of furniture by blending timeless craftsmanship with cutting-edge technologies. With a commitment to sustainability, each piece bore the hallmark of meticulous artistry and eco-conscious materials. 
                                    </p>
                                    <h1 className='text-lg font-bold w-full text-center'>
                                        "John Doe (CEO of VIor)"
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center py-24 px-2 sm:px-6">
                    <div className="flex flex-row max-w-[1000px] justify-center text-gray-600 text-xs sm:text-sm md:text-md overflow-hidden">
                        <div className='flex flex-row gap-y-4 gap-x-6 relative w-full md:grid grid-cols-stretch'>
                            <div className='w-full sm:w-2/3 rounded-md overflow-hidden p-4 border-4 border-slate-500'>
                                <img src={AboutUs3} alt="" className="h-[450px] w-full"/>
                            </div>
                            <div className='w-5/6 sm:max-w-[600px] lg:w-full flex flex-col bg-white shadow-md absolute px-6 sm:px-24 py-8 top-1/2 translate-x-[-50%] translate-y-[-50%] sm:translate-x-0 sm:transform sm:-translate-y-1/2 left-[50%] sm:left-[25%] md:left-[35%] rounded-md'>
                                <h1 className='text-lg lg:text-2xl font-poppins py-2 font-bold text-center'>Interested in becoming a part of the team?</h1>
                                <p className="text-xs md:text-md max-w-[500px] py-6 font-Robot text-center">
                                    In the bustling heart of urban creativity, Vior emerged as a visionary furniture company that transcended the boundaries of conventional design. Founded by a group of passionate artisans and innovative thinkers, Vior aimed to reshape the concept of furniture by blending timeless craftsmanship with cutting-edge technologies. 
                                </p>
                                <div className='flex w-full justify-center'>
                                    <button className='py-2 text-md md:text-lg text-white bg-slate-500 px-8 sm:px-24 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 w-full'>Join Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutUs