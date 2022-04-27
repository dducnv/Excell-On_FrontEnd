import React from 'react'

const Service = (props) => {
    return (
        <>
            <div className="bg-white dark:bg-gray-600 rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
                <div className="mb-12 space-y-4">
                    <h3 className="text-2xl font-semibold dark:text-gray-200 text-gray-800">
                        {props.name}
                    </h3>
                    <p className="mb-6 dark:text-gray-200 text-gray-800">{props.desc}</p>
                    <a href="#" className="block font-medium text-indigo-600 dark:text-indigo-400">Know more</a>
                </div>
                <img src={props.image} className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
            </div>
        </>
    )
}

export default Service