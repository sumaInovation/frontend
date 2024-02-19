import React, { useState} from "react"
import {Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from "react-typed";

import background from "../Assets/online1.jpg";
import Kidsroboticscontent from "./Kidsroboticscontent";
const Online = () => {
  const [isTab, setIsTab] = useState(0);
  
  return (
    <div>
    
      <div
        className="flex flex-col items-center bg-white bg-center bg-no-repeat bg-cover md:h-screen " 
        style={{ backgroundImage:`url(${background})`}}
        >
          <h2 className="py-8 text-4xl font-bold text-center md:text-7xl text-[#65eb6bc7]">
          <Typed
            strings={["KIDS ROBOTICS"]}
            typeSpeed={120}
            backSpeed={60}
            loop
          />
        </h2>

      
        <div className="max-w-[1240px] mx-auto  ">
          <motion.div
            initial={{ y: "-20vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{scale:1.2}}
            className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105 "
          >
            
            <h2 className="py-8 text-2xl font-bold text-center bg-[#2476D8] md:text-3xl text-white">
               KIDS ROBORTICS
            </h2>
            <p className="font-semibold text-center text-[1.5rem]   inline-block   bg-orange-100 ">
              Duration:4 Months
              <br />
              Date:Every Sunday 8.00AM-5.00PM
              <br />
              Fees:5000LKR
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
    
      
<Kidsroboticscontent/>
 </div>
  );
};

export default Online;
