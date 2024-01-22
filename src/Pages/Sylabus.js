import React from "react";
import { motion } from "framer-motion";
const Sylabus = () => {
  return (
    <>

     
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8 bg-[#e7ebe9]"
      >
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Introduction
          </h2>
          
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Contactor Logic
          </h2>
          
            Overwive of Contactor<br/>
            Desing Contactor Logic<br/>
            Realay ,Timer & Counter<br/>
            Desing contactor Logic System
            
         
          
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Introduction to PLC
          </h2>
          PLC Scan Cycle<br/>
          Basic Logic Element<br/>
          Implement logic system using LADER<br/>
          I/O on PLC<br/>
          Sensors and actuaters interfacing
          
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Timers & Counters
          </h2>
          Introduction to Timer<br/>
          SIMATIC Timer Instructions <br/>
            IEC Timer <br/>
           Interval Timers <br/>
          Usage of different Timer<br/>
          Introduction to Counter<br/>
          SIMATIC Counter Instructions<br/>
          IEC Counter Instructions<br/>
          Usage of different counters
          
          
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            MOVE Instruction
          </h2>
          Move Byte, Word, Double Word, or Real<br/>
          Move Byte Immediate <br/>
          Block Move Instructions<br/>
          
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Compare Instructions 
          </h2>
          Comparing Numerical Values<br/>
          Compare String
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Shift and Rotate Instructions
          </h2>
          Shift Right and Shift Left Instructions<br/>
          Rotate Right and Rotate Left Instructions <br/>
          Shift Register Bit Instruction<br/>
          Swap Bytes Instruction
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Math Instructions
          </h2>
          Add, Subtract, Multiply, and Divide Instructions <br/>
          Multiply Int to Double Int and Divide Int with Remainder <br/>
          Numeric Functions Instructions<br/>
          Increment and Decrement Instructions
          
          
         </motion.div>
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
          Invert Instructions <br/>
          AND, OR, and Exclusive OR Instructions
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          String & Table Instructions
          </h2>
          Add To Table <br/>
          First-In-First-Out and Last-In-First-Out<br/>
          Memory Fill<br/>
          Table Find
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      
         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Logical Operations Instructions
          </h2>
        
          
         </motion.div>
      

        
        
        </motion.div>

    
    </>
  );
};

export default Sylabus;
