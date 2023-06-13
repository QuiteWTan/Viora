import LogoB from '../src/assets/VectorB.png'
import 'boxicons';
import { useState } from 'react';
import { Link} from 'react-scroll'

const Navbar = () => {

    const [MenuIcon,setMenuIcon] = useState(true);
    const NavList = [
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Home"        ,link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Products"    ,link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "About"       ,link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Affiliate"   ,link:"/"},
        {icon: <box-icon type='solid' name='grid-alt'></box-icon> ,name : "Interns"     ,link:"/"},
        {icon: <box-icon name='cog' ></box-icon>                  ,name : "Settings"    ,link:"/"},
        {icon: <box-icon name='log-out' ></box-icon>              ,name : "Sign Out"    ,link:"/"}
    ]
    const ClickMenuIcon = () => {
        setMenuIcon(!MenuIcon)
    }
    return(
        <nav className='fixed top-0 left-0 h-full w-[240px] bg-slate-200 py-5 px-2'>
            <header className='flex flex-col relative'>
                <div className='flex justify-between'>
                    <div className='flex flex-row items-center'>
                            <box-icon type='solid' name='cube' size="lg"></box-icon>
                            <h1 className='font-poppins text-4xl font-bold px-2'>Vior</h1>
                    </div>
                    <div onClick={ClickMenuIcon}>
                        {MenuIcon ? <box-icon name='menu' ></box-icon> : <box-icon name='x'></box-icon>}
                    </div>
                </div>
                <div>
                    {NavList.map((Nav, index) => (
                        <Link to={Nav.link} className='flex flex-row items-center' key={index}>
                            {Nav.icon}
                            <p>{Nav.name}</p>
                        </Link>
                    ))}
                </div>
            </header>
        </nav>
    )
}

export default Navbar;