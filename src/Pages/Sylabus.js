import React from "react";
import { motion } from "framer-motion";
const Sylabus = () => {
  return (
    <div className=" w-full py-[1rem]   bg-black m-auto">
      <h2 className="py-8 font-bold text-center text-1xl md:text-3xl text-[#00df9a]">
        Basic PLC Course
     </h2>
      {/* Animate part */}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8 bg-[#e7ebe9]"
      >
        {/* topic1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            Introduction
          </h2>
          <p>
            <h6 className="text-1xl text-[#5050ca]"> Introduction to PLC.</h6>

            <h6 className="text-1xl text-[#5050ca]"> Architecture of a PLC</h6>

            <h6 className="text-1xl text-[#5050ca]">
              {" "}
              RAM,ROM,CRT & CPU in PLC
            </h6>

            <h6 className="text-1xl text-[#5050ca]">
              {" "}
              Basci Electronic for PLC
            </h6>

            <h6 className="text-1xl text-[#5050ca]">
              {" "}
              Number System(BIN,HEX,OCT,DEC)
            </h6>
          </p>
        </motion.div>
        {/* topic2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col w-full p-4 mx-1 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            Contactor Logic
          </h2>
          <p>
            <h6 className="text-1xl text-[#5050ca]">
              I. Architecture of a Contactor
            </h6>

            <h6 className="text-1xl text-[#5050ca]">
              II. Function of Contactor
            </h6>

            <h6 className="text-1xl text-[#5050ca]">
              III. Learning Contactor Logic
            </h6>

            <h6 className="text-1xl text-[#5050ca]">
              IV. Mechanical Relay ,Timers & Counters
            </h6>

            <h6 className="text-1xl text-[#5050ca]">
              VI. Motor Controlling using Contactors
            </h6>

            <h6 className="text-1xl text-[#5050ca]">
              VII. Advance Controlling Desing
            </h6>
          </p>
        </motion.div>
        {/* topic3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            Introduction to PLC Programming
          </h2>

          <h6 className="text-1xl text-[#5050ca]">What is LADER?</h6>
          <h6 className="text-1xl text-[#5050ca]">
            Basic LDER instruction(NO,NC,SET,RESET,I/O)
          </h6>
          <h6 className="text-1xl text-[#5050ca]"> What is FBD?</h6>
          <h6 className="text-1xl text-[#5050ca]">
            Basic FBD instruction(NO,NC,SET,RESET,I/O)
          </h6>
          <h6 className="text-1xl text-[#5050ca]"> Scan Sycle of PLC</h6>
          <h6 className="text-1xl text-[#5050ca]">
            Solving logic Sytem(K-Map)
          </h6>
          <h6 className="text-1xl text-[#5050ca]">
            Implementation logic System using FBD & LADER
          </h6>
        </motion.div>
        {/* topic4 */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            LADER Programming I
          </h2>
          <p>
            <h6 className="text-1xl text-[#5050ca]">
              I.Memory Arcuitecture of PLC
            </h6>
            <h6 className="text-1xl text-[#5050ca]"> II.Move Instructions</h6>
            1.Move Byte, Word, Double Word, or Real
            <br />
            2.Move Byte Immediate (Read and Write)
            <br />
            3.Block Move Instructions
            <br />
            <h6 className="text-1xl text-[#5050ca]"> III.Timer Instructions</h6>
            1.SIMATIC Timer Instructions
            <br />
            a.ON Delay Timer
            <br />
            b.OFF Delay Timer
            <br />
            c.Retentive Timer
            <br />
            2.IEC Timer Instructions
            <br />
            3.Interval Timers
            <br />
            <h6 className="text-1xl text-[#5050ca]"> IV.Counters</h6>
            1.SIMATIC Counter Instructions <br />
            A)UP Counter
            <br />
            B)Down Counter
            <br />
            C)Retentive Counter
            <br />
            2.IEC Counter Instructions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            LADER Programming II
          </h2>
          <p>
            <h6 className="text-1xl text-[#5050ca]">I.Math Instructions</h6>
            1.Add, Subtract, Multiply, and Divide Instructions
            <br />
            2.Multiply Integer to Double Integer and Divide Integer with
            Remainder <br />
            3.Numeric Functions Instructions
            <br />
            4.Increment and Decrement Instructions
            <br />
            <h6 className="text-1xl text-[#5050ca]">
              {" "}
              II.Compare Instructions
            </h6>
            1.Comparing Numerical Values
            <br />
            2.Compare String <br />
            <h6 className="text-1xl text-[#5050ca]">
              {" "}
              III.Logical Operations Instructions
            </h6>
            1.nvert Instructions
            <br />
            2.AND, OR, and Exclusive OR Instructions
            <br />
            <h6 className="text-1xl text-[#5050ca]">
              {" "}
              IV.Conversion Instructions 
            </h6>
            1.Standard Conversion Instructions<br/>
            2.ASCII Conversion Instructions <br/>
            3.String Conversion Instructions<br/>
            4.Encode and Decode Instructions
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            LADER Programming III
          </h2>
          <p>
          <h6 className="text-1xl text-[#5050ca]">
              I.String instruction
            </h6>
            <h6 className="text-1xl text-[#5050ca]">
              II.Table Instructions
            </h6>
            1.Add To Table<br/>
            2.First-In-First-Out and Last-In-First-Out<br/>
            3.Memory Fill
            4.Table Find
            <h6 className="text-1xl text-[#5050ca]"> III.Shift and Rotate Instructions 179</h6>
            1.Shift Right and Shift Left Instructions
            <br />
            2.Rotate Right and Rotate Left Instructions 
            <br />
            3.Shift Register Bit Instruction 
            <br />
            4.Swap Bytes Instruction
            <h6 className="text-1xl text-[#5050ca]"> IV.Subroutine Instructions </h6>
            <h6 className="text-1xl text-[#5050ca]"> V.Interrupt Instructions </h6>
            1.External Interrupt
            <br />
            2.Timer Interrupt/Timed Interrupt
            <br />
            3.Communiction Interrupt 
           </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            LADER Programming IV
          </h2>
          <p>
          <h6 className="text-1xl text-[#5050ca]">
              I.Pulse Output Instruction
            </h6>
            1.PWM Output<br/>
            2.PTO Output<br/>
            
            <h6 className="text-1xl text-[#5050ca]">
              II.High-Speed Counter Instructions
            </h6>
            <h6 className="text-1xl text-[#5050ca]">
              III.Proportional/Integral/Derivative (PID) Loop Instruction 
            </h6>
            1.PI Controller<br/>
            2.PD Controller<br/>
            3.PID Controller<br/>
           </p>
           <h6 className="text-1xl text-[#5050ca]">
              IV.I/O Module Interfacing
            </h6>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 font-bold text-center text-1xl md:text-3xl">
            Practicals
          </h2>
        
          <h6 className="text-1xl text-[#5050ca]">
              I.HMI Interfacing
            </h6>
            <h6 className="text-1xl text-[#5050ca]">
              II.DC Motor Speed Controlling
            </h6>
            1.Using Analog Voltage<br/>
            2.PWM
            <h6 className="text-1xl text-[#5050ca]">
              III. Stepper Motor Controlling
            </h6>
             1.Speed Controlling<br/>
             3.Position Controlling<br/>
             <h6 className="text-1xl text-[#5050ca]">
              IV. Encoder Interfacing
            </h6>
            1.Motor Speed measuring <br/>
            2.Motor Position measuring
            <h6 className="text-1xl text-[#5050ca]">
              V. Sensor Interfacing
            </h6>
             1.Proximity Sensor<br/>
             3.Temperature Sensor<br/>
             4.Level Sensor
             <h6 className="text-1xl text-[#5050ca]">
              VI. Basci PID
            </h6>
            DC Motor Speed Controlling by PID
            <h6 className="text-1xl text-[#5050ca]">
              VII. Induction Motor Controlling
            </h6>
            <h6 className="text-1xl text-[#5050ca]">
              VIII. Eleviator Controlling
            </h6>
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Sylabus;
