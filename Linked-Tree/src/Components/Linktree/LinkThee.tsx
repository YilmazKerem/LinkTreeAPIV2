import React, { useEffect, useState } from 'react';
import UserinfoBox from '../Userinfo/Userinfo';
import LinksBox from '../Links-blocks/LinksBox';
import { Userinfo } from '../../Api-Interfaces/Interface';
import { useParams } from 'react-router-dom';

//'http://localhost:5275/api/User/1'

export default function LinkThee()
{
    const { uid } = useParams();

    const [Userinfo, setUserInfo] = useState<Userinfo>();
    const URL = 'http://localhost:5262/api/User/';
    useEffect(() =>
    {
        if (Userinfo == null) {
            fetch(`${ URL }${ uid }`).then(response =>
            {
                //console.log(response.json);
                return response.json();

            }).then(data =>
            {
                console.log(data);
                setUserInfo(data);

                //console.log(data);

            }).catch(err =>
            {
                console.log(err);
                console.log("No User found");
            });
        }
    });


    return (
        <>

            <div>
                <div>
                    {Userinfo == null ? (
                        <h1>  Data is still loading  </h1>
                    ) : (
                        <div >
                            <div className=''><UserinfoBox userInformation={Userinfo} />
                            </div>

                            <div className='flex flex-col gap-10'>
                                {Userinfo != null && Userinfo.linkTreeDetail.urls2.map((a, index) => (
                                    <LinksBox key={index} linkedTreeInfo={Userinfo.linkTreeDetail} url={a.url} urldescription={a.urldescription} />
                                ))

                                }
                            </div>
                        </div>

                    )}
                </div>
            </div>


        </>
    );
}


