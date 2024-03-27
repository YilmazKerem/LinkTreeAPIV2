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
      <div className=' m-auto pt-5  text-black max-w-2xl mx-auto flex flex-col gap-5'>
        <div className='h-48 w-48 mx-auto'>
          <div className='aspect-w-1 aspect-h-1'>

            <img className='rounded-full border-4 object-cover  object-center  border-white ' src="https://www.vintauto.com/wp-content/uploads/2018/07/BMW-e30-m3.jpg" alt="" />
          </div>
        </div>
        <div className='m-auto text-center p-3 '>
          <h2 className='font-bold text-3xl '>{userInformation.name}</h2>

          <div className=' text-2xl '>
            {userInformation.linkTreeDetail.description}
          </div>
        </div>

      </div>
    </>
  );
}
