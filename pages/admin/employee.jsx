import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../../components/admin_layout/Layout';
import userApi from '../../api/userApi';
import _ from 'lodash';

const Employee = () => {
    const [Avatar, setAvatar] = useState('')
    const [CitizenID, setCitizenID] = useState('')
    const [FullName, setFullName] = useState('')
    const [Email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [Orders, setOrders] = useState('')
    const [Specification, setSpecification] = useState('')
    const haudleSubmit = async (e) => {
        e.preventDefault();
        const userToken = await userApi.addEmployee(Avatar, CitizenID, FullName, Email, Birthday, PhoneNumber, Orders, Specification);
        console.log(userToken)
    }
    const [Employees, setEmployee] = useState([])

    useEffect(() => {
        userApi.getEmployee()
            .then(res => {
                setEmployee(res)
                toast.success(' Creat Successfully')
            })
            .catch(err => {
                console.log(err)
                toast.error("Creat fail")
            })
    }, []);
    return (
        <Layout>

            <Toaster />
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col lg:flex-row w-full rounded bg-white mt-4">
                    <div className="lg:w-2/5 bg-gray-500 border border-gray-200  dark:bg-gray-800" >
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
                                                    Avatar
                                                </label>
                                                <input type="text" onChange={Avatar => setAvatar(Avatar.target.value)}
                                                    name="name"
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Avatar" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    CitizenID
                                                </label>
                                                <input type="id" onChange={CitizenID => setCitizenID(CitizenID.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="CitizenID" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    FullName
                                                </label>
                                                <input type="fullname" onChange={FullName => setFullName(FullName.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="FullName" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    Email
                                                </label>
                                                <input type="email" onChange={Email => setEmail(Email.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    Birthday
                                                </label>
                                                <input type="birthday" onChange={Birthday => setBirthday(Birthday.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Birthday" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    PhoneNumber
                                                </label>
                                                <input type="phonenumber" onChange={PhoneNumber => setPhoneNumber(PhoneNumber.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="PhoneNumber" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    Orders
                                                </label>
                                                <input type="text" onChange={Orders => setOrders(Orders.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Orders" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 m-2">
                                                    Specification
                                                </label>
                                                <input type="text" onChange={Specification => setSpecification(Specification.target.value)}
                                                    id="first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-800 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 
                                                    shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Specification" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                        <button onClick={haudleSubmit} type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Submit2
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
                                            CitizenID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Avatar
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            FullName
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Birthday
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            PhoneNumber
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Orders
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Specification
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {_.map(Employees, (employee, index) => (
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
                                                {employee.CitizenID ?
                                                    employee.CitizenID
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </th>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Avatar ?
                                                    employee.Avatar
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.FullName ?
                                                    employee.FullName
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Email ?
                                                    employee.Email
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Birthday ?
                                                    employee.Birthday
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.PhoneNumber ?
                                                    employee.PhoneNumber
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Orders ?
                                                    employee.Orders
                                                    :
                                                    <h1> Null</h1>
                                                }
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Specification ?
                                                    employee.Specification
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

export default Employee;