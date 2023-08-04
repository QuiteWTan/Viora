import LoginBG from '../assets/Login/LoginBG.jpg'
import React, { useState } from 'react';
import AnimatedInput from '../FormComponent/AnimatedInput';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
        
const LoginPage = () => {
    const Nav = useNavigate();
    const [Message,setMessage] = useState('')
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        if (!formValues.email || !formValues.password) {
        console.log('not filled');
        document.getElementById('message').innerHTML = 'Form must be filled !';
        e.preventDefault();
        }else{
            document.getElementById('message').innerHTML = '';
            console.log('filled'); 
        }
          
    };

    const emailChanges = (name, value) => {
        setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: value,
        }));

        if(formValues.email == ''){
            document.getElementById('email-message').innerHTML = 'Email must be filled !';
        }else if(formValues.email != ''){
            document.getElementById('email-message').innerHTML = '';
        }
    };

    const passwordChanges = (name, value) => {
        setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: value,
        }));

        if(formValues.password ==''){
            document.getElementById('password-message').innerHTML = 'Password must be filled !';
        }else if(formValues.email != ''){
            document.getElementById('password-message').innerHTML = '';
        }
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

                    <form className='flex flex-col gap-y-2 py-8 '>
                        <AnimatedInput 
                            type={'text'} 
                            name='email' 
                            iconName='envelope' 
                            handleChange={emailChanges} 
                            values1={formValues.email}
                        />
                        <h1 id='email-message' className='text-xs h-4 text-red-500'></h1>
                        <AnimatedInput 
                            type={'password'} 
                            name='password' 
                            iconName='lock-alt'
                            handleChange={passwordChanges} 
                            values1={formValues.password}
                        />
                        <h1 id='password-message' className='text-xs h-4 text-red-500'></h1>
                        <div className='text-xs px-1 text-gray-500'>
                            <h1>Having troubles signing in? <a href="" className='font-bold underline'>contact here</a></h1>
                        </div>
                        <Link to="/"  state={true}>
                            <h1 id='message' className='text-sm h-8 text-red-500 w-full text-center'></h1>
                            <button
                                type='submit' // Add this line to make the button trigger form submission
                                className='py-2 px-6 text-center w-full bg-slate-300 rounded-md font-bold text-gray-500 hover:bg-slate-400 duration-300 transition-color hover:text-gray-700'
                                onClick={(e)=> handleSubmit(e)}
                            >
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