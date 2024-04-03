import { Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";



function PrivateRoute()
{
    //Read Token if it is still valid  - Token logic toepassen
    //Checking if the user is authenticated. If it is can travel to pages like Account;


    const [Token, setToken] = useState<string>('');
    const [Auth, setAuth] = useState<boolean>(false);

    //const auth = { 'token': false };



    useEffect(() =>
    {
        function loadDataOnlyOnce()
        {
            if (localStorage.getItem('token') != null) {
                setToken(String(localStorage.getItem('token')));
                const Decode = jwtDecode(String(localStorage.getItem('token')));
                console.log("dds");
                console.log(Auth);


                // if (new Date() > Decode.exp * 1000) {
                //     localStorage.removeItem('token');
                //     console.log('in2');
                //     return setAuth(false);
                // }
                return setAuth(true);

            }
        }

        loadDataOnlyOnce();

    }, [Auth]);

    return (
        //IF TRUE GO REQUESTED PAGE ELSE GO /HOME
        Auth ? <Outlet /> : <Navigate to='/Home' />


    );
};


export default PrivateRoute;

