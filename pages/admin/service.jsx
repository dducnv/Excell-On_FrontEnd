import React, { useEffect, useState } from 'react'
import serviceApi from '../../api/serviceApi';
import Layout from '../../components/admin_layout/Layout';
import _ from 'lodash';

const Service = () => {
    const [services, setService] = useState([])

    useEffect(() => {
        serviceApi.getAll()
            .then(res => {
                setService(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <Layout>
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row w-full rounded bg-white mt-4">
                    <div className="lg:w-2/5 border-gray-200  dark:bg-gray-800" >
                        <div className="w-full ">
                            <form action="#" method="POST">
                                <div className="">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="relative overflow-x-auto  sm:rounded-lg">
                                                <span className="text-gray-600 text-lg font-semibold">Sevice</span>
                                            </div>
                                            <div className="col-span-6 ">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 m-2">
                                                    Name
                                                </label>
                                                <input type="text"
                                                    name="name"
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="First name" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    Price
                                                </label>
                                                <input type="number"
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Price" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    Description
                                                </label>
                                                <textarea type="text"
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Description" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                        <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                                </path>
                                            </svg>
                                            Submit
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className=" lg:w-3/5 border-gray-200 dark:bg-gray-800" >
                        <div className="w-full">
                            <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            NAME
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            CreatedAt
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            UpdateAt
                                        </th>

                                        <th scope="col" className="px-6 py-3">
                                            <span>Edit</span>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <span>Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {_.map(services, (service, index) => (
                                        <tr
                                            key={index}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                </div>
                                            </td>

                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {service.Id}
                                            </th>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {service.Avatar ?
                                                    <img src={service.Image} alt={service.Name} />
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {service.Name ?
                                                    service.Name
                                                    :
                                                    <h1> Null</h1>
                                                }

                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {service.Price ?
                                                    service.Price
                                                    :
                                                    <h1> Null</h1>
                                                }                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white ">
                                                <div className=" text-align ">
                                                    <i>
                                                    {service.Description ?
                                                        service.Description
                                                        :
                                                        <h1> Null</h1>
                                                    }
                                                    </i>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {service.CreatedAt ?
                                                    service.CreatedAt
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {service.UpdateAt ?
                                                    service.UpdateAt
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-red-600 dark:red-blue-500 hover:underline">Delete</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Service;