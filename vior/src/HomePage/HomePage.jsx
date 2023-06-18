import Navbar from '../Navbar'
import HomeContent from './HomeContent';

const HomePage = () => {
    return(
        <div className='flex flex-row'>
            <Navbar/>
            <HomeContent/>
        </div>
    )
}

export default HomePage;