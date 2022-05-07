
import React, { useState, Fragment,useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon, SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/outline';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link';
import CartPopup from './CartPopup';
import { useCart } from "react-use-cart";
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
  }
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const Navbar = () => {
  const { totalUniqueItems } = useCart();
  const { theme, setTheme } = useTheme(null);
  const [userInfo, setUserInfo] = useState(null);
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  const getUserInfo = async () => {
    var result = await fetch('https://localhost:44342/api/account/userinfo', {
      method: 'GET',
      headers: {
        "Authorization": localStorage.getItem('user-token'),
      },
    }).then(function (data) {
      return data.json();
    });
    setUserInfo(result);
  }
  useEffect(() => {
    if (localStorage.getItem('user-token')) {
      getUserInfo();
    }
  }, [])
  const handleOpenCart = (e) => {
    setOpen(e)
  }
  const Logout = () => {
    localStorage.removeItem('user-token');
    window.location.href = '/';
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



            {localStorage.getItem('user-token') || localStorage.getItem('user-token') !== null ?
              <>
                <button onClick={() => setOpen(true)} className='mr-1 p-3 hover:bg-gray-100 rounded dark:hover:bg-gray-700 relative'>
                  <div className="absolute w-4 h-4 rounded-full -top-0 text-white  right-0 leading text-xs bg-red-500">
                    {totalUniqueItems}
                  </div>
                  <ShoppingCartIcon className='w-6 h-6 text-gray-400' />
                </button>
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className=" text-gray-600 p-1 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <UserIcon className="h-6 w-6" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          {userInfo.UserName}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href={"/my-order"}>
                          <a
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            My Order
                          </a>
                        </Link>

                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                        onClick={Logout}
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </> :
              <>
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
              </>

            }


          </div>
        </div>
        <CartPopup closeCart={handleOpenCart} isOpen={open} />
      </nav>
    </>
  )
}

export default Navbar;
