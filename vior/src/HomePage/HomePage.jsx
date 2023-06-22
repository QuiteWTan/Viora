import Navbar from '../Navbar'
import HomeContent from './HomeContent';
import LoginPage from '../LoginPage/LoginPage';
import SecondHomeSection from './SecondHomeSection';

const HomePage = () => {
    return(
        <div className='flex flex-row'>
            <Navbar/>
            <SecondHomeSection/>
        </div>
    )
}

export default HomePage;