import React from "react";
import plc from "../Assets/plc.jpg";
import mc from "../Assets/mc.jpg";
import workshop from "../Assets/workshop.jpg";
import online from "../Assets/online.jpg";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
const Card = () => {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8">

        
        <motion.div 
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1}}
        
        
        className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img src={plc} className="w-[500px] mx-auto mt-[-3rem] bg-white" />
          <h2 className="py-8 text-2xl font-bold text-center md:text-5xl">
            PLC Programming
          </h2>
          <p className="text-center ">
            Duration:4months
            <br />
            Fess:25000LKR
          </p>

          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3">
            {" "}
            <Link to="/pcl">More</Link>
          </button>
        </motion.div>
        <motion.div 
         initial={{opacity:0,scale:0}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:1}}
         className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img src={mc} className="w-[500px] mx-auto mt-[-3rem] bg-white" />
          <h2 className="py-8 text-2xl font-bold text-center md:text-5xl">
            C/C++ Programming
          </h2>
          <p className="text-center ">
            Duration:4months
            <br />
            Fess:25000LKR
          </p>

          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3">
            {" "}
            <Link to="/cpro">More</Link>
          </button>
        </motion.div>
        <motion.div
         initial={{opacity:0,scale:0}}
         whileInView={{opacity:1,scale:1}}
         transition={{duration:1}}
         
        
        
        className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img src={online} className="w-[500px] mx-auto mt-[-3rem] bg-white" />
          <h2 className="py-8 text-2xl font-bold text-center md:text-5xl">
            Online Courses
          </h2>
          <p className="text-center ">
            Duration:4months
            <br />
            Fess:25000LKR
          </p>

          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3">
            {" "}
            <Link to="/online">More</Link>
          </button>
        </motion.div>
        <motion.div 
        
        initial={{opacity:0,scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1}}
        
        
        className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img
            src={workshop}
            className="w-[500px] mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="py-8 text-2xl font-bold text-center md:text-5xl">
            Industrial Workshop
          </h2>
          <p className="text-center ">
            Duration:4months
            <br />
            Fess:25000LKR
          </p>

          <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3">
            {" "}
            <Link to="/workshop">More</Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;