import LogoB from '../src/assets/VectorB.png'
import 'boxicons';
import { useState } from 'react';
import { Link} from 'react-scroll'
import Profile from '../src/assets/Profile.jpg'

const Navbar = () => {
    const [MenuIcon,setMenuIcon] = useState(true);
    const [SubMenu, setSubMenu] = useState(true);
    const [SubMenu1, setSubMenu1] = useState(true);
    const [SubMenu2, setSubMenu2] = useState(true);
    const SubMenuList = [SubMenu,SubMenu1,SubMenu2]
    const [Index, setIndex] = useState(true)

    const MenuStyle = ['flex flex-col mx-3 px-6 mt-3 py-1 gap-y-2 border-gray-500 border-l-2 h-0 hidden','flex flex-col mx-3 px-6 mt-3 py-1 gap-y-2 border-gray-500 border-l-2 h-auto ']
    const NavListTop = [
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Home"        ,link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Products"    ,link:"/",Type:<box-icon name='chevron-down' onClick={() => setSubMenu(!SubMenu)}></box-icon>, Sub1: "New1", Sub2: "New2",Sub3 : "New4", Sub1Link:"/",Sub2Link:"/",Sub3Link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "About"       ,link:"/",Type:<box-icon name='chevron-down' onClick={() => setSubMenu1(!SubMenu1)}></box-icon>, Sub1: "New1", Sub2: "New2",Sub3 : "New4", Sub1Link:"/",Sub2Link:"/",Sub3Link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Affiliate"   ,link:"/",Type:<box-icon name='chevron-down' onClick={() => setSubMenu2(!SubMenu2)}></box-icon>, Sub1: "New1", Sub2: "New2",Sub3 : "New4", Sub1Link:"/",Sub2Link:"/",Sub3Link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Interns"     ,link:"/"}
    ]

    return(
        <nav className='fixed top-0 left-0 h-full w-[240px] bg-slate-300 py-4 px-3'>
            <header className='flex flex-col relative h-full'>
                <div className='flex justify-between'>
                    <div className='flex flex-row items-center'>
                            <box-icon type='solid' name='cube' size="lg"></box-icon>
                            <h1 className='font-poppins text-4xl font-bold px-2'>Vior</h1>
                    </div>
                    <div onClick={() => setMenuIcon(!MenuIcon)}>
                        {MenuIcon ? <box-icon name='x'></box-icon> : <box-icon name='menu' ></box-icon>}
                    </div>
                </div>
                <div className='py-5 border-solid border-gray-500 border-b-2'>
                    <input type="text" placeholder='Search' className='p-2 rounded-sm outline-slate-400 w-full'/>
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='py-3 flex flex-col gap-y-4'>
                        {NavListTop.map((Nav, index) => (
                            <div key={index} >
                                <div className='flex flex-row justify-between items-center'>
                                    <Link to={Nav.link} className='flex flex-row gap-x-4'>
                                        {Nav.icon}
                                        <p>{Nav.name}</p>
                                    </Link>
                                    {Nav.Type}
                                </div>
                                {
                                    MenuIcon?
                                    Nav.Sub1? 
                                    <div className={SubMenuList[index-1] ? MenuStyle[0] : MenuStyle[1]}>
                                        <Link to={Nav.Sub1Link}>{Nav.Sub1}</Link>
                                        <Link to={Nav.Sub2Link}>{Nav.Sub2}</Link>
                                        <Link to={Nav.Sub3Link}>{Nav.Sub3}</Link>
                                    </div> : '' 
                                    : ''
                                }
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col'>
                        <Link to='/' className='flex flex-row items-center gap-x-2 py-2'>
                            <box-icon name='cog' ></box-icon> 
                            <p>Setting</p>
                        </Link>  
                        <div className='flex flex-row gap-x-4 items-center border-gray-500 border-t-2 pt-3'>
                            <img src={Profile} alt="" className='w-10 h-10 rounded-md'/>
                            <div className='flex flex-col'>
                                <h1 className='text-sm font-bold'>Yayan</h1>
                                <p className='text-xs'>yayan123@gmail.com</p>
                            </div>
                            <box-icon name='log-out' ></box-icon>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    )
}

export default Navbar;