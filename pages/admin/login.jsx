import React,{useState} from 'react';
import authApi from "../../api/authApi";


const Login = () => {
    const [username,setUserName] = useState('')
    const [password,setUserPassword] = useState('')
    const haudleSubmit = async (e) =>{
        e.preventDefault();
        const userToken = await authApi.LoginApi(username,password);
        console.log(userToken)
    }
    return (
        <div>
            <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-200 flex justify-center items-center w-full">
                <form>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-900">Login</h1>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Username</label>
                                <input type="text" onChange={username => setUserName(username.target.value)} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Password</label>
                                <input type="password" onChange={password => setUserPassword(password.target.value)} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        <button onClick={haudleSubmit } className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;


