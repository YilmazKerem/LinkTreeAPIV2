import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IUserLoginDTO } from '../../Api-Interfaces/Interface';
import { useNavigate } from "react-router-dom";
import { tokenStore } from '../Utils/token-store';



const Hawkeye = () =>
{
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [WrongCredentials, setWrongCredentials] = useState<boolean>(false);
    const [ShowToken, setShowToken] = useState<boolean>(false);
    const [Token, setToken] = useState<boolean>(true);

    const Navigate = useNavigate();

    const URL = 'http://localhost:5262/api/User/';
    const APICALL = 'Login';




    const handleLogin = (event: React.FormEvent<HTMLInputElement>) =>
    {

        event.preventDefault();

        const UserLOginDetail: IUserLoginDTO = {
            "userName": username,
            "password": password
        };


        fetch(`${ URL }${ APICALL }`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UserLOginDetail),
        }).then(e => e.json()).then(response =>
        {
            if (response.status == "400" || response.statusCode == "400") {
                setWrongCredentials(true);
            }
            else {
                setShowToken(true);
                setWrongCredentials(false);
                tokenStore.set(response.token);

                Navigate('/account');
            }


        });

    };

    return (
        <div className="flex justify-center items-center h-screen bg-purple-200">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h2 className="text-3xl font-semibold mb-4 text-center text-purple-500">Hawkeye</h2>
                {WrongCredentials && <label htmlFor="text" className='font-bold text-red-500' >The given credentials are incorrect</label>}
                {ShowToken && <label htmlFor="text" className='font-bold text-red-500' >{Token}</label>}

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            className=" placeholder:pl-1 p-2 bg-gray-200 mt-1 block w-full  border-gray-300 shadow-sm
                             focus:border-purple-400 focus:ring focus:ring-purple-400  focus:ring-opacity-50 "
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className=" placeholder:pl-1 p-2 bg-gray-200 mt-1 block w-full  border-gray-300 shadow-sm
                             focus:border-purple-400 focus:ring focus:ring-purple-400  focus:ring-opacity-50 "
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <label htmlFor="">Click </label>
                    <Link to="/Hawkregister" className='font-bold hover:text-purple-700 hover:font-bold '>
                        here
                    </Link>
                    <label htmlFor=""> if you don't have an account </label>
                </form>
            </div>
        </div>
    );
};

export default Hawkeye;
