import React from "react";
import { motion } from "framer-motion";
import img2 from '../Assets/200plc.png'
const Basiplcsylabus = () => {
  return (
    <>


      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8 bg-gray-100 dark:bg-gray-800"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Introduction
          </h2>
          PLC Course For Beginer Level
        <motion.img 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:2}}
        
        src={img2} className='w-[300px] bg-red'/>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Contactor Logic
          </h2>
          <ul className="text-start">
          <li>Overwive of Contactor</li>
          <li>Desing Contactor Logic</li>
          <li>Realay ,Timer & Counter</li>
          <li>Desing contactor Logic System</li>
           </ul>


        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Introduction to PLC
          </h2>
          <ul className="text-start">

          <li>PLC Scan Cycle</li>
          <li>Basic Logic Element</li>
          <li>Implement logic system using LADER</li>
          <li>I/O on PLC</li>
          <li>Sensors and actuaters interfacing</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Timers & Counters
          </h2>
          <ul className="text-start">

          <li>Introduction to Timer</li>
          <li>SIMATIC Timer Instructions </li>
          <li>IEC Timer </li>
          <li>Interval Timers </li>
          <li>Usage of different Timer</li>
          <li>Introduction to Counter</li>
          <li>SIMATIC Counter Instructions</li>
          <li>IEC Counter Instructions</li>
          <li>Usage of different counters</li>
          </ul>


        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            MOVE Instruction
          </h2>
          <ul className="text-start">
         <li>Move Byte, Word, Double Word, or Real</li>
          <li>Move Byte Immediate </li>
          <li>Block Move Instructions</li>
            </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Compare Instructions
          </h2>
          <ul className="text-start">

          <li>Comparing Numerical Values</li>
          <li>Compare String</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Shift and Rotate Instructions
          </h2>
          <ul className="text-start">

          <li>Shift Right and Shift Left Instructions</li>
          <li>Rotate Right and Rotate Left Instructions </li>
          <li>Shift Register Bit Instruction</li>
          <li>Swap Bytes Instruction</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Math Instructions
          </h2>
         < ul className="text-start">

          <li>Add, Subtract, Multiply, and Divide Instructions </li>
          <li>Multiply Int to Double Int and Divide Int with Remainder </li>
          <li>Numeric Functions Instructions</li>
          <li>Increment and Decrement Instructions</li>
              </ul>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Logical Operations Instructions
          </h2>
          < ul className="text-start">
         <li> Invert Instructions</li>
          <li>AND, OR, and Exclusive OR Instructions</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            String & Table Instructions
          </h2>
          <ul className="text-start">
          <li>Add To Table </li>
          <li>First-In-First-Out and Last-In-First-Out</li>
          <li>Memory Fill</li>
          <li>Table Find</li>
              </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Conversion Instructions
          </h2>
          <ul className="text-start">
          <li>Standard Conversion Instructions</li>
          <li>ASCII Conversion Instructions</li>
          <li>String Conversion Instructions</li>
          <li>Encode and Decode Instructions</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Subroutine & Interrupts
          </h2>
          < ul className="text-start">
          <li>Externel Interrupts</li>
          <li>Timer Interrupts</li>
          <li>Timed Interrupts</li>
          <li>Communication Interrupts</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Communications Instructions
          </h2>
          <ul className="text-start">

          <li>RS 232 Communication</li>
          <li>Network Read and Network Write </li>
          <li>Freeport Communication</li>
          <li>Get Port Address and Set Port Address</li>
          <li>PLC to PLC Communication</li>
          <li>PLC to Microcontroller Communication</li>
</ul>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            High-Speed Counter
          </h2>
          <ul className="text-start">
          <li>Introduction to HSC</li>
          <li>Function  of HSC</li>
          <li>Usage of HSC</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            PWM & PTO Instruction
          </h2>
          <ul className="text-start">

          <li>1.Introduction to PWM/PTO.</li>
          <li>2.Speed controlling in stepper motor using PWM.</li>
          <li>3.Position control in stepper motor using PT</li>
          <li>4.Basic Information for Open Loop Position Control Using Steppers or Servos.</li>
          <li>5.Instructions Created by the Position Control Wizard</li>
          </ul>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Analog I/O 
          </h2>
          <ul className="text-start">
          <li>1.Introduction to Analog</li>
          <li>2.Analog Input Module interfacing</li>
          <li>3.Analog Output Module interfacing</li>
          <li>4.ADC.</li>
          <li>5.DAC</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            HMI & Touch Screen interfacing
          </h2>
          <ul className="text-start">
          <li>1.Basic HMI Operations.</li>
          <li>2.Desining HMI Project.</li>
          <li>3.Communication HMI with PLC</li>
          </ul>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Practicals Lessons
          </h2>
          <ul className="text-start">
          <li>1.PushButton & Sensors interfacing.</li>
          <li>2.DC Motor Speed controlling.</li>
          <li>3.Stepper Motor Speed Controlling.</li>
          <li>4.Stepper Motor Position Controlling.</li>
          <li>5.Encoder interfacing.</li>
          <li>6.DC Motor Speed controlling using PID.</li>
           </ul>
        </motion.div>
        

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Practicals Lessons
          </h2>
          <ul className="text-start">

          <li>1.PushButton & Sensors interfacing.</li>
          <li>2.DC Motor Speed controlling.</li>
          <li>3.Stepper Motor Speed Controlling.</li>
          <li>4.Stepper Motor Position Controlling.</li>
          <li>5.Encoder interfacing.</li>
          <li>6.DC Motor Speed controlling using PID.</li>
          <li>7.PLC-Based Elevator Controller</li>
          <li>8.Energy Saver System Using PLC</li>
          </ul>
        </motion.div>
         

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center 
          duration-75 rounded-lg shadow-xl hover:scale-105
           bg-gradient-to-r from-cyan-500 to-blue-500 ..."
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Practicals Lessons
          </h2>
          <ul className="text-start">
          <li>1.Design a Conveyor System</li>
          <li>2.PLC-Based Temperature Controller System</li>
          <li>3.Water Filling system usin Factory IO.</li>
          <li>4.Web Control Home Automation System</li>
          <li>5.PLC to VB.NET communication</li>
          <li>6.Industrial Timer Controller for Multiple Machines</li>
          </ul>
         
        </motion.div>


        
</motion.div>
 </>
  );
};

export default Basiplcsylabus;
