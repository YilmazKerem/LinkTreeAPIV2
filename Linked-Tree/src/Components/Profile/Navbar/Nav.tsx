import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function ProfileNavigation()
{
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
                </div>
            </div>
            <Outlet />
        </>
    );
}
