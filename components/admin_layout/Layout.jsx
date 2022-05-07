import React from 'react'
import Navbar from './Navbar';
import Slidebar from './Slidebar';
import { useRouter } from 'next/router'
export const Layout = (props) => {
    const router = useRouter();
    if(!localStorage.getItem("user-token") || localStorage.getItem("user-token") == null){
        router.push('/user/login')
    }
    return (
        <>
            <Slidebar />
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <Navbar />
                {props.children}
            </div>
        </>
    )
}

export default Layout;