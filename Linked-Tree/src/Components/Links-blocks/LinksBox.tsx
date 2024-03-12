import React from 'react';
import './LinksBox.css';
import redirect from '../../assets/redirect.svg';
import { LinkTreeDetail } from '../../Api-Interfaces/Interface';



interface Getinfo
{
    linkedTreeInfo: LinkTreeDetail;
    url: string;
    urldescription: string;
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function     LinksBox({ linkedTreeInfo, url, urldescription }: Getinfo)
{
    return (
        <div className='text-yellow-950 w-2/4 mx-auto h-17 rounded-full border-2 border-white hover:bg-yellow-50 duration-200 mt-3 hover:border-black'>

            <a href={url} target='_blanc'>
                <div className=' p-5 flex '>

                    <div className='p-1     '>
                        <p className='font-bold'> ICON</p>
                    </div>

                    <div className=' p-1  flex-1 '>
                        < p className="font-bold">
                            {urldescription}
                        </p >
                    </div>

                    <div className='p-1 '>
                        <img className=' w-6 h-6' src={redirect} alt="" />
                    </div>
                </div>
            </a>


        </div>
    );
}


