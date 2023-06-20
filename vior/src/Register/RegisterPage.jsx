import LoginBG from '../assets/Login/LoginBG.jpg'
import { useState } from 'react';
import AnimatedInput from '../FormComponent/AnimatedInput';

const RegisterPage = ( ) => {

    return(
        <div className="w-full h-screen grid grid-cols-2">
            <div className='w-full h-full'>
                <img src={LoginBG} alt="" className='w-full h-full'/>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <AnimatedInput/>
            </div>
        </div>
    )
}

export default RegisterPage;