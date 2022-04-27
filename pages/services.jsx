import { data } from 'autoprefixer'
import axios from 'axios'
import React , {useEffect, useState} from 'react'
import Service from '../components/user_layout/components/Service'

import Layout from '../components/user_layout/Layout'
const services = () => {
    const [service, setService] = useState([])
    useEffect(()=>{
        axios.get('https://excell-on-backend.azurewebsites.net/api/services')
        .then(res => {
            console.log(res.data)
            setService(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);
    return (
        <Layout>
            <div className="py-16 md:px-12 bg-white dark:bg-gray-800">
                <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
                    <div className="lg:text-center mb-4 mt-7"><p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight dark:text-gray-200 text-gray-900 sm:text-4xl">We Provide Best Services
                    </p><p className="mt-4 max-w-2xl text-xl dark:text-gray-200 text-gray-800 lg:mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque, eaque ipsa quae ab illo inventore.</p></div>
                    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
                        {service.map((services) => (
                            <Service name={services.Name} image={services.Image} desc={services.Description}/>
                        ))}                                                     
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default services
