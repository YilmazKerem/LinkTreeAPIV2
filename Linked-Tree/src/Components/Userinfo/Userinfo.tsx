import React from 'react';
import { Userinfo } from '../../Api-Interfaces/Interface';


interface GetUserinfo
{
  userInformation: Userinfo;

}



export default function UserinfoBox({ userInformation }: GetUserinfo)
{
  return (
    <>
      <div className=' w-2/4   m-auto pt-5  text-black'>
        <div className=' w-32 h-32 m-auto'>

          <img className='rounded-full border-4  border-white ' src="https://www.vintauto.com/wp-content/uploads/2018/07/BMW-e30-m3.jpg" alt="" />
        </div>
        <div className='m-auto text-center mt-3 text-2xl font-bold'>
          <h2>{userInformation.name}</h2>

        </div>
        <div className='m-auto text-center text-base mb-3'>
          {userInformation.linkTreeDetail.description}
        </div>

      </div>
    </>
  );
}
