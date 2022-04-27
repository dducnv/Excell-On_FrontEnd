import React from 'react'
import {
    ChartPieIcon, PresentationChartLineIcon,
    ShoppingBagIcon, ShoppingCartIcon, UserGroupIcon, UsersIcon, UserCircleIcon,
} from '@heroicons/react/outline'

import Link from 'next/link'

export const Slidebar = () => {
    return (
        <>
            <aside
                className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white dark:bg-gray-800 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        <a href="#" title="home">
                        </a>
                    </div>
                    <ul className="space-y-2">
                        <li>
                            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block text-center ">Cynthia J.
                                Watts</h5>
                            <span className="hidden text-gray-400 lg:block text-center">Admin</span>
                        </li>
                        <li>
                            <Link href={"/admin/dashboard"}>
                                <a href=""
                                   className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <ChartPieIcon
                                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                    <span className="ml-3">Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/service"}>
                                <a
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <ShoppingBagIcon
                                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                    <span className="ml-3">Service</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/role"}>
                                <a
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <PresentationChartLineIcon
                                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                    <span className="ml-3">Role</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/order"}>
                                <a
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <ShoppingCartIcon
                                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                    <span className="ml-3">Oder</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/customer"}>
                                <a
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <UserGroupIcon
                                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                    <span className="ml-3">Customer</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/employee"}>
                                <a
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <UsersIcon
                                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                    <span className="ml-3">Employee</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/user"}>
                                <a
                                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <UserCircleIcon
                                        className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                    <span className="ml-3">User</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        <span className="dark:text-slate-50 text-gray-800">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    )
}

export default Slidebar;
