import Navbar from '../Navbar'
import FirstHomeSection from './Section/FirstHomeSection';
import SecondHomeSection from './Section/SecondHomeSection';
import ThirdHomeSection from './Section/ThirdHomeSection';
import FourthHomeSection from './Section/FourthHomeSection';
import FifthHomeSection from './Section/FifthHomeSection';
import './LandingPage.css'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Swal from 'sweetalert2'
const LandingPage = () => {
    const location = useLocation();
    const isLogin = location.state || false;

    const Login = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      const notLogin = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      
    useEffect(() => {
        if(isLogin){
            Login.fire({
                icon: 'success',
                title: 'Signed in successfully'
              })
        }else{
            notLogin.fire({
                icon: 'error',
                title: `You haven't signed in `
              })
        }
          
      }, []);
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