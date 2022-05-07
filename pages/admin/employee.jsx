import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../../components/admin_layout/Layout';
import userApi from '../../api/userApi';
import _ from 'lodash';
import {
    InputLabel,
    MenuItem,
    Button,
    FormControl,
    TextField,
    InputAdornment
} from '@mui/material';
import specificationsApi from '../../api/specificationsApi';
const Employee = () => {
    const [Avatar, setAvatar] = useState('')
    const [CitizenID, setCitizenID] = useState('')
    const [FullName, setFullName] = useState('')
    const [Gender, setGender] = useState('')
    const [userName, setUserName] = useState('')
    const [Email, setEmail] = useState('')
    const [Birthday, setBirthday] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [SpecificationID, setSpecificationID] = useState('')
    const [Specification, setSpecification] = useState([])
    const haudleSubmit = async (e) => {
        e.preventDefault();
        await userApi.addEmployee(Avatar,userName, FullName, Email, Birthday, Gender,PhoneNumber,CitizenID , SpecificationID).then(res => {
            if (res.status == 200) {

                toast.success(' Creat Successfully')
            }
        });
        console.log(userToken)
    }
    const [Employees, setEmployee] = useState([])

    useEffect(() => {
        userApi.getEmployee()
            .then(res => {
                setEmployee(res)
            })
            .catch(err => {
                console.log(err)
            })
            specificationsApi.getAll().then(res => {
                setSpecification(res)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <Layout>

            <Toaster />
            <div className="flex items-center justify-between w-full">
                <div className=" w-full rounded bg-white mt-4">
                    <div className=" bg-white border border-gray-200  mb-3 dark:bg-gray-800" >
                        <div className="w-7/12">
                            <form action="#" method="POST">
                                <div className="px-4 py-5 bg-white sm:p-6">

                                    <div className="px-4 py-3 bg-gray-50  sm:px-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">
                                                    Avatar
                                                </label>
                                                <input
                                                    type="text"
                                                    name="avatar"
                                                    id="avatar"
                                                    onChange={(e) => setAvatar(e.target.value)}
                                                    autoComplete="given-name"
                                                    className="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div className="col-span-12 grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="FullName" className="block text-sm font-medium text-gray-700">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="FullName"
                                                        id="FullName"
                                                        onChange={(e) => setFullName(e.target.value)}
                                                        autoComplete="given-name"
                                                        className="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                                                        User Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="userName"
                                                        onChange={(e) => setUserName(e.target.value)}
                                                        id="userName"
                                                        autoComplete="family-name"
                                                        className="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-12 grid grid-cols-6 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Gender
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        onChange={(e) => setGender(e.target.value)}
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value={1}>Male</option>
                                                        <option value={0}>Female</option>
                                                        <option value={2}>Order</option>
                                                    </select>
                                                </div>
                                                <div className="col-span-3 sm:col-span-4">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Specification
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        onChange={(e) => setSpecificationID(e.target.value)}
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        {_.map(Specification, (item, index) => (
                                                            <option key={index} value={item.ID}>{item.Name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-span-12 grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="text"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                                        id="last-name"
                                                        autoComplete="family-name"
                                                        className="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-12 grid grid-cols-6 gap-6">
                                                <div className="col-span-4 sm:col-span-4">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    CitizenID
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="first-name"
                                                        onChange={(e) => setCitizenID(e.target.value)}
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Birthday
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="first-name"
                                                        onChange={(e) => setBirthday(e.target.value)}
                                                        id="first-name"
                                                        autoComplete="given-name"
                                                        className="mt-1 px-3 py-2 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={haudleSubmit} type="button" className="py-2 px-4 mt-2 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            Submit
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className=" border-gray-200 dark:bg-gray-800" >
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
                                            Avatar
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            CitizenID
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
                                                {employee.CitizenID}
                                            </th>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Avatar}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.FullName}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Email}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Birthday}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.PhoneNumber}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Orders}
                                            </td>
                                            <td className="px-6 py-4 text-gray-900 dark:text-white">
                                                {employee.Specification}
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