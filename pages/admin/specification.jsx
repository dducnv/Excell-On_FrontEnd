import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import specificationsApi from '../../api/specificationsApi'
import Layout from '../../components/admin_layout/Layout';

const Specification = () => {
    const [Specifications, setSpecifications] = useState([])
    const [Name, setName] = useState('')
    const fetchData = () => {
        specificationsApi.getAll()
            .then(res => {
                setSpecifications(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchData()
    }, []);
    const addData = () => {
        specificationsApi.postSpecifications(Name)
            .then(res => {
                toast.success(' Creat Successfully')
                fetchData();
            })
            .catch(err => {
                console.log(err)
                toast.error("Creat fail")
            })
    }
    const deleteSpecifications = (id) => {
        console.log(id)
        specificationsApi.deleteSpecifications(id)
            .then(res => {
                toast.success('Delete Successfully')
                fetchData();
            })
            .catch(err => {
                console.log(err)
                toast.error("Delete fail")
            })
    }
    return (
        <Layout>
            <Toaster />
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row w-full rounded bg-white mt-4">
                    <div className="lg:w-2/5  border border-gray-200  dark:bg-gray-800" >
                        <div className="w-full ">
                            <form action="#" method="POST">
                                <div className="">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="relative sm:rounded-lg">
                                                <span className="text-gray-60 font-semibold">Specifications</span>
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    Name
                                                </label>
                                                <input type="text" onChange={Specification => setName(Specification.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Specification" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                        <button type="button" onClick={addData} className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
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
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Edit
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Specifications.map((specification,index) => (
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
                                                {specification.Name}
                                            </th>
                                            <td className="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button onClick={() => deleteSpecifications(specification.Id)} className="font-medium text-red-600 dark:red-blue-500 hover:underline">Delete</button>
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

export default Specification