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