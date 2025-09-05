'use client';

import { signIn } from "next-auth/react";
import { FaGooglePlus } from "react-icons/fa";

export default function SignInButton() {
    const handleLogin = async () => {
        await signIn('google', {
            callbackUrl: '/dashboard',
            prompt: 'login',
        });
    };

    return (
        <button
            onClick={handleLogin}
            className="flex flex-row justify-self-end text-center p-2 border-transparent hover:text-gray-500 hover:underline mr-8 mt-6"
        >
            <FaGooglePlus 
                className='text-5xl'
            />
            <h3 className='text-2xl font-medium text-center ml-2 pt-2'>
                Sign In
            </h3>
        </button>
    );
}