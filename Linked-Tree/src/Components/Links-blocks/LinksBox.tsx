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
export default function LinksBox({ linkedTreeInfo, url, urldescription }: Getinfo)
{
    return (
        <div className={`w-80 sm:w-96 mx-auto bg-red-300 text-center text-xl font-bold py-3 shadow-custoum
        border-4 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}>

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


