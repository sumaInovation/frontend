import React from "react";
import { motion } from "framer-motion";

const Advancerobotics = () => {
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
            Introduction of Programming Languages
          </h2>
          Types of Languages
          <br />
          Evolution of 'C' Language
          <br />
          Structure of a ‘C’ Program
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
            Basic C/C++
          </h2>
          1.0 Keywords and Identifiers
          <br /> 1.1 Operators
          <br /> 1.2 Constants
          <br />
          1.3 Variables
          <br />
          1.4 Data Types
          <br /> 1.5 Precedence of Operators
          <br /> 1.6 Scope and Lifetime of Variables
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
            Control Statement and Expressions
          </h2>
          2.0 Decision Making using if statement
          <br />
          2.1 Types of if …else block
          <br />
          2.2 Switch case Block
          <br />
          2.3 Arithmetic Expressions
          <br />
          2.4 Evaluation of Expressions
          <br />
          GOTO statement
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
            Looping
          </h2>
          3.0 Concept of Loop
          <br />
          3.1 For loop <br />
          3.2 While loop <br />
          3.3 Do while loop <br />
          3.4 Jumping in Loop
          <br />
          3.5 break and continue statement
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
            Arrays and String
          </h2>
          4.0 Introduction of Array & String
          <br />
          4.1 One - D Array <br />
          4.2 Two - D Array
          <br />
          4.3 Multidimensional Array
          <br />
          4.3 String
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
            Functions
          </h2>
          5.0 Concept of Function
          <br />
          5.1 Type of Functions
          <br />
          5.2 User Defined Function
          <br />
          5.3 System Define Functions
          <br />
          5.4 Types of parameter
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
            Pointers
          </h2>
          6.0 Need of Pointers
          <br />
          6.1 Types of Pointers
          <br />
          6.2 Pointer Expression
          <br />
          6.3 Arrays of Pointers
          <br />
          6.7 Pointers and Functions
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
            Structure and Unions
          </h2>
          7.0 Need of Structure
          <br />
          7.1 Implementing Structure Variable
          <br />
          7.2 Arrays of Structure
          <br />
          7.3 Structure within Structure <br />
          7.4 Introduction of Unions
          <br />
          7.5 Diffrent between union & structure
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
            File Handling using 'C'
          </h2>
          8.0 Opening and Closing File
          <br />
          8.1 Input / Output operations on File
          <br />
          8.2 Command Line Arguments
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
            Dynamic Memory Allocation
          </h2>
          9.0 Concept of Dynamic Allocation
          <br />
          9.1 Implementing Malloc and Calloc Functions
          <br />
          9.2 Releasing the free space
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
            Introduction to Object Oriented Programming
          </h2>
          10.0 Concept of OOP
          <br />
          10.1 Features of OOP
          <br />
          10.2 Custom Libbaries
          <br />
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
            Introduction to WEB
          </h2>
          11.0 HTTP
          <br />
          11.2 HTTP Web Server
          <br />
          11.3 Websockets & Sockets IO
          <br />
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
            Practicals
          </h2>
          <h3 className="font-bold">Arduino base Motor Controlling</h3>
          12.1 DC motor controlling
          <br />
          12.2 Stepper Motor Controlling
          <br />
          (PWM Base Contrlling technique)
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
            Practicals
          </h2>
          <h3 className="font-bold">RS 232 Communication on Arduino</h3>
          13.0 DC Motor Speed & Direction control via RS232
          <br />
          13.1 Adruino to Arduino Communication<br/>
          <br/>
          13.2 Wireless Communication
            
        </motion.div>
      </motion.div>
    </>
  );
};

export default Advancerobotics;
