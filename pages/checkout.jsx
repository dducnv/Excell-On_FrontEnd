import React, { useState } from "react";
import Layout from '../components/user_layout/Layout'
import {PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js"

const initialOptions = {
    "client-id": "AfGLbRweGTWUtjBVKy2qicCK94pTS5wyYVPLhHUVFp5n9siQ9MToXnxGxR2BlmCIc98g5x4E6BbWAVDJ",
    currency: "USD",
    intent: "capture",
  };
const Checkout = () => {
    const countries = ["China", "Russia", "UK"];
    const [menu, setMenu] = useState(false);
    const [country, setCountry] = useState("United States");

    const changeText = (e) => {
        setMenu(false);
        setCountry(e.target.textContent);
    };
    return (
        <Layout>
            <div className="px-8 pt-10 2xl:container   bg-white dark:bg-gray-800">
                <div className="flex justify-center  items-center">
                    <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                        <div className="flex flex-col justify-start items-start w-full space-y-9">
                            <div className="flex justify-start flex-col items-start space-y-2">
                                <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                                    <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-sm leading-none">Back</p>
                                </button>

                            </div>

                            <div className="flex flex-col xl:flex-row justify-center items-start xl:justify-betweenxl:space-y-0 xl:space-x-6 w-full">
                                <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 sm:py-0  px-4 w-full">
                                    <div className="h-750 px-4 overflow-x-auto">
                                        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                                <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                                <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                            </div>
                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Size: </span> Small
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Color: </span> Light Blue
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between space-x-8 items-start w-full">
                                                    <p className="text-base xl:text-lg leading-6">
                                                        $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                                    </p>
                                                    <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                                <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                                <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                            </div>
                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Size: </span> Small
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Color: </span> Light Blue
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between space-x-8 items-start w-full">
                                                    <p className="text-base xl:text-lg leading-6">
                                                        $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                                    </p>
                                                    <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                                <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                                <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                                            </div>
                                            <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quaility Dress</h3>
                                                    <div className="flex justify-start items-start flex-col space-y-2">
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Style: </span> Italic Minimal Design
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Size: </span> Small
                                                        </p>
                                                        <p className="text-sm leading-none text-gray-800">
                                                            <span className="text-gray-300">Color: </span> Light Blue
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between space-x-8 items-start w-full">
                                                    <p className="text-base xl:text-lg leading-6">
                                                        $36.00 <span className="text-red-300 line-through"> $45.00</span>
                                                    </p>
                                                    <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                                                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                                    

                                    <PayPalScriptProvider options={initialOptions}>
                                        <PayPalButtons

                                            createOrder={(data,actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                value: 5,
                                                            },
                                                        },
                                                    ],
                                                });
                                            }}
                                            onApprove={(data,actions) => {
                                                return actions.order.capture().then((details) => {
                                                    const name = details.payer.name.given_name;
                                                    const statusCheckout = details.status
                                                    if (statusCheckout == 'COMPLETED') {
                                                        alert("thanh cong")
                                                    } else {
                                                        alert("that bai")
                                                    }
                                                    console.log(statusCheckout)
                                                });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Checkout;