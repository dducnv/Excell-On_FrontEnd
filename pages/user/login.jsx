
import React, {useState} from 'react';
import authApi from "../../api/authApi";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username,setUsername] = useState( '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password,setPassword] = useState('');

    const handleLogin = async (e) =>{
        e.preventDefault();
        if(username == null || username === ''){
            toast.error("Vui Lòng Nhập User Name.")
        }else if(password == null ||password === ''){
            toast.error("Vui Lòng Nhập Password.")
        }else {
            const userToken = await authApi.LoginApi(username,password);
            console.log(userToken)
        }


    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-200 flex justify-center items-center w-full">
                <form>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-900">Login</h1>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Username</label>

                                <input type="text" onChange={value => setUsername(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Password</label>
                                <input type="password" onChange={value => setPassword(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        <button onClick={handleLogin} className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login 