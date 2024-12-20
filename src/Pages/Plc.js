import React, { useState } from "react";

import { motion } from "framer-motion";
import Basiplcsylabus from "./Basiplcsylabus";

import Advanceplc from "./Advanceplc";
import Typed from "react-typed";
import background from "../Assets/plc3.png";
const Plc = () => {
  const [isTab, setIsTab] = useState(0);
  
  return (
    <>

      <div
        className=" pt-24 flex flex-col items-center bg-white bg-center bg-no-repeat bg-cover md:h-screen" 
        style={{ backgroundImage:`url(${background})`}}
        >
          <h2 className="py-8 text-4xl font-bold text-center md:text-7xl text-[#011936]">
          <Typed
            strings={["PLC  PROGRAMMING"]}
            typeSpeed={120}
            backSpeed={60}
            loop
          />
        </h2>

      
        <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8 ">
          <motion.div
             initial={{ y: "-20vh" }}
             animate={{ y: 0 }}
            transition={{ duration: 1 }}
           
            className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105 "
          >
            
            
          
            <h2 className="py-8 text-2xl font-bold text-center bg-[#29ab87] md:text-3xl text-white">
              BEGINNER LEVEL
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-[#f1fffa] ">
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
            transition={{ duration: 2.5 }}
           
            className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105 "
          >
            
            <h2 className="py-8 text-2xl font-bold text-center bg-[#29ab87] md:text-3xl text-white">
             ADVANCE LEVEL
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-[#f1fffa] ">
              Duration:4 Months
              <br />
              Date:Every Sunday 8.00AM-5.00PM
              <br />
              Fees:30000LKR
              <p className="text-[0.75rem]">Can be pay on 4 months</p>
            </p>
          
          </motion.div>
        
        </div>
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
              BEGINNER LEVEL
            </button>
          </li>
          <li class="w-full">
            <button
              onClick={() => {
                setIsTab(2);
              }}
              class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              ADVANCE LEVEL
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
      {isTab === 1 && <Basiplcsylabus />}
      {isTab === 2 && <Advanceplc />}
      {isTab === 3 && <div className="text-white"> Hello3</div>}
    </>
  );
};

export default Plc;
