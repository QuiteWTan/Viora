import {AiOutlineTwitter,AiOutlineWhatsApp,AiOutlineSkype,AiOutlineInstagram} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='w-full border-t-4 flex justify-center bg-slate-400'>
            <div className='grid max-w-[1240px] mx-auto py-16 px-4 gap-8 text-gray-800 md:grid-cols-6'>
                <div className='col-span-2 text-white'>
                    <h1 className=' w-full text-3xl font-bold font-play text-left'> Otter</h1>
                    <p className='py-4 text-xs text-left md:text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>

                <div className='lg:flex grid grid-cols-2 lg:grid-cols-3 col-span-0 md:col-span-4 justify-between md:gap-x-4 col-span-2'>
                    <div className='text-white'>
                        <h4 className='font-bold text-left '>Navigates</h4>
                        <div className="flex flex-col">
                            <Link>Landing Page</Link>
                            <Link>Home</Link>
                            <Link>Shop</Link>
                        </div>
                    </div>

                    <div className='text-white flex flex-col gap-4'>
                        <div>
                            <h4 className='font-bold text-left '>Resources</h4>
                            <div className="flex flex-col">
                                <Link>Help Center</Link>
                                <Link>Blog</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className='font-bold text-left '>Others</h4>
                            <div className="flex flex-col">
                                <Link>Terms</Link>
                                <Link>About Us</Link>
                            </div>
                        </div>
                    </div>


                    <div className='max-w-[300px] mt-4 lg:mt-0 pb-2 col-span-2 flex flex-col justify-between text-white'>
                        <div className='w-full'>
                            <h1 className='text-md md:text-xl pb-2 font-Robot '>Sign Up for Newsletter!</h1>
                            <div className=" bg-white w-full flex justify-between p-1 items-center px-2 border-2 rounded-md">
                                <input type="text" className="bg-transparent focus:outline-none w-full" placeholder="Any Help?"/>
                                <button className="bg-slate-400 py-2 px-8 rounded-md text-white"> Search</button>
                            </div>
                        </div>
                        <div className='flex flex-row w-full  justify-between'>
                            <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent" src=''><AiOutlineInstagram className='bg-transparent  hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                            <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineWhatsApp className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                            <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineTwitter className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                            <Link className = "w-[70px] h-[70px] flex items-center justify-center bg-transparent " src=''><AiOutlineSkype className='bg-transparent hover:bg-gray-900 rounded-md duration-500' size={35}/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;