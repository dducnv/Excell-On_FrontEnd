import React, { useEffect, useState } from 'react'
import Layout from '../../components/admin_layout/Layout';
import orderApi from '../../api/orderApi';
import _ from 'lodash';
import toast, { Toaster } from 'react-hot-toast';
import ModalComponent from '../../components/ModalComponent';
import Link from 'next/link';
export const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [open, setOpen] = useState(false);
    const fetchDataOrder = async () => {
        setLoading(true);
        try {
            const data = await orderApi.getAll();
            setOrders(data);
            console.log(data);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }
    useEffect(() => {
        fetchDataOrder();
    }, [])

    const confirmOrder = async (id) => {
        await orderApi.ConfirmOrder(id).then(res => {
            if (res.status == 200) {
                toast.success(' Confirm Successfuly')
                fetchDataOrder();
            }
        });
    }

    const renderOrdersPending = () => {
        return _.filter(orders, { Status: 1 }).map((order, index) => (
            <tr key={index}>
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Id}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.AccountID}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Account != null && order.Account.FullName}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Deposit}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.GrandTotal}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Status}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.CreatedAt}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.UpdateAt}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                    <button
                        onClick={() => confirmOrder(order.Id)}
                        type="button"
                        className="bg-orange-400 py-2 px-3 border border-gray-300 text-white rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-orange-500"
                    >
                        Confirm
                    </button>
                </td>
            </tr>
        ))
    }
    const renderOrdersProcessing = () => {
        return _.filter(orders, { Status: 0 }).map((order, index) => (
            <tr key={index}>
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Id}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.AccountID}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Account != null && order.Account.FullName}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Deposit}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.GrandTotal}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.Status}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.CreatedAt}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">{order.UpdateAt}</td>
                <td className="px-6 py-4 text-gray-900 dark:text-white">
                    <Link href={`/admin/order-details/${order.Id}`}>
                        <a>
                            Details
                        </a>
                    </Link>
                </td>
            </tr>
        ))
    }
    return (
        <Layout>
            <Toaster />
            <div className="w-full px-4 mx-auto">
                <div className="relative overflow-x-auto  sm:rounded-lg">
                    <div>
                        <span className="text-gray-600 text-lg font-semibold">Order</span>
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
                        </div>


                    </div>
                    <div className="mb-6 border shadow p-2">
                        <h1 className="text-lg font-bold mb-2">Pending approval</h1>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Account ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Customer Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Deposit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        GrandTotal
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Updated At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Confirm Order
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderOrdersPending()}
                            </tbody>
                        </table>
                    </div>

                    <div className="border shadow p-2">
                        <h1 className="text-lg font-bold mb-2">Processing</h1>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all-search" type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Account ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Customer Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Deposit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        GrandTotal
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Created At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Updated At
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Details
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {renderOrdersProcessing()}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default Order;