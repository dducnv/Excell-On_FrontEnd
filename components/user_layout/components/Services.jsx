import React from 'react'

const Services = () => {
    return (
        <div className='dark:bg-gray-800 container px-6'>
            <div className="xl:mx-auto container dark:bg-gray-800 py-20 2xl:px-0 px-6">
                <div className="lg:flex items-center justify-between">
                    <div className=" lg:w-1/2 w-full">
                        <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 bg-white dark:bg-gray-800">
                            Our services
                        </h1>
                        <p role="contentinfo" className="text-base leading-5 mt-5 bg-white dark:bg-gray-800">
                            We always give our users the best service !
                        </p>
                        <div className="w-56">
                            <div className=" mt-10">
                                <button className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6">
                                    See more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
                        <div role="listitem" className="bg-white dark:bg-gray-500 cursor-pointer shadow rounded-lg p-8 relative z-30">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 dark:text-gray-100 text-gray-800">In-bounds-Service
                                </h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800"></p>
                                <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 dark:text-gray-100 text-gray-800">4500$</p>
                            </div>
                            <p className=" text-base leading-6 mt-4 dark:text-gray-200 text-gray-800">The In-bound service is a service in which one can only receive the calls from the customers. These call centers provide 24 hours
                                service to all customers. The primary goal of these call centers are to receive product orders, help customers both technically and
                                non-technically, to find dealer location</p>
                        </div>
                        <div role="listitem" className="bg-white dark:bg-gray-500 cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                            <div className="w-full p-8">
                                <div className="md:flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold leading-6 dark:text-gray-100 text-gray-800">Out-bound-Service
                                    </h2>
                                    <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                                        <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 dark:text-gray-100 text-gray-800">6000$</p>
                                    </p>
                                </div>
                                <p className=" text-base leading-6 mt-4 dark:text-gray-200 text-gray-800">The Out-bound service is a service in which the employees of Excell-on call the customers for product promotions, for checking
                                    with the customer satisfaction on the services they provide, and for the telemarketing. Outbound Call Centers depends on the
                                    technological solutions, extensive experience, quality assurance programns and commitment to customer service excellence
                                    that further ensures maximum results from the direct marketing efforts for its success</p>
                            </div>
                        </div>
                        <div role="listitem" className="bg-white dark:bg-gray-500 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                            <div className="md:flex items-center justify-between">
                                <h2 className="text-2xl font-semibold leading-6 dark:text-gray-100 text-gray-800">TeleMarketing-Service</h2>
                                <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">
                                    <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 dark:text-gray-200 text-gray-800">5500$</p>
                                </p>
                            </div>
                            <p className="text-base leading-6 mt-4 dark:text-gray-200 text-gray-800">The Tele Marketing service is a service which is purely for the promotion of marketing or sales of the products and services
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services


