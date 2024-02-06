import React from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
const UserLoggingData = (state) => {
  const location = useLocation();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, ["/"]);
  return (
    <div className='text-white'>
      <h1 className='  text-center text-3xl text-[#00df9a]'>Welcome to {location.state.userName}!!!</h1>
      {location.state.verification === "not verified" &&
        <h1 className='  text-4xl text-center'>Your Account Not Veryfied!
          <br />Please log your email and verfied account</h1>}
      {location.state.verification === "verified" && <div className='text-white'>
        <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}


            className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
            {/* <img src={} alt="card1" className="w-[500px] mx-auto mt-[-3rem] bg-white" /> */}
            <h2 className="py-8 text-2xl font-bold text-center md:text-5xl">
              User Details
            </h2>
            <p className="  text-start m-auto">
              NAME:{location.state.Name}
              <br />
              COURSE:{location.state.Course}
              <br/>
              EMAIL:{location.state.userName}
              <br/>
              PHONE:{location.state.Number}
            </p>
            
            
            
            
          </motion.div>

          <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
    {/* <img src={} alt="card1" className="w-[500px] mx-auto mt-[-3rem] bg-white" /> */}
    <h2 className="py-8 text-2xl font-bold text-center md:text-5xl">
      Course Details
    </h2>
    <p className="  text-start m-auto">
    START DATE:{location.state.StartDate}
      <br />
      END DATE:{location.state.EndDate}
      <br/>
      COURSE FEE:25000LKR
      <br/>
      DUE:10000LKR
      <br/>
      NEXT PAYMENT:2024.02.23
    </p>

   
   
   
   
  </motion.div>
        </div>

      </div>}
    </div>
  )
}

export default UserLoggingData
