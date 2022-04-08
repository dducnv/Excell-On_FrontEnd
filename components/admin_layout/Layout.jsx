import React from 'react'
import Navbar from './Navbar';
import Slidebar from './Slidebar';

export const Layout = (props) => {
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