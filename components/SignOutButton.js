'use client';

import { signOut, useSession } from "next-auth/react";
import { FaGooglePlusG } from "react-icons/fa";

export default function SignOutButton() {
    const { data: session, status } = useSession();

    if (status === 'loading') return null;

    if (!session) return null;

    return (
        <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex flex-row justify-self-end text-center p-2 border-transparent hover:text-gray-500 hover:underline mt-4 mr-4"
        >
            <FaGooglePlusG
                className="text-5xl pb-3"
            />
            <h3 className='text-2xl font-medium text-center ml-2'>
                Sign Out
            </h3>
        </button>
    );
}