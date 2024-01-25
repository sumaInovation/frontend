import React from "react";
import { motion } from "framer-motion";
import img2 from '../Assets/200plc.webp'
const Kidsrobotics= () => {
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

          Overwive of Contactor<br />
          Desing Contactor Logic<br />
          Realay ,Timer & Counter<br />
          Desing contactor Logic System



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
          PLC Scan Cycle<br />
          Basic Logic Element<br />
          Implement logic system using LADER<br />
          I/O on PLC<br />
          Sensors and actuaters interfacing

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
          Introduction to Timer<br />
          SIMATIC Timer Instructions <br />
          IEC Timer <br />
          Interval Timers <br />
          Usage of different Timer<br />
          Introduction to Counter<br />
          SIMATIC Counter Instructions<br />
          IEC Counter Instructions<br />
          Usage of different counters


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
          Move Byte, Word, Double Word, or Real<br />
          Move Byte Immediate <br />
          Block Move Instructions<br />

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
          Comparing Numerical Values<br />
          Compare String
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
          Shift Right and Shift Left Instructions<br />
          Rotate Right and Rotate Left Instructions <br />
          Shift Register Bit Instruction<br />
          Swap Bytes Instruction
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
          Add, Subtract, Multiply, and Divide Instructions <br />
          Multiply Int to Double Int and Divide Int with Remainder <br />
          Numeric Functions Instructions<br />
          Increment and Decrement Instructions


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
          Invert Instructions <br />
          AND, OR, and Exclusive OR Instructions

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
          Add To Table <br />
          First-In-First-Out and Last-In-First-Out<br />
          Memory Fill<br />
          Table Find

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
          Standard Conversion Instructions<br />
          ASCII Conversion Instructions<br />
          String Conversion Instructions<br />
          Encode and Decode Instructions

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
          Externel Interrupts<br />
          Timer Interrupts<br />
          Timed Interrupts<br />
          Communication Interrupts

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
          RS 232 Communication<br />
          Network Read and Network Write <br />
          Freeport Communication<br />
          Get Port Address and Set Port Address<br />
          PLC to PLC Communication<br />
          PLC to Microcontroller Communication


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
          Introduction to HSC<br />
          Function  of HSC<br />
          Usage of HSC

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
          1.Introduction to PWM/PTO.<br />
          2.Speed controlling in stepper motor using PWM.<br />
          3.Position control in stepper motor using PTO<br/>
          4.Basic Information for Open Loop Position Control Using Steppers or Servos.<br />
          5.Instructions Created by the Position Control Wizard<br />


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
          1.Introduction to Analog.<br/>
          2.Analog Input Module interfacing.<br/>
          3.Analog Output Module interfacing.<br/>
          4.ADC.<br/>
          5.DAC
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
          1.Basic HMI Operations.<br/>
          2.Desining HMI Project.<br/>
          3.Communication HMI with PLC


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
          1.PushButton & Sensors interfacing.<br/>
          2.DC Motor Speed controlling.<br/>
          3.Stepper Motor Speed Controlling.<br/>
          4.Stepper Motor Position Controlling.<br/>
          5.Encoder interfacing.<br/>
          6.DC Motor Speed controlling using PID.<br/>
          7.Elevator Control System Using a PLC
        

        </motion.div>
</motion.div>
 </>
  );
};

export default Kidsrobotics;
