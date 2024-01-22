import React, { useState } from "react";
import { motion } from 'framer-motion'
import Sylabus from "./Sylabus";
import {Navigate} from 'react-router-dom'
const Plc = () => {
  const [isTab, setIsTab] = useState(0);
  return (
    <div>   
      <Navigate t='/plc'/>
      <div className="w-full py-[10rem] bg-white">

        <h2 className="py-8 text-5xl font-bold text-center md:text-7xl text-[#009B77]">
          PLC PROGRAM
        </h2>
        <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8">


          <motion.div
          initial={{y:"-20vh"}}
          animate={{y:0}}
          transition={{duration:1}}
          className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
            <h2 className="py-8 font-bold text-center text-2xl md:text-3xl text-[#6b5b95]">Basic Course</h2>
            <p className='font-semibold text-center text-[1.5rem]'>
              Duration:4 Months<br />
              Dates:Every Sunday 8.00AM-5.00PM<br />
              Fees:25000LKR
            </p>
            <p>Can be pay on 4 months</p>
          </motion.div>


    <motion.div
     initial={{y:"-20vh"}}
     animate={{y:0}}
     transition={{duration:1}}
    className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
            <h2 className="py-8 font-bold text-center text-1xl md:text-3xl text-[#6b5b95]">Advance Course</h2>
            <p className='font-semibold text-center text-[1.5rem]'>
              Duration:4 Months<br />
              Dates:Every Sunday 8.00AM-5.00PM<br />
              Fees:30000LKR
            </p>
            <p>Can be pay on 4 months</p>
          </motion.div>
        </div>
      </div>

      {/* Navbar */}
      <div>






        <ul class="block text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li class="w-full ">
            <button onClick={() => { setIsTab(1) }} class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">SYLABUS</button>
          </li>
          <li class="w-full">
            <button onClick={() => { setIsTab(2) }} class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">GALLERY</button>
          </li>
          <li class="w-full">
            <button onClick={() => { setIsTab(3) }} class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">More Deatils</button>
          </li>

        </ul>
      </div>

      {/* Content */}
      {
        isTab === 1 && (<Sylabus />)
      }
      {
        isTab === 2 && (<div className="text-white"> Hello2</div>)
      }
      {
        isTab === 3 && (<div className="text-white"> Hello3</div>)
      }






    </div>
  );
};

export default Plc;
