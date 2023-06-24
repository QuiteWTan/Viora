import Navbar from '../Navbar'
import FirstHomeSection from './FirstHomeSection';
import SecondHomeSection from './SecondHomeSection';
import ThirdHomeSection from './ThirdHomeSection';
import FourthHomeSection from './FourthHomeSection';
import FifthHomeSection from './FifthHomeSection';
import './Home.css'

const HomePage = () => {
    return(
        <div className='flex flex-col'>
            <Navbar/>
            <FirstHomeSection/>
            {/* <SecondHomeSection/>
            <ThirdHomeSection/>
            <FourthHomeSection/>
            <FifthHomeSection/> */}
        </div>
    )
}

export default HomePage;