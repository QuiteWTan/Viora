import LoginBG from '../assets/Login/LoginBG.jpg'
import React, { useState } from 'react';
import AnimatedInput from '../FormComponent/AnimatedInput';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
        
const LoginPage = () => {
    const Nav = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password:''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(formValues).some(value => value === '')) {
          console.log('Form is empty');
        } else {
          console.log('Form is not empty');
        }
      }
    
      const handleChange = (name, value) => {
        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          [name]: value,
        }));
        console.log(name)
      };

    return(
        
        <div className="w-full h-screen">
            <img src={LoginBG} alt="" className='w-full absolute h-full'/>
            <div className='bg-black opacity-20 blur-3xl w-full h-full absolute '></div>
                <div className='w-[20px]'>
                    <div className='bg-white opacity-20 blur-xl w-full h-full'></div>
                    <div className='absolute top-4 left-10 text-4xl font-play text-white'>
                        <h1>Vior</h1>
                        <div className='w-full font-play'>
                            <hr className='w-[30%] h-[4px] bg-white'/>
                        </div>
                    </div>
                </div>

            <div className='flex justify-center items-center w-full h-full absolute'>
                <div className='bg-slate-50 rounded-md px-4 py-6 md:px-10 flex flex-col gap-y-2  max-w-[400px]'>
                    <div className='text-slate-600'>
                        <h1 className='text-3xl font-bold font-Robot text-center'>Login</h1>
                        <div className='w-full text-black flex justify-center items-center py-2'>
                            <hr className='w-[10%] h-[4px] bg-black'/>
                        </div>
                    </div>

                    <p className='text-gray-400 px-4 text-center text-sm'>Please fill your information to sign in to your account </p>

                    <form className='flex flex-col gap-y-4 py-8 ' onSubmit={handleSubmit}>
                        <AnimatedInput 
                            type={'text'} 
                            name='Email' 
                            iconName='envelope' 
                            handleChange={handleChange} 
                            values={formValues.email}
                        />
                        <AnimatedInput 
                            type={'password'} 
                            name='Password' 
                            iconName='lock-alt'
                            handleChange={handleChange} 
                            values={formValues.password}
                        />
                        <div className='text-xs px-1 text-gray-500'>
                            <h1>Having troubles signing in? <a href="" className='font-bold underline'>contact here</a></h1>
                        </div>
                        <Link to="/" state={true}>
                            <button className='py-2 px-6 text-center w-full bg-slate-300 rounded-md font-bold text-gray-500 hover:bg-slate-400 duration-300 transition-color hover:text-gray-700' onClick={() => Nav('/')}>
                                Sign In
                            </button>
                        </Link>
                        

                        <div className='text-xs text-gray-500 w-full text-center flex flex-col justify-center items-center'>
                            <h1>――――  or Sign In With ――――  </h1>

                            <div className='flex flex-row justify-center items-center py-3 gap-x-2 font-Robot'>

                                <div className='flex flex-row items-center gap-x-1 py-1 px-3 rounded-md shadow-2xl bg-green-500'>
                                    <box-icon name='google' type='logo' color="white" ></box-icon>
                                    <h1 className='text-sm font-bold text-white'>Google</h1>
                                </div>

                                <div className='flex flex-row items-center gap-x-1 py-1 px-3 border border-gray-300 rounded-md bg-blue-500 shadow-2xl'>
                                    <box-icon name='facebook' type='logo' color="white" ></box-icon>
                                    <h1 className='text-sm  font-bold text-white'>Facebook</h1>
                                </div>

                                <div className='flex flex-row items-center gap-x-1 py-1 px-3 border border-gray-300 rounded-md bg-purple-500 shadow-2xl'>
                                    <box-icon name='yahoo' type='logo' color="white" ></box-icon>
                                    <h1 className='text-sm font-bold text-white'>Yahoo</h1>
                                </div>

                            </div>
                        </div>
                        <div className='text-xs text-gray-500 w-full text-center'>
                            <h1>Don't have an account? <button href="" className='font-bold underline' onClick={() => Nav('/register')}>Register now</button></h1>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;