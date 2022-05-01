
import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import CartPopup from './CartPopup';

const navbar = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },

]
export const Navbar = () => {
  const { theme, setTheme } = useTheme(null);
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  const handleOpenCart = (e) =>{
    setOpen(e)
  }
  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow px-2 md:px-6 py-2.5 fixed z-40 w-full dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className='flex '>
            <Link href={"/"}>
              <a className="flex items-center mr-10">
                <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Excell-On.</h1>
              </a>
            </Link>

            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
                {navbar.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{item.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex items-center'>


            <button className='mr-1 p-3 hover:bg-gray-100 rounded dark:hover:bg-gray-700' onClick={handleClick}>
              {theme == "dark" ?
                <SunIcon className='w-6 h-6 text-gray-400' /> : <MoonIcon className='w-6 h-6 text-gray-400' />
              }
            </button>


            <button onClick={()=> setOpen(true)} className='mr-1 p-3 hover:bg-gray-100 rounded dark:hover:bg-gray-700'>
              <ShoppingCartIcon className='w-6 h-6 text-gray-400' />
            </button>

            <button className='mr-1 p-3 hover:bg-gray-100 rounded dark:hover:bg-gray-700'>
              <SearchIcon className='w-6 h-6 text-gray-400' />
            </button>
            <Link href={"/user/login"}>
              <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-200">
                Sign in
              </a>
            </Link>
            <Link href={"/user/register"}>
              <a
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
            </Link>
          </div>
        </div>
        <CartPopup closeCart={handleOpenCart} isOpen={open}/>
      </nav>
    </>
  )
}

export default Navbar;
