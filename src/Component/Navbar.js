

import { useState } from "react";
import logo from "../Assets/logo10.svg";
import Dropdown from '../Component/Dropwon'
const dropdownItems = [
  { name: 'Online Course', path: '/online' },
  { name: 'Workshop', path: '/workshop' },
];

const dropdownItems1 = [
  { name: 'Advance Robotics', path: '/cprogramming' },
  { name: 'Kids Robotics', path: '/kids' },
];

const Navbarr = () => {

  const [isOpen, setIsOpen] = useState(0);
  return (<>
    <nav className="flex items-center justify-between relative gap-10 ">

      <div class=" bg-gray-900  flex flex-wrap items-center  justify-evenly   fixed top-0 left-0  w-full z-50 ">
        {/* LOGO */}

        <div>
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} alt="userimg" className=" w-[100px]  h-auto"
            />

          </a>
        </div>
        <div>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={''}
              onChange={''}
              className="px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>

        </div>

        {/* Mobile navbar */}
        <div>
          <button data-collapse-toggle="navbar-default" type="button" class=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => {
            if (isOpen == 0) {
              setIsOpen(1);
            } else {
              setIsOpen(0);
            }

          }}>
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Large screen navbar */}
        <div className="">

        </div>
        <div className="hidden lg:flex ">
          <ul>

            <button class=" px-6 py-3  text-white  text-lg leading-tight whitespace-nowrap">
              <a href="/">
                HOME
              </a>
            </button>


            <button class="px-6 py-3  text-white  text-lg leading-tight whitespace-nowrap">
              <a href="/plc">
                PLC
              </a>
            </button>

            <button class="px-6 py-3  text-white  text-lg leading-tight whitespace-nowrap">
              <a href="/test">
                API
              </a>
            </button>

            <Dropdown option="ROBOTICS" items={dropdownItems1} />
            <Dropdown option="More" items={dropdownItems} />

            {/* Sing UP */}
            <button class="lg:m-2 px-6 py-3 bg-green-500 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
              Sing Up
            </button>
            {/* Sing In */}
            <button class="lg:m-2 px-6 py-3 bg-lime-900 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
              Log in
            </button>
          </ul>
        </div>




      </div>
    </nav>

    {/* Mobile Navbar (Hidden by default) */}
    <div className={`lg:hidden ${isOpen  ? 'block' : 'hidden'} bg-transparent  p-4 space-y-4 z-100 pt-16 
     justify-around`}  onClick={()=>{setIsOpen(0)}}
    >

      <a href="/" className="block px-4 py-2">Home</a>
      <a href="/" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">HOME</a>
      <a href="/cpro" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">Advance Robotics</a>
      <a href="/kids" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">Kids Robotics</a>
      <a href="/plc" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">PLC</a>
      <a href="/online" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">Online Course</a>
      <a href="/workshop" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">Workshop</a>
      <a href="/Test" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">API</a>
      <a href="/contact" className="block px-4 py-2 bg-gray-500 rounded-md w-1/4  text-center">Contact</a>





      {/* Sign Up / Sign In buttons for mobile */}
      <a
        href="/signup"
        className="block px-4 py-2 bg-gray-500 text-black text-center rounded-md text-lg w-1/4"
      >
        Sign Up
      </a>


    </div>

  </>)


};
export default Navbarr