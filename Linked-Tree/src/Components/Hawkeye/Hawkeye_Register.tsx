import React, { useState } from 'react';
import { json } from 'react-router-dom';
import { IUserRegisterDTO } from '../../Api-Interfaces/Interface';
import { useNavigate } from 'react-router-dom';


const HawkRegister: React.FC = () =>
{
    const [username, setUsername] = useState<string>('');
    const [Name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [CheckPassword, setCheckPassword] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
    const [WrongCredentials, setWrongCredentials] = useState<boolean>(false);
    const [ButtonEnabled, setButtonEnabled] = useState<boolean>(true);


    //const [Userinfo, setUserInfo] = useState<Userinfo>();
    const URL = 'http://localhost:5262/api/User/';
    const APICALL = 'Register';
    const navigate = useNavigate();

    const handleRegister = (event: React.FormEvent<HTMLInputElement>) =>
    {
        event.preventDefault();

        const UserRegisterData: IUserRegisterDTO = {
            "userName": username,
            "name": Name,
            "password": password,
            "CheckPassword": CheckPassword,
            "email": Email
        };
        //disabled={ButtonEnabled}


        fetch(`${ URL }${ APICALL }`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UserRegisterData),
        }).then(e => e.json()).then(response =>
        {
            setButtonEnabled(false);
            if (response.status == "400" || response.statusCode == "400") {
                setWrongCredentials(true);
                setButtonEnabled(true);

            }
            else {
                setWrongCredentials(false);

                navigate('/Completed');
                setButtonEnabled(true);
            }


        }).catch((err) =>
        {
            console.log("ERROR" + err);
        }).finally(() =>
        {

            //Return to created user page

        });

    };


    return (
        <div className="flex justify-center items-center h-screen bg-purple-200">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h2 className="text-3xl font-semibold mb-4 text-center text-purple-500">Create account</h2>
                {WrongCredentials && <label htmlFor="text" className='font-bold text-red-500' >The given credentials are incorrect</label>}

                <form className="space-y-4" onSubmit={handleRegister}>

                    <div>
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            className=" placeholder:pl-1 p-2 bg-gray-200 mt-1 block w-full  border-gray-300 shadow-sm
                             focus:border-purple-400 focus:ring focus:ring-purple-400  focus:ring-opacity-50 
                             "
                            placeholder="Enter your username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="Name"
                            className=" placeholder:pl-1 p-2 bg-gray-200 mt-1 block w-full  border-gray-300 shadow-sm
                             focus:border-purple-400 focus:ring focus:ring-purple-400  focus:ring-opacity-50 
                             "
                            placeholder="Enter your Name"
                            required
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="Email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="Email"
                            className=" placeholder:pl-1 p-2 bg-gray-200 mt-1 block w-full
                             border-gray-300 shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400  focus:ring-opacity-50"
                            placeholder="Example@Example.com"
                            required
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="placeholder:pl-1 p-2 bg-gray-200 mt-1 block w-full  border-gray-300 shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400  focus:ring-opacity-50"
                            placeholder="Enter your password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="CheckPassword"
                            className="placeholder:pl-1 p-2 bg-gray-200 mt-1 block w-full border-gray-300 shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400  focus:ring-opacity-50"
                            placeholder="Enter your password"
                            value={CheckPassword}
                            required
                            onChange={(e) => setCheckPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"


                    //onClick={handleRegister}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HawkRegister;

