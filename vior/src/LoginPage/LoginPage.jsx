import LoginBG from '../assets/Login/LoginBG.jpg'
import { useState } from 'react';
const LoginPage = () => {
    const [isFocusedUser, setIsFocusedUser] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);

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
                    <form className='flex flex-col gap-y-4 py-8'>
                        <div className={`flex flex-row justify-between items-center bg-gray-200 py-3 px-6 rounded-md  ${isFocusedUser ? 'outline-gray-500' : ''}`} onFocus={ () => setIsFocusedUser(!isFocusedUser) } onBlur={() => setIsFocusedUser(!isFocusedUser)}>
                            <input id="myInput" type="text" placeholder='Username or Email' className='bg-gray-200 outline-none'/>
                            <box-icon name='user' ></box-icon>
                        </div>
                        <div className={`flex flex-row justify-between items-center bg-gray-200 py-3 px-6 rounded-md  ${isFocusedPassword ? 'outline-gray-500' : ''}`} onFocus={() => setIsFocusedPassword(!isFocusedPassword)} onBlur={() => setIsFocusedPassword(!isFocusedPassword)}>
                            <input type="password" placeholder='Password' className='bg-gray-200 outline-none'/>
                            <box-icon name='lock-alt'></box-icon>
                        </div>   
                        <div className='text-xs px-1 text-gray-500'>
                            <h1>Having troubles signing in? <a href="" className='font-bold underline'>click here</a></h1>
                        </div>
                        <button className='py-2 px-6 text-center w-full bg-slate-300 rounded-md font-bold text-gray-500 hover:bg-slate-400 duration-300 transition-color hover:text-gray-700'>
                            Sign In
                        </button>
                        <div className='text-xs text-gray-500 w-full text-center flex flex-col justify-center items-center'>
                            <h1>――――  or Sign In With ――――  </h1>
                            <div className='flex flex-row justify-center items-center py-3 gap-x-2 font-Robot'>
                                <div className='flex flex-row items-center gap-x-1 py-1 px-3 rounded-md bg-gradient-to-r from-yellow-600  to-green-600'>
                                    <box-icon name='google' type='logo' color="white" ></box-icon>
                                    <h1 className='text-sm font-bold text-white'>Google</h1>
                                </div>
                                <div className='flex flex-row items-center gap-x-1 py-1 px-3 border border-gray-300 rounded-md bg-blue-600'>
                                    <box-icon name='facebook' type='logo' color="white" ></box-icon>
                                    <h1 className='text-sm  font-bold text-white'>Facebook</h1>
                                </div>
                                <div className='flex flex-row items-center gap-x-1 py-1 px-3 border border-gray-300 rounded-md bg-purple-600'>
                                    <box-icon name='yahoo' type='logo' color="white" ></box-icon>
                                    <h1 className='text-sm font-bold text-white'>Yahoo</h1>
                                </div>
                            </div>
                        </div>
                        <div className='text-xs text-gray-500 w-full text-center'>
                            <h1>Don't have an account? <a href="" className='font-bold underline'>Register now</a></h1>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;