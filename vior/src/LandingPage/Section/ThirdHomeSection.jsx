import Blog1 from '../assets/Home/Content2.jpg'
import { HandleScroll } from './HandleScroll'
import { Link } from 'react-scroll'
import Home1 from '../assets/Home/HomeContent1.jpg'
import Home2 from '../assets/Home/Content2.jpg'
import Home3 from '../assets/Home/Content3.jpg'
import Home4 from '../assets/Home/Content4.jpg'
import { useState } from 'react'
import FeaturedProduct from './DisplayFeaturedProductList'

const ThirdHomeSection = () => { 
    const Bedroom = [
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bedroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
    ]

    const Bathroom = [
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Bathroom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
    ]

    const LivingRoom = [
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'LivingRoom',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
    ]

    const Kitchen = [
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
        {
            Image:Blog1,
            Name:'Kitchen',
            BeforePrice:'Rp 600.000',
            AfterPrice:'Rp 450.000'
        },
    ]

    const [List, setList] = useState([true,false,false,false]);

    const Show = (index) => {
        const updatedList = [...List];
        if(updatedList[index]== true){
            updatedList[index] = updatedList[index];
        }else{
            updatedList[index] = !updatedList[index];
        }
        for (let i = 0; i < List.length; i++) {
            if (i !== index && updatedList[i] == true) {
                updatedList[i] = !updatedList[i];
            }
        }
        setList(updatedList);
    }


    const Category=['Bathroom','Bedroom','Livingroom','Kitchen']

    return(
        <div className='w-full lg:h-screen py-24 md:px-20 flex flex-col justify-center items-center' name='ThirdHomeSection'>
            <div className='flex flex-col '>
                <div className='max-w-[1300px] flex flex-col'>
                    <h1 className='text-3xl text-gray-600 font-bold'>Featured Products</h1>
                    <div className='flex flex-col gap-y-10 py-4'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2 md:gap-x-4 font-Robot text-lg'>
                            {Category.map((Cat,index) =>(
                                <button className='bg-slate-400 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105' key={index} onClick={() => Show(index)}>
                                    {Cat}
                                </button>
                            ))}
                        </div>
                        <div className='flex flex-row gap-x-10 h-full w-full overflow-hidden'>
                            {/* Bedroom */}
                            <div className={List[0]? 'block' : 'hidden'}>
                                <FeaturedProduct Data={Bathroom}/>         
                            </div>

                            {/* Bathroom */}
                            <div className={List[1]? 'block' : 'hidden'}>
                                <FeaturedProduct Data={Bedroom}/>         
                            </div>

                            {/* Living Room */}
                            <div className={List[2]? 'block' : 'hidden'}>
                                <FeaturedProduct Data={LivingRoom}/>         
                            </div>

                            {/*Kitchen*/}
                            <div className={List[3]? 'block' : 'hidden'}>
                                <FeaturedProduct Data={Kitchen}/>         
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <HandleScroll Destination='FourthHomeSection'/>
        </div>
    )
}

export default ThirdHomeSection;