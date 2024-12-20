import React, { useState } from "react"
import {Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from "react-typed";

import background from "../Assets/online1.jpg";
const Online = () => {
  const [isTab, setIsTab] = useState(0);
  
  return (
    <>
   
      <Navigate t="/cpro" />
      <div
        className="pt-24 flex flex-col items-center bg-white bg-center bg-no-repeat bg-cover md:h-screen" 
        style={{ backgroundImage:`url(${background})`}}
        >
          <h2 className="py-8 text-4xl font-bold text-center md:text-7xl text-[#33261D]">
          <Typed
            strings={["ONLINE  COURSES"]}
            typeSpeed={120}
            backSpeed={60}
            loop
          />
        </h2>

      
        <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-12 ">
          <motion.div
            initial={{ y: "-20vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{scale:1.2}}
            className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105 "
          >
            
            
          
            <h2 className="py-8 text-2xl font-bold text-center bg-[#000080] md:text-3xl text-white">
               PLC COURSE
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-[#fefffe] ">
              Duration:4 Months
              <br />
              Date:Every Sunday 8.00AM-5.00PM
              <br />
              Fees:5000LKR
              <p className="text-[0.75rem]">Can be pay on 4 months</p>
            </p>
            
          </motion.div>

          <motion.div
            initial={{ y: "-20vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{scale:1.2}}
            className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105 "
          >
            
            <h2 className="py-8 text-2xl font-bold text-center bg-[#000080] md:text-3xl text-white">
             ROBOTICS COURSE
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-[#fefffe] ">
              Duration:4 Months
              <br />
              Date:Every Sunday 8.00AM-5.00PM
              <br />
              Fees:10000LKR
              <p className="text-[0.75rem]">Can be pay on 4 months</p>
            </p>
          
          </motion.div>
        
        </div>
        <h2 className="py-8 text-2xl font-bold text-center text-white md:text-5xl">
          {/* <Typed
            strings={["C/C++  PROGRAMMING"]}
            typeSpeed={120}
            backSpeed={60}
            loop
          /> */}
          SUMAAUTOMATIONLK
        </h2>
        <motion.button  
        whileHover={{backgroundColor:"blue",scale:1.5}}
        
        
        className='bg-gradient-to-r from-green-400
         to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... w-[200px] rounded-md mx-auto my-6 py-3 text-[#000300]' >Learn More</motion.button>
      </div>
      

      {/* Navbar */}
      <div>
        <ul class="block text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li class="w-full ">
            <button
              onClick={() => {
                setIsTab(1);
              }}
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              PLC BEGINER LEVEL
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(2);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              PLC ADVANCE LEVEL
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(3);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
            ROBOTICS BEGINER LEVEL
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(4);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              ROBORTICS ADVANCE LEVEL
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      {isTab === 1 && <div className="text-white"> PLC BEGINER LEVEL</div>}
      {isTab === 2 && <div className="text-white"> PLC ADVANCE LEVEL</div>}
      {isTab === 3 && <div className="text-white">ROBORTICS BEGINER LEVEL</div>}
      {isTab === 4 && <div className="text-white"> ROBORTICS ADVANCE LEVEL </div>}
    </>
  );
};

export default Online;
