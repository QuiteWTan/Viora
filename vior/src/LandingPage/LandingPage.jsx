import Navbar from '../Navbar'
import FirstHomeSection from './Section/FirstHomeSection';
import SecondHomeSection from './Section/SecondHomeSection';
import ThirdHomeSection from './Section/ThirdHomeSection';
import FourthHomeSection from './Section/FourthHomeSection';
import FifthHomeSection from './Section/FifthHomeSection';
import './LandingPage.css'

const LandingPage = () => {
    return(
        <div className='flex flex-col'>
            <Navbar/>
            <FirstHomeSection/>
            <SecondHomeSection/>
            <ThirdHomeSection/>
            <FourthHomeSection/>
            <FifthHomeSection/>
        </div>
    )
}

export default LandingPage;