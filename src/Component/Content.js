import React from "react";
import logo from "../Assets/hero-img.png";
import {motion} from 'framer-motion'

const Content = () => {
  return (
    <div
className="w-full px-6 py-6 bg-white " style={{border:"1px solid black"}}>
      <div className="max-w-[800px] mx-auto grid md:grid-cols-2 bg-white">
        <img src={logo} alt="contentimg"  className='w-[500px] mx-auto my-4 ' />
       <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#00df9a] font-bold text-4xl px-4 py-4'>PLC & Advance Robotic Courses</h1>
        <p>
        Learn more about PLC & C/C++ programming and gain all the necessary skills you need to become a successful PLC & C/C++ developer.
        We guide you from a basic level to become a high-level developer.
        </p>
        <motion.button  
        whileHover={{backgroundColor:"blue",scale:1.5}}
        
        
        className='bg-gradient-to-r from-green-400
         to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... w-[200px] rounded-md mx-auto my-6 py-3 text-[#000300]' >Learn More</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Content;
