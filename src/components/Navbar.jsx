import React from 'react'

import SarthiLogo from '../assets/sarthi-logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-gray-200">
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
      <img src={SarthiLogo} className="h-8 mr-3" alt="Sarthi Logo" />
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex items-baseline flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 md:hover:text-blue-500 md:p-0"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 md:p-0"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block py-2 pl-3 pr-4 text-gray-900 hover:text-blue-700 md:p-0"
          >
            Contact
          </a>
        </li>
        <li className='elative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"'>
          <a
            href="/"
            className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
          >
            Home
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Navbar