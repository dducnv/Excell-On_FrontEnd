import React, {useState} from 'react';
import authApi from "../../api/authApi";
import toast, { Toaster } from 'react-hot-toast';

import { useRouter } from 'next/router'



const Register = () => {
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fullname,setFullName] = useState( '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [email,setEmail] = useState( '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username,setUserName] = useState( '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password,setPassword] = useState( '');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [address,setAddress] = useState( '');
    const [confirmpassword,setConfirmPassword] = useState( '');

    const handleRegister = async (e) =>{
        e.preventDefault();
        const userToken = await authApi.Register(fullname,email,username,address,password,confirmpassword);
        if(userToken.status === 200){
            toast.success("Register Successful!")
            router.push('/login')

        }else{
            toast.error("Register Failed!")
        }
    }
    if(localStorage.getItem("user-token") || localStorage.getItem("user-token") !== null){
         router.push('/')
    }


    return (
        <>
            <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-300 flex justify-center items-center w-full">
                <form>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-900">Register</h1>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Full Name</label>
                                <input type="text" onChange={value => setFullName(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                                <input type="text" onChange={value => setEmail(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">UserName</label>
                                <input type="text" onChange={value => setUserName(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Adderss</label>
                                <input type="text" onChange={value => setAddress(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Password</label>
                                <input type="password" onChange={value => setPassword(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Confirm Password</label>
                                <input type="password" onChange={value => setConfirmPassword(value.target.value) } className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        <button onClick={handleRegister} className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register