import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userApi from '../../api/userApi';
import Layout from '../../components/admin_layout/Layout';
import _ from 'lodash';

export const Users = () => {
    const [Users, setUser] = useState([])

    useEffect(() => {
        userApi.getAll().then(res => {
            setUser(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <Layout>
            <div className="w-full px-4 mx-auto">
                <div className="relative overflow-x-auto  sm:rounded-lg">
                    <div>
                        <span className="text-gray-600 text-lg font-semibold">User</span>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative mt-1">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="table-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search for items" />
                                </div>
                            </div>
                            <button type="button"
                                className="py-2 px-4 w-40 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Add
                            </button>
                        </div>


                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Avatar
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    FullName
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Birthday
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PhoneNumber
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {_.map(Users,(user, index)=> (
                                <tr key={index} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {user.Avatar ?
                                            <img src={user.Avatar} alt={user.FullName} />
                                            :
                                            <h1> Null</h1>
                                        }
                                    </th>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                                        {user.FullName}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                                        {user.Gender}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                                        {user.Birthday ?
                                            user.Birthday
                                            :
                                            <h1> Null</h1>
                                        }
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                                        {user.Email}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 dark:text-white">
                                        {user.PhoneNumber ?
                                            user.PhoneNumber
                                            :
                                            <h1> Null</h1>
                                        }
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export default Users;