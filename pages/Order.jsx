import React from 'react'
import Layout from '../components/user_layout/Layout'

const Order = () => {
    return (
        <Layout>
            <div className="pt-24 pb-12 md:px-6 Text-black bg-gray-200 dark:text-gray-400 dark:bg-gray-700 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="flex justify-start item-start space-y-2 flex-col ">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  Text-black dark:text-gray-400">Order service</h1>
                    <p className="text-base font-medium leading-6 text-gray-600 dark:text-gray-400">Service online</p>
                </div>
                <div className="mt-10 flex flex-col  xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start bg-gray-100 dark:bg-gray-800 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg dark:text-gray-400     md:text-xl font-semibold leading-6 xl:leading-5 Text-black">Customer’s Cart</p>
                            <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                    <img className="w-full hidden md:block dark:brightness-75" src="https://image.shutterstock.com/z/stock-vector-vector-linear-illustration-dark-background-service-trend-578745856.jpg" alt="dress" />
                                    <img className="w-full md:hidden dark:brightness-75" src="https://image.shutterstock.com/z/stock-vector-vector-linear-illustration-dark-background-service-trend-578745856.jpg" alt="dress" />
                                </div>
                                <div className="border-b border-gray-400 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div className="w-full Text-black dark:text-gray-400 flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl  xl:text-2xl font-semibold leading-6">Premium Service 1</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm leading-none Text-black">
                                                <span className="Text-black font-semibold">Style: </span> Italic Minimal Design
                                            </p>
                                            <p className="text-sm leading-none Text-black">
                                                <span className="Text-black font-semibold">Size: </span> Small
                                            </p>
                                            <p className="text-sm leading-none Text-black">
                                                <span className="Text-black font-semibold">Color: </span> Light Blue
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base xl:text-lg leading-6">
                                        $150.00 <span className="text-red-500 dark:text-red-300 line-through"> $245.00</span>
                                        </p>
                                        <p className="text-base xl:text-lg leading-6 Text-black">03</p>
                                        <p className="text-base xl:text-lg font-semibold leading-6 Text-black">$450.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                                <div className="w-full md:w-40">
                                    <img className="w-full hidden md:block dark:brightness-75" src="https://image.shutterstock.com/z/stock-52vector-linear-illustration-for-presentations-on-blue-background-service-591187340.jpg" alt="dress" />
                                    <img className="w-full md:hidden dark:brightness-75" src="https://image.shutterstock.com/z/stock-vector-linear-illustration-for-presentations-on-blue-background-service-591187340.jpg" alt="dress" />
                                </div>
                                <div className="  flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 Text-black">Average Service </h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm leading-none Text-black">
                                                <span className="Text-black font-semibold">Style: </span> Italic Minimal Design
                                            </p>
                                            <p className="text-sm leading-none Text-black">
                                                <span className="Text-black font-semibold">Size: </span> Small
                                            </p>
                                            <p className="text-sm leading-none Text-black">
                                                <span className="Text-black font-semibold">Color: </span> Light Blue
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base xl:text-lg leading-6">
                                        $53.00 <span className="text-red-500 dark:text-red-300 line-through"> $94.00</span>
                                        </p>
                                        <p className="text-base xl:text-lg leading-6 Text-black">05</p>
                                        <p className="text-base xl:text-lg font-semibold leading-6 Text-black">$265.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6   ">
                                <h3 className="text-xl font-semibold leading-5 Text-black">Summary</h3>
                                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div className="flex justify-between  w-full">
                                        <p className="text-base leading-4 Text-black">Subtotal</p>
                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-400">$56.00</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 Text-black">
                                            Discount <span className="bg-gray-200 dark:bg-gray-500 p-1 text-xs font-medium leading-3  Text-black dark:text-gray-300">STUDENT</span>
                                        </p>
                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-400">-$28.00 (50%)</p>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base leading-4 Text-black">Shipping</p>
                                        <p className="text-base leading-4 text-gray-600 dark:text-gray-400">$8.00</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base font-semibold leading-4 Text-black ">Total</p>
                                    <p className="text-base font-semibold leading-4 text-gray-600 dark:text-gray-400">$36.00</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                <h3 className="text-xl font-semibold leading-5 Text-black">Shipping</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div className="w-8 h-8">
                                            <img className="w-full h-full dark:brightness-75	" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                        </div>
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="text-lg leading-6 font-semibold Text-black">
                                                DPD Delivery
                                                <br />
                                                <span className="font-normal">Delivery with 24 Hours</span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold leading-6 Text-black dark:text-gray-400">$8.00</p>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 dark:bg-gray-600 text-base font-medium leading-4 text-white dark:text-gray-400">View Carrier Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                        <h3 className="text-xl font-semibold leading-5 Text-black">Customer</h3>
                        <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                    <img className='w-10 h-10 dark:brightness-75' src="https://dttc.site/wp-content/uploads/2021/03/CNDT-1-1.jpg" alt="avatar" />
                                    <div className=" flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base font-semibold leading-4 text-left Text-black">BENJAMIN FRANKLIN</p>
                                        <p className="text-sm leading-5 text-gray-600">10 Previous Orders</p>
                                    </div>
                                </div>

                                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="cursor-pointer text-sm leading-5 Text-black">benjamin1706@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                                    <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                                        <p className="text-base font-semibold leading-4 text-center md:text-left Text-black">Shipping Address</p>
                                        <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600 dark:text-gray-400">180 North King Street, Northhampton MA 1060</p>
                                    </div>
                                    <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                                        <p className="text-base font-semibold leading-4 text-center md:text-left Text-black">Billing Address</p>
                                        <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600 dark:text-gray-400">180 North King Street, Northhampton MA 1060</p>
                                    </div>
                                </div>
                                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                    <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 dark:bg-gray-600  font-medium w-96 2xl:w-full text-base leading-4 Text-black">Edit Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Order