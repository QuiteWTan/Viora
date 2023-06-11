import LogoB from '../src/assets/VectorB.png'

const Navbar = () => {
    return(
        <nav>
            <header>
                <div>
                    <span>
                        <img src={LogoB} alt="" className='w-8 h-8'/>
                        <h1>Vior</h1>
                    </span>
                </div>
            </header>
        </nav>
    )
}

export default Navbar;