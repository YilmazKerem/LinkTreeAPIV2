import { Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";



const AuthenticatedRouteLogin = () =>
{
    //Read Token if it is still valid  - Token logic toepassen
    //Checking if the user is authenticated. If it is can travel to pages like Account;


    const [Token, GetToken] = useState<string>('');
    const [Auth, GetAuth] = useState<boolean>(false);

    //const auth = { 'token': false };


    function loadDataOnlyOnce()
    {


        if (localStorage.getItem('token') === null) {
            GetToken(String(localStorage.getItem('token')));

        }
        if (localStorage.getItem('token') != null) {
            GetAuth(true);
            const Decode = jwtDecode(String(localStorage.getItem('token')));
            console.log(new Date(Decode.exp * 1000));

            if (new Date() > Decode.exp * 1000) {
                console.log("Expired");
                localStorage.removeItem('token');

                GetAuth(false);

            }
        }
    }
    useEffect(() =>
    {
        loadDataOnlyOnce();
        console.log(Auth);

    });

    return (
        !Auth ? <Outlet /> : <Navigate to='/Account' />
    );
};


export default AuthenticatedRouteLogin;