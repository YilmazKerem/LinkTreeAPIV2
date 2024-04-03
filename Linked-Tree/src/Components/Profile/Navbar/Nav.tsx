import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function ProfileNavigation()
{
    const navigate = useNavigate();

    function UserLogout()
    {

        localStorage.removeItem('token');
        navigate(0);

    }


    return (
        <>
            <div className='pt-5'>
                <div
                    className='w-auto bg-white h-16 rounded-full ml-5 mr-5 flex'>
                    <div className='flex items-center pl-6'>
                        <Link className='bg-white px-6 py-2 rounded-full 
                          border-pink-900 border-solid 
                         border-2 justify-center items-center flex'
                            to="CreatUrl">Links</Link>
                    </div>
                    <div className='flex items-center pl-6'>
                        <Link className='bg-white  px-6 py-2 rounded-full
                          border-pink-900 border-solid border-2 justify-center items-center flex'
                            to="CreatUrl">Linktree</Link>
                    </div>

                    <button className='bg-gray-600 px-6 py-2 rounded-full' onClick={UserLogout}>Logout</button>
                </div>
            </div>
            <Outlet />
        </>
    );
}
