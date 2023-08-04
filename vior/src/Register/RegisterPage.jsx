import LoginBG from '../assets/Login/LoginBG.jpg'
import { useState } from 'react';
import AnimatedInput from '../FormComponent/AnimatedInput';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const Nav = useNavigate()
    const [Message,setMessage] = useState('')
    const [formValues, setFormValues] = useState({
        Username: '',
        Email: '',
        Password: '',
        ConfirmPassword:'',
        PhoneNumber:'',
        Address:''
    });

    const handleSubmit = (e) => {
        if (!formValues.Email || !formValues.Password || !formValues.ConfirmPassword || !formValues.Username || !formValues.PhoneNumber || !formValues.Address) {
            console.log('not filled');
            document.getElementById('message').innerHTML = 'All input field must be filled!';
            e.preventDefault();
            console.log(formValues.Email)
        }
        console.log('filled');   
    };

    const handleChanges = (name, value) => {
        setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [name]: value,
        }));
    };

    

    return(
        <div className="w-full h-screen grid grid-cols-2 bg-slate-50">
            <div className='w-full relative'>
                <img src={LoginBG} alt="" className='w-full h-full absolute'/>
            </div>
            <div className='w-full h-full flex items-center flex-col pt-16 pb-20 justify-evenly px-24'>
                <h1 className='text-4xl font-play font-bold'>Vior</h1>
                <div className='text-center'>
                    <h1 className='text-2xl text-gray-500 font-bold font-poppins'>Welcome to Vior</h1>
                    <p className='text-sm text-gray-400 font-Robot'>Transform your space with timeless elegance and exceptional craftsmanship, as we curate furniture that tells stories and creates cherished memories.</p>
                </div>
                <div className='grid grid-cols-2 gap-y-5 gap-x-10'>
                    <div className='flex flex-row justify-center items-center w-full'>
                        <AnimatedInput type={'text'} name='Username' iconName='user' handleChange={handleChanges} values1={formValues.Username}/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>
                        <AnimatedInput type={'email'} name='Email' iconName='envelope' handleChange={handleChanges} values1={formValues.Email}/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>
                        <AnimatedInput type={'password'} name='Password' iconName='lock-alt' handleChange={handleChanges} values1={formValues.Password}/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>
                        <AnimatedInput type={'password'} name='ConfirmPassword' iconName='lock-alt' iconType='solid' handleChange={handleChanges} values1={formValues.ConfirmPassword}/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>
                        <AnimatedInput type={'text'} name='PhoneNumber' iconName='phone' handleChange={handleChanges} values1={formValues.PhoneNumber}/>
                    </div>
                    <div className='flex flex-row justify-center items-center w-full'>
                        <AnimatedInput type={'text'} name='Address' iconName='building-house' handleChange={handleChanges} values1={formValues.Address}/>
                    </div>

                    <div className='flex flex-col justify-center items-center col-span-2'>
                        <h1 id='message' className='text-sm h-6 text-red-500'></h1>
                        <Link to='/login'>
                            <button className='py-2 px-16 text-center max-w-[400px] bg-slate-300 rounded-md font-bold text-gray-500 hover:bg-slate-400 duration-300 transition-color hover:text-gray-700 ' onClick={(e) => handleSubmit(e)}>
                                Register
                            </button>
                        </Link>
                    </div>
                    <div className='text-xs text-gray-500 w-full text-center flex flex-col justify-center items-center col-span-2'>
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
                    <div className='text-xs text-gray-500 w-full text-center col-span-2'>
                        <h1>Already have an account? <a href="" className='font-bold underline' onClick={() => Nav('/login')}>Sign In now.</a></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;