import React from "react";
import { motion } from "framer-motion";
const Advanceplc = () => {
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
            Introduction to TIA Portal
          </h2>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Basic instructions
          </h2>
          1.Bit logic contacts and coils<br/>
          2.Set and reset instructions .<br/>
          3.Positive and negative edge instructions.<br/>
          4.Timers  & Counters.<br/>
          5.Compare instructions.<br/>
          6.Math  Instructions.<br/>
          7.Convert instructions.<br/>
          8.Round and truncate instructions.<br/>

          </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Basic instructions
          </h2>
          9.Scale and normalize instructions <br />
          10.Program control.<br/>
          11.Jump and label instructions.<br/>
          12.SWITCH instruction.<br/>
          13.AND, OR, and XOR instructions.<br/>
          14.Invert instruction.<br/>
          15.Encode and decode instructions.<br/>
          16.Shift and Rotate .<br/>
          

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Technology instructions 
          </h2>
           High-speed counter.<br />
          1.Operation of the high-speed counter.<br/>
          2.Selecting the functionality for the HSC.<br/>
          3.Input addresses for the HSC.<br/>
          


        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Technology instructions
          </h2>
          PID control<br/>
          1.PID algorithm.<br/>
          2.Inserting the PID instruction and technological object.<br/>
          3.PID_Compact instruction.<br/>
          4.PID_3STEP instruction.<br/>
          5.Configuring the PID controller.<br/>
          6.Commissioning the PID controller.<br/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Technology instructions
          </h2>
          Motion control <br />
        1.Configuring a pulse generator(PWM).<br/>
        2.Configuring the axis<br/>
        3.Motion control instructions.<br/>
        a.MC_Power instruction<br/>
        b.MC_Reset instruction.<br/>
        c.MC_Home instruction.<br/>
        d.MC_MoveAbsolute instruction.<br/>
        e.MC_MoveRelative instruction.<br/>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Technology instructions
          </h2>
          Motion control<br/>
          3.Motion control instructions<br/>
          f.MC_MoveVelocity instruction<br/>
          g.MC_MoveJog instruction<br/>
          h.MC_CommandTable instruction<br/>
          </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
          Programming concepts
          </h2>
          1.Using blocks to structure your program<br/>
          2.Organization block (OB)<br/>
          3.Function (FC)<br/>
          4.Function block (FB)<br/>
          5.Data block (DB).

        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            Communications
          </h2>
          1.PROFINET Communication<br/>
          2.Local/Partner connection<br/>
          3.Open user communication<br/>
          4.Modbus RTU communication<br/>
          5.Modbus TCP/IP communication<br/>
          6.S7 communication
          
          

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
          Add To Table <br />
          First-In-First-Out and Last-In-First-Out<br />
          Memory Fill<br />
          Table Find

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
        >
          <h2 className="py-8 text-base font-bold text-center md:text-3xl">
            PWM & PTO Instruction
          </h2>
          1.Introduction to PWM/PTO.<br />
          2.Speed controlling in stepper motor using PWM.<br />
          3.Position control in stepper motor using PTO
          4.Basic Information for Open Loop Position Control Using Steppers or Servos.<br />
          5.Instructions Created by the Position Control Wizard<br />


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
          className="flex flex-col w-full p-4 my-4 text-center duration-75 bg-white rounded-lg shadow-xl hover:scale-105"
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
        

        </motion.div>
</motion.div>
 </>
  );
};

export default Advanceplc;
