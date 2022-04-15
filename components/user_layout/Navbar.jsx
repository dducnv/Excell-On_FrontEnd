
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <>
      <nav className="bg-white border-gray-400 px-2 md:px-6 py-2.5 fixed z-40 w-full dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className='flex '>
            <a href="#" className="flex items-center mr-10">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ExCell-On</span>
            </a>
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link href={"/services"}>
                  <a  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>

                  </Link>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-200 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-600 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-600">Services</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center'>
            <button className='mr-1 p-3 hover:bg-gray-100 rounded dark:hover:bg-gray-700' onClick={handleClick}>
              {theme == "dark" ?
                <SunIcon className='w-6 h-6 text-gray-400' /> : <MoonIcon className='w-6 h-6 text-gray-400' />
              }
            </button>

            <button className='mr-1 p-3 hover:bg-gray-100 rounded dark:hover:bg-gray-700'> 
                <SearchIcon className='w-6 h-6 text-gray-400'/>
            </button>
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-200">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
