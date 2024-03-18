import { useNavigate } from "react-router-dom";

export default function HawkRegisterComplete()
{
    const navigate = useNavigate();

    const NavigateToLogin = () =>
    {
        setTimeout(() =>
        {

            navigate('/Hawkeye');



        }, );
    };


    return (
        <div className="flex justify-center items-center h-screen bg-purple-200">
            <div className="bg-white p-8 rounded-md shadow-md w-auto">
                <h2 className="text-3xl font-semibold mb-4 text-center text-purple-500">Account has been created</h2>

                <button
                    type="button"
                    className=" w-44 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={NavigateToLogin}

                >
                    Login
                </button>
            </div>
        </div >
    );
}


