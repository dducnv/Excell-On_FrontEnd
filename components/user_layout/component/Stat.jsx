import React from 'react';

const Stat = (props) => {
    return (
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed ">
            <div className=" shadow hover:shadow-xl cursor-pointer rounded-lg py-3 px-6 bg-white dark:bg-gray-800 border dark:border-gray-200">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <h4 className="dark:text-slate-50 text-gray-800">{props.title}</h4>
                        <h4 className="dark:text-slate-50 text-gray-800 text-3xl font-bold text-left">{props.statNumble}</h4>
                    </div>
                    <div>
                        <props.icon className='w-12 h-12 text-teal-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white' />
                    </div>
                </div>
                <div className="text-left flex flex-row justify-start items-center">
                                <span className="mr-1">
                                    <props.iconSub className='w-5 h-5 text-teal-500 transition duration-75 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white' />
                                </span>
                    <p><span className="text-teal-500 font-bold">{props.data}</span> {props.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Stat;
