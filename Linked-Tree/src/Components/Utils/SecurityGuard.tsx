import { Navigate } from "react-router-dom";
import { IsAuthenticated } from "../hooks/is-authenticated";

interface RouteGuardProps
{
    component: React.ReactElement;
    routeTo: string;
    isLoggedIn: boolean;
}

function RouteGuard({ component, routeTo, isLoggedIn }: RouteGuardProps)
{


    //Checken voor logica.

    if (isLoggedIn) {
        return (component);
    } else {
        return <Navigate to={routeTo} />;
    }
}

export default RouteGuard;