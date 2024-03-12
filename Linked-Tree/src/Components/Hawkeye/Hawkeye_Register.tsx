import React, { useState } from 'react';



const HawkRegister: React.FC = () =>
{
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [CheckPassword, setCheckPassword] = useState<string>('');
    const [Email, setEmail] = useState<string>('');
    const [SamePassword, setSamePassword] = useState<boolean>(false);


    const handleRegister = (event: React.FormEvent<HTMLInputElement>) =>
    {
        //Send request to backend.
        //First Check of the Password are the same
        event.preventDefault();

        if (password != CheckPassword) {
            setSamePassword(true);
        }
        else (
            setSamePassword(false)
        );

    };

    return (
        <div className="flex justify-center items-center h-screen bg-purple-200">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h2 className="text-3xl font-semibold mb-4 text-center text-purple-500">Create account</h2>
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
                        {SamePassword && <label htmlFor="text" className='font-bold text-red-500' >Given passwords are not the same</label>}
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