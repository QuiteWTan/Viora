import LogoB from '../src/assets/VectorB.png'
import 'boxicons';
import { useState } from 'react';
import { Link} from 'react-scroll'
import Profile from '../src/assets/Profile.png'

const Navbar = () => {
    const [MenuIcon,setMenuIcon] = useState(true);
    const [SubMenuList, setSubMenu] = useState([true,true,true]);

    const DropDown = (index) => {
        const updatedList = [...SubMenuList];
        updatedList[index] = !updatedList[index];
        for (let i = 0; i < SubMenuList.length; i++) {
            if (i !== index && !updatedList[i]) {
                updatedList[i] = !updatedList[i];
            }
          }
        setSubMenu(updatedList);
    }

    const ClearDropDown = (index) => {
        setMenuIcon(!MenuIcon)
        const updatedList = [...SubMenuList];
        for (let i = 0; i < SubMenuList.length; i++) {
            if (!updatedList[i]) {
                updatedList[i] = !updatedList[i];
            }
          }
        setSubMenu(updatedList);
    }
    
    const MenuStyle = ['flex flex-col mx-7 px-5 my-1 py-2 gap-y-1 border-gray-400 border-l-2 h-0 hidden ','flex flex-col mx-7 px-5 my-1 py-2 gap-y-1 border-gray-400 border-l-2 h-auto ']
    const NavStyle = ['sticky w-[300px] top-0 left-0 h-screen bg-[#ffff4] pt-4 pb-2 shadow-md text-gray-600 px-2 transition-width duration-300 ','sticky top-0 left-0 h-full w-[73px] h-screen bg-[#ffff4] pt-4 pb-2 shadow-md text-gray-600 px-2 transition-width duration-300']

    const NavListTop = [
    {   
        icon: <box-icon type='solid' name='grid-alt'></box-icon> ,
        name : "Home"        ,
        HoverName : "Home",
        link:"/"
    },
        {
            icon: <box-icon name='buildings'></box-icon> ,
            name : "Products"    ,
            link:"/",
            Type:true, 
            HoverName : "Products",
            Sub1: "Kost", 
            Sub2: "Apartment",
            Sub3 : "Rent House", 
            Sub1Link:"/",
            Sub2Link:"/",
            Sub3Link:"/"
        },
        {
            icon: <box-icon name='user-pin'></box-icon> ,
            name : "About"       ,
            link:"/",
            Type:true, 
            HoverName : "About" ,
            Sub1: "Instagram", 
            Sub2: "Twitter",
            Sub3 : "Facebook", 
            Sub1Link:"/",
            Sub2Link:"/",
            Sub3Link:"/"},
        {
            icon: <box-icon type='solid' name='inbox'></box-icon> ,
            name : "Resources"   ,
            link:"/",
            Type:true, 
            HoverName : "Resources" ,
            Sub1: "Affiliate", 
            Sub2: "Help Center",
            Sub3 : "Contact",
            Sub4:"Services", 
            Sub1Link:"/",
            Sub2Link:"/",
            Sub3Link:"/",
            Sub4Link: "/"},
        {
            icon: <box-icon name='category' ></box-icon> ,
            name : "Categories"     ,
            HoverName : "Categories",
            link:"/"
        }
    ]

    return(
        <nav className={MenuIcon ? NavStyle[0] : NavStyle[1] }>
            <header className='flex flex-col h-full'>
                <div className='flex justify-between'>
                    <div className='flex flex-row items-center px-2 py-2 '>
                        <box-icon type='solid' name='cookie' size ="lg"></box-icon>
                        <h1 className={'font-play text-4xl font-bold px-2 text-black'}>{MenuIcon ? 'Vior' : ''}</h1>
                    </div>
                    <div onClick={() => ClearDropDown()}>
                        {
                        MenuIcon ? 
                        <box-icon name='x'></box-icon> 
                        : 
                        <box-icon name='menu' ></box-icon>
                        }
                    </div>
                </div>
                <div className='mt-4 py-3 border-solid border-gray-300 border-b-2 px-1'>
                    <div className='bg-gray-100 flex flex-row items-center px-3 py-3 rounded-sm border-slate-400 border-[1px] '>
                        {
                        MenuIcon ? 
                        <box-icon name='search-alt-2' className="p-2"></box-icon> :
                        <box-icon name='search-alt-2' animation='tada' className="p-2"></box-icon> 
                        }

                        {
                        MenuIcon ? 
                        <input type="text" placeholder='Search' className=' rounded-sm outline-none w-full bg-transparent text-black px-2'/> 
                        : ''
                        }
                        
                    </div>
                </div>
                <div className='flex flex-col justify-between h-full '>
                    <div className='py-3 flex flex-col'>
                        {NavListTop.map((Nav, index) => (
                            <div key={index} className=' hover:bg-slate-200 rounded-md transition ease-in-out duration-500 py-1'>
                                <div className='flex flex-row justify-between items-center py-3 px-4 group'>
                                    <Link to={Nav.link} className='flex flex-row gap-x-4'>
                                        {Nav.icon}
                                        <h2 style={{transitionDelay:`${index+2}00ms`}} className={`whitespace-pre  ${MenuIcon? 'duration-500 opacity-100 translate-x-0' : 'opacity-0 translate-x-28 overflow-hidden w-0 duration-0 delay-0'}`}>{Nav.name}</h2>
                                        
                                        <h2 className={MenuIcon? 'hidden' : 'w-0 overflow-hidden absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-sm drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-16 duration-300 group-hover:w-auto'}>{Nav.HoverName}</h2>
                                    </Link>
                                    {Nav.Type? 
                                    <box-icon name={SubMenuList[index-1]? 'chevron-down' : 'chevron-up'} onClick={() => DropDown(index-1)}></box-icon> : ''}
                                </div>
                                {
                                    MenuIcon?
                                    Nav.Sub1? 
                                    <div className={SubMenuList[index-1] ? MenuStyle[0] : MenuStyle[1]}>
                                        <Link to={Nav.Sub1Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub1}</Link>
                                        <Link to={Nav.Sub2Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub2}</Link>
                                        <Link to={Nav.Sub3Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub3}</Link>
                                        <Link to={Nav.Sub4Link} className='hover:bg-slate-300 px-2 py-1 rounded-sm transition ease-in-out delay-200'>{Nav.Sub4}</Link>
                                    </div> : '' 
                                    : ''
                                }
                            </div>
                        ))}
                    </div>


                        <div className='flex flex-row gap-x-4 items-center border-gray-300 border-t-2 pt-3 px-2 overflow-hidden'>
                            <img src={Profile} alt="" className='w-10 h-10 rounded-md'/>
                            <div className='flex flex-col px-1'>
                                <h1 className='text-sm font-bold'>Yayan</h1>
                                <p className='text-xs'>yayan123@gmail.com</p>
                            </div>
                            <box-icon name='log-out' ></box-icon>
                        </div>
                    </div>

            </header>
        </nav>
    )
}

export default Navbar;