import React from 'react'

import Layout from '../components/user_layout/Layout'
const services = () => {
    return (
        <Layout>
            <div className="py-16 md:px-12 bg-white dark:bg-gray-800">
                <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="lg:text-center mb-4 mt-7"><p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl">We Provide Best Services
                    </p><p className="mt-4 max-w-2xl text-xl dark:text-gray-200 text-gray-800 lg:mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque, eaque ipsa quae ab illo inventore.</p></div>
                    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">

                        <div className="bg-white dark:bg-gray-600 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold dark:text-gray-200 text-gray-800">In-bounds - Service
                                </h3>
                                <p className="mb-6 dark:text-gray-200 text-gray-800">The In-bound service is a service in which one can only recelve the calls from the customers. These call centers provide 24 hours
                                    service to all customers. The primary goai of these call centers are to recelve product orders, help customers both technically and
                                    non-technically, to find dealer location</p>
                                <a href="#" className="block font-medium text-indigo-600 dark:text-indigo-400">Know more</a>
                            </div>
                            <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
                        </div>
                        <div className="bg-white dark:bg-gray-600 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold dark:text-gray-200 text-gray-800">Out-bound - Service
                                </h3>
                                <p className="mb-6 dark:text-gray-200 text-gray-800">The Out-bound service is a service in which the employees of Excell-on call the customers for product promotions, for checking
                                    with the customer satisfaction on the services they provide. and for the telemarketing. Outbound Call Centers depends on the
                                    technological solutions, extensive experience, quality assurance programs and commitment to customer service excellence
                                    that further ensures maximum results from the direct marketing efforts for its success</p>
                                <a href="#" className="block font-medium text-indigo-600 dark:text-indigo-400">Know more</a>
                            </div>
                            <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" className="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600" />
                        </div>
                        <div className="bg-white dark:bg-gray-600 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                            <div className="mb-12 space-y-4">
                                <h3 className="text-2xl font-semibold dark:text-gray-200 text-gray-800">Tele Marketing - Service
                                </h3>
                                <p className="mb-6 dark:text-gray-200 text-gray-800">The Telo Marketing service is a service which is purely for the promotion of marketing or sales of the products and services
                                </p>
                                <a href="#" className="block font-medium text-indigo-600 dark:text-indigo-400">Know more</a>
                            </div>
                            <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" className="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default services
