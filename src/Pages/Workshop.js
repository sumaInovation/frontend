import {useLocation} from 'react-router-dom';
import { useEffect } from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";

import Typed from "react-typed";
import background from "../Assets/worksop1.jpg";
const Workshop = () => {
  const [isTab, setIsTab] = useState(0);
 const { pathname } = useLocation();
 useEffect(() => {
   window.scrollTo(0, 0);
 }, [pathname]);
  return (
    <div>
    
      <div
        className="flex flex-col items-center bg-white bg-center bg-no-repeat bg-cover md:h-screen" 
        style={{ backgroundImage:`url(${background})`}}
        >
          <h2 className="py-8 text-4xl font-bold text-center text-white md:text-7xl">
          <Typed
            strings={["PLC WORKSHOPS"]}
            typeSpeed={120}
            backSpeed={60}
            loop
          />
        </h2>

          <motion.div
            initial={{ y: "-20vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{scale:1.2}}
            className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105 md:w-[600px]"
          >
            
            
          
            <h2 className="py-8 text-2xl font-bold text-center bg-[#2476D8] md:text-3xl text-white">
               Industrial Workshop
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-orange-100 ">
            Now you can join our one day workshop <br/>and enhance your skills
             
             
            </p>
            
          </motion.div>

        
        <h2 className="py-8 text-2xl font-bold text-center text-[#26d223d5] md:text-5xl">
         The Pioneer Of Your Engineering Dream 
        </h2>
        <motion.button  
        whileHover={{backgroundColor:"blue",scale:1.5}}
        
        
        className='bg-gradient-to-r from-green-400
         to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... w-[200px] rounded-md mx-auto my-6 py-3 text-[#000300]' >
          <Link to='/contact'>Contact Us</Link></motion.button>
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
              BASIC WORKSHOP
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(2);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              COMMUNICATION WORKSHOP
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(3);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              MOTOR WORKSHOP
            </button>
          </li>
        </ul>
      </div>

      {/* Content */}
      {isTab === 1 && <div className="text-white">Basci Workshop</div>}
      {isTab === 2 && <div className="text-white"> Comminication Workshop</div>}
      {isTab === 3 && <div className="text-white"> Motor Controlling</div>}
    </div>
  );
};

export default Workshop;
