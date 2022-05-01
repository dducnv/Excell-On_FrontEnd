import React, { useEffect, useState } from 'react'
import Service from '../components/user_layout/components/Service'
import serviceApi from './../api/serviceApi';

import Layout from '../components/user_layout/Layout'
const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        serviceApi.getAll()
            .then(data => {
                setServices(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const renderServices = () => {
        if (loading) {
            return (
                <>
                <div class="bg-gray-200 rounded-md w-full mb-2 h-96 p-3 overflow-hidden animate-pulse" />
                <div class="bg-gray-200 rounded-md w-full mb-2 h-96 p-3 overflow-hidden animate-pulse" />
                <div class="bg-gray-200 rounded-md w-full mb-2 h-96 p-3 overflow-hidden animate-pulse" />
                </>
            )
        }
        if (services.length === 0) {
            return <h1>No services</h1>
        }
        return <>
                {services.map((service, index) => (
                    <Service key={index} item={service} name={service.Name} image={service.Image} desc={service.Description} />
                ))}
              </>
    }

    return (
        <Layout>
            <div className="py-16 md:px-12 bg-white dark:bg-gray-800">
                <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="lg:text-center mb-4 mt-7"><p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl">We Provide Best Services
                    </p><p className="mt-4 max-w-2xl text-xl dark:text-gray-200 text-gray-800 lg:mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque, eaque ipsa quae ab illo inventore.</p></div>
                    <div className="mx-auto grid gap-3 lg:w-full lg:grid-cols-3">
                        {renderServices()}
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Services
