import React, { useState, useEffect, useRef } from "react";
import Layout from '../components/user_layout/Layout'
import { useCart } from "react-use-cart";
import CurrencyFormat from 'react-currency-format';
import orderApi from "../api/orderApi";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router'
import {
    PayPalScriptProvider, PayPalButtons
} from "@paypal/react-paypal-js";
const initialOptions = {
    "client-id": "AfGLbRweGTWUtjBVKy2qicCK94pTS5wyYVPLhHUVFp5n9siQ9MToXnxGxR2BlmCIc98g5x4E6BbWAVDJ",
    currency: "USD",
    intent: "capture",
};
function useRadioButtons(name) {
    const [value, setState] = useState(null);

    const handleChange = e => {
        setState(e.target.value);
    };
    const inputProps = {
        name,
        type: "radio",
        onChange: handleChange
    };
    return [value, inputProps];
}

const Checkout = () => {
    const cartTotalPrice = 0;
    const [checkPayment, checkPaymentInputProps] = useRadioButtons("full-payment");
    const [checked, setChecked] = useState("full-payment");
    const router = useRouter()
    if (!localStorage.getItem("user-token") || localStorage.getItem("user-token") == null) {
         router.push('/user/login')
    }
    const {
        isEmpty,
        totalUniqueItems,
        items,
        emptyCart
    } = useCart();
    items.forEach(element => {
        cartTotalPrice += element.GrandTotal;
    });
    const [isHavePayment, setHavePayment] = useState(cartTotalPrice);
    useEffect(() => {
        if (checkPayment == "deposit") {
            setChecked("deposit");
            setHavePayment(cartTotalPrice * 30 / 100);
        } else if (checkPayment == "full-payment") {
            setHavePayment(cartTotalPrice);
            setChecked("full-payment");
        } else {
            setHavePayment(cartTotalPrice);
        }
    }, [checkPayment]);
    const renderPaypal = () => {
        if (checked === "full-payment") {
            return (
                <>
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: isHavePayment,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const DataOrder = {
                                        "AccountID": "US0003",
                                        "Deposit": isHavePayment,
                                        "OrderDetails": items
                                    }
                                    if (details.status === "COMPLETED") {
                                        const result = orderApi.addOrder(DataOrder).then(res => {
                                            if (res.status == 200) {

                                                setTimeout(
                                                    () => {
                                                        router.push("/");
                                                    }, 1500
                                                );
                                                emptyCart();

                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }).catch(err => {
                                            return false;
                                        })
                                        toast.promise(
                                            result,
                                            {
                                                loading: 'Paying...',
                                                success: <b>Payment success!</b>,
                                                error: <b>Error System.</b>,
                                            }
                                        );
                                    } else {
                                        toast.error("Payment Error.")
                                    }
                                });
                            }}
                        />
                    </PayPalScriptProvider>
                </>

            )
        }
        if (checked === "deposit") {
            return (
                <>
                    <div />
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: cartTotalPrice * 30 / 100,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const DataOrder = {
                                        "AccountID": "US0003",
                                        "Deposit": isHavePayment,
                                        "OrderDetails": items
                                    }
                                    if (details.status === "COMPLETED") {
                                        const result = orderApi.addOrder(DataOrder).then(res => {
                                            if (res.status == 200) {

                                                setTimeout(
                                                    () => {
                                                        router.push("/");
                                                    }, 1500
                                                );
                                                emptyCart();

                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }).catch(err => {
                                            return false;
                                        })
                                        toast.promise(
                                            result,
                                            {
                                                loading: 'Paying...',
                                                success: <b>Payment success!</b>,
                                                error: <b>Error System.</b>,
                                            }
                                        );
                                    } else {
                                        toast.error("Payment Error.")
                                    }
                                });
                            }}
                        />
                    </PayPalScriptProvider>
                </>

            )
        }
    }
   
    return (
        <Layout>
            <Toaster />
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
                                        {items.map((item, index) => (
                                            <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                                    <img className="w-full hidden md:block" src={item.image} alt="dress" />
                                                    <img className="w-full md:hidden" src={item.image} alt="dress" />
                                                </div>
                                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                                        <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
                                                        <div className="flex justify-start items-start flex-col space-y-2">
                                                            <p className="text-sm leading-none text-gray-800">
                                                                <span className="text-gray-800 font-bold">Specification: </span> {item.SpecificationName}
                                                            </p>
                                                            <p className="text-sm leading-none text-gray-800">
                                                                <span className="text-gray-800 font-bold">Start Date: </span> {item.StartDate}
                                                            </p>
                                                            <p className="text-sm leading-none text-gray-800">
                                                                <span className="text-gray-800 font-bold">End Date: </span> {item.EndDate}
                                                            </p>
                                                            <p className="text-sm leading-none text-gray-800">
                                                                <span className="text-gray-800 font-bold">Grand Total: </span>  <CurrencyFormat value={item.GrandTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} /> / {item.TotalDay} days - {item.Qty} Employees
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between space-x-8 items-start w-full">
                                                        <p className="text-base xl:text-lg leading-6">
                                                            <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                                        </p>
                                                        <p className="text-base xl:text-lg leading-6 text-gray-800">{item.Qty} Emp</p>
                                                        <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800"><CurrencyFormat value={item.price * item.Qty} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="p-8 bg-gray-100 z-30 flex flex-col lg:w-full xl:w-3/5">
                                    <div className="mb-3">
                                        <h1 className="text-lg font-bold">Cart ({totalUniqueItems})</h1>
                                        <h2 className="text-base mb-2">Grand Total: <CurrencyFormat value={cartTotalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
                                        <fieldset>
                                            <div>
                                                <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                                                <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="full-payment"
                                                        name="checkpayment"
                                                        value="full-payment"
                                                        type="radio"
                                                        onClick={() => setChecked('full-payment')}
                                                        checked={checkPayment === "full-payment"}
                                                        {...checkPaymentInputProps}
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <div className="ml-3 text-sm ">
                                                        <label htmlFor="full-payment" className=" block font-medium text-gray-700">
                                                            Full Payment
                                                        </label>
                                                        <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="deposit"
                                                        name="checkpayment"
                                                        value="deposit"
                                                        onClick={() => setChecked('deposit')}
                                                        checked={checkPayment === "deposit"}
                                                        {...checkPaymentInputProps}
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <div className="ml-3 text-sm ">
                                                        <label htmlFor="deposit" className=" block font-medium text-gray-700">
                                                            30% deposit in advance
                                                        </label>
                                                        <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </fieldset>

                                    </div>
                                    <div className="mb-2">
                                        <h2 className="text-lg font-semibold">The money have to pay:  <CurrencyFormat value={isHavePayment} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
                                    </div>
                                    {renderPaypal()}
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