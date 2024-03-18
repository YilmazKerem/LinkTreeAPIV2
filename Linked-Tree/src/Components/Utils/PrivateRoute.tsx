import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () =>
{
    //Read Token if it is still valid  - Token logic toepassen
    const auth = { 'token': false };

    return (
        auth.token ? <Outlet /> : <Navigate to='/Hawkeye' />
    );
};


export default PrivateRoute;