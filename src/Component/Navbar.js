

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

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This makes the scroll smooth
    });
  }
  

  const [isOpen, setIsOpen] = useState(0);
  const [isPlcDropdownOpen,setIsPlcDropdownOpen]=useState(false)
  const [isMoreDropdownOpen,setIsMoreDropdownOpen]=useState(false)
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
              onChange={()=>{}}
              className="px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none"
              placeholder="Search..."
              id='serch box'
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
            scrollToTop();

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
    
    {isOpen && (
  <div className="fixed top-24 left-0 w-full h-full bg-black bg-opacity-50 z-50">
    <div className=" top-0 right-0 w-64 h-full bg-white p-4 transition-transform transform duration-300 ease-in-out translate-x-full"
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}>
      <div className="flex flex-col items-center space-y-6">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/plc" className="hover:text-gray-400">PLC</a>
            {/*Robotics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPlcDropdownOpen(!isPlcDropdownOpen)}
                className="hover:text-gray-400"
              >
                Robotics
              </button>
              {isPlcDropdownOpen && (
                <div className="absolute left-0 w-48 bg-gray-900 mt-2 rounded-lg shadow-md">
                  <ul>
                    <li className="hover:bg-gray-700 text-white"><a href="/cpro" className="block px-4 py-2">Advance Robotics</a></li>
                    <li className="hover:bg-gray-700 text-white"><a href="/kids" className="block px-4 py-2">Kids Robotics</a></li>
                    
                  </ul>
                </div>
                   )}
                   </div>
                   

                   {/*Robotics Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="hover:text-gray-400"
              >
                More
              </button>
              {isMoreDropdownOpen && (
                <div className="absolute left-0 w-48 bg-gray-900 mt-2 rounded-lg shadow-md">
                  <ul>
                    <li className="hover:bg-gray-600 text-white"><a href="/online" className="block px-4 py-2">Online Course</a></li>
                    <li className="hover:bg-gray-600 text-white"><a href="/workshop" className="block px-4 py-2">Workshop</a></li>
                    
                  </ul>
                </div>
                   )}
                   </div>
                  <a href="/test" className="hover:text-gray-400">API</a> 
                  
                  
        <div className="">
        {/* Sign Up Button */}
        <div className="mb-4">

        
        <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-full transition duration-300 ease-in-out">
          Sign Up
        </button>
        </div>
        <div>

        {/* Sign In Button */}
        <button className="px-6 py-3 text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full transition duration-300 ease-in-out">
          Sign In
        </button>
        </div>
      </div>
                  </div>     

      
     
    </div>
  </div>
)}
  
    

  </>)


};
export default Navbarr