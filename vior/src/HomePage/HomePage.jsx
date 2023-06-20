import Navbar from '../Navbar'
import HomeContent from './HomeContent';
import LoginPage from '../LoginPage/LoginPage';

const HomePage = () => {
    return(
        <div className='flex flex-row'>
            <Navbar/>
            <HomeContent/>
        </div>
    )
}

export default HomePage;