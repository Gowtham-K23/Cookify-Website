import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import LogoImg from '../assets/cookify logo.png';
import AppleIcon from '../assets/apple-logo.png';
import GoogleIcon from '../assets/google.png';
import MicrosoftIcon from '../assets/microsoft.png';
import PhoneIcon from '../assets/telephone.png';
import BackgroundImg from '../assets/Food Img Yellow.avif';

export default function Auth()
{
    const [isSignUp, setIsSignUp] = useState(true);
    const navigate = useNavigate()

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4' style = {{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${BackgroundImg})`}}>
            {/* Logo & Title */}
            <div className='mb-6 text-center'>
                <img src = {LogoImg} alt = 'Cookify logo' className='w-72 sm:w-72 md:w-72 lg:w-80 h-auto object-contain mx-auto -mt-10 -mb-10' />
                <h1 className = 'text-3xl font-bold text-gray-800 mt-2'>Welcome to Cookify</h1>
            </div>

            {/* Card */}
            <div className='bg-white w-full max-w-md p-6 rounded-xl shadow-md space-y-6 mt-3'>
                {/* Heading */}
                <h2 className='text-2xl font-semibold text-gray-800'>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                </h2>

                {/* Sign Up Form */}
                {isSignUp ? (
                    <form className='space-y-4'>
                        <input type = 'text' placeholder = 'Username' className = 'w-full p-3 border rounded-lg' />
                        <input type = 'email' placeholder = 'Email address' className = 'w-full p-3 border rounded-lg' />
                        <input type = 'password' placeholder = 'Password' className = 'w-full p-3 border rounded-lg' />
                        <input type = 'password' placeholder = 'Re-enter Password' className = 'w-full p-3 border rounded-lg' />
                        <button type = 'submit' className='w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition' onClick={() => navigate('/leftover')}>Continue</button>
                        <p className='text-center text-sm'>
                            Already have an account?{' '}
                            <button type = 'button' className='text-blue-600 font-medium' onClick={() => setIsSignUp(false)}>Log in</button>
                        </p>
                    </form>
                ) : (
                    //Sign In form
                    <form className = 'space-y-4'>
                        <input type = 'email' placeholder = 'Email address' className='w-full p-3 border rounded-lg' />
                        <input type = 'password' placeholder = 'Password' className='w-full p-3 border rounded-lg ' />
                        <button type = 'submit' className='w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition' onClick={() => navigate('/leftover')}>Continue</button>
                        <p className='text-center text-sm'>
                            Don't have an account?{' '}
                            <button type = 'button' className = 'text-blue-600 font-medium' onClick={() => setIsSignUp(true)}>Sign Up</button>
                        </p>
                    </form>
                )}

                {/* Divider */}
                <div className='flex items-center justify-center space-x-2'>
                    <hr className = 'w-full border-gray-300' />
                    <span className = 'text-sm text-gray-400'>OR</span>
                    <hr className = 'w-full border-gray-300' />
                </div>

                {/* Social Logins */}
                <div className='space-y-3'>
                    <button className='w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-50 transition' onClick={() => navigate('/leftover')}>
                        Continue with Phone
                        <img src = {PhoneIcon} alt = 'phone icon' className='w-10 h-10 ml-12'/>
                    </button>
                    <button className='w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-50 transition' onClick={() => navigate('/leftover')}>
                        Continue with Google
                        <img src = {GoogleIcon} alt = 'phone icon' className='w-10 h-10 ml-10'/>
                    </button>
                    <button className='w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-50 transition' onClick={() => navigate('/leftover')}>
                        Continue with Apple
                        <img src = {AppleIcon} alt = 'phone icon' className='w-10 h-10 ml-12'/>
                    </button>
                    <button className='w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-50 transition' onClick={() => navigate('/leftover')}>
                        Continue with Microsoft
                        <img src = {MicrosoftIcon} alt = 'phone icon' className='w-10 h-10 ml-5'/>
                    </button>
                </div>
            </div>

            {/* Terms anda Conditions */}
                <div className = 'flex mt-5 mb-10 justify-center items-center'>
                    <button type = 'button' className=''>Terms and Conditions</button>
                    <p className='mr-5 ml-5 '> | </p>
                    <button type = 'button' className=''>Privacy Policy</button>
                </div>
                
        </div>
    );
}