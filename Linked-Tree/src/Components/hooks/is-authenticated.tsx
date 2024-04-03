import { useStore } from '@nanostores/react';
import { isExpired } from 'react-jwt';
import { tokenStore } from '../Utils/token-store';


export function IsAuthenticated()
{
    const token = useStore(tokenStore);

    if (token) {
        return !isExpired(token);
    }
    return false;

}


