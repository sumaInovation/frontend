import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import Typed from "react-typed";
import background from "../Assets/mc3.jpg";
import Advancerobotics from "./Advancerobotics";
import BasicRobotics from "./BasicRobotics";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Cprogramming = () => {
  const { pathname } = useLocation();
  const [isTab, setIsTab] = useState(2);
  useEffect(() => {
    window.scrollTo({top:0,behavior:"smooth"});
  }, [pathname]);
  return (
    <div>
     
      <div
        className="flex flex-col items-center bg-white bg-center bg-no-repeat bg-cover md:h-screen" 
        style={{ backgroundImage:`url(${background})`}}
        >
          <h2 className="py-8 text-4xl font-bold text-center md:text-7xl text-[#c8d2cdea]">
          <Typed
            strings={["C/C++  PROGRAMMING"]}
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
            
            
          
            <h2 className="py-8 text-2xl font-bold text-center bg-[#2476D8] md:text-3xl text-white">
              BASIC ROBOTICS
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-orange-100 ">
              Duration:4 Months
              <br />
              Date:Every Sunday 8.00AM-5.00PM
              <br />
              Fees:25000LKR
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
            
            <h2 className="py-8 text-2xl font-bold text-center bg-[#2476D8] md:text-3xl text-white">
             ADVANCE ROBOTICS
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-orange-100 ">
              Duration:4 Months
              <br />
              Date:Every Sunday 8.00AM-5.00PM
              <br />
              Fees:30000LKR
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
              BASIC ROBOTICS
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(2);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              ADVANCE ROBOTICS
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(3);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              GALERY
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      {isTab === 1 && <BasicRobotics/>}
      {isTab === 2 && <Advancerobotics/>}
      {isTab === 3 && <div className="text-white"> Hello3</div>}
    </div>
  );
};

export default Cprogramming;
