import React from "react";
import { motion } from "framer-motion";
import YouTube from 'react-youtube';
const Advancerobotics = () => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

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
          <ul className="text-start">
          <li>1.0 Keywords and Identifiers</li>
           <li>1.1 Operators</li>
           <li>1.2 Constants</li>
           <li>1.3 Variables</li>
           <li>1.4 Data Types</li>
           <li>1.5 Precedence of Operators</li>
           <li>1.6 Scope and Lifetime of Variables</li>
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
            Control Statement and Expressions
          </h2>
         < ul className="text-start">

          <li>2.0 Decision Making using if statement</li>
          
          <li>2.1 Types of if …else block</li>
          
          <li>2.2 Switch case Block</li>
          
          <li>2.3 Arithmetic Expressions</li>
          
          <li>2.4 Evaluation of Expressions</li>
          
          <li>GOTO statement</li>
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
            Looping
          </h2>
          <ul className="text-start">
          <li>3.0 Concept of Loop</li>
          <li>3.1 For loop</li> 
          <li>3.2 While loop</li> 
          <li>3.3 Do while loop</li> 
          <li>3.4 Jumping in Loop</li>
          <li>3.5 break and continue statement</li>
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
            Arrays and String
          </h2>
          <ul className="text-start">
          <li>4.0 Introduction of Array & String</li>
          <li>4.1 One - D Array</li> 
          <li>4.2 Two - D Array</li>
          <li>4.3 Multidimensional Array</li>
          <li>4.3 String</li>
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
            Functions
          </h2>
          <ul className="text-start">
          <li>5.0 Concept of Function</li>
          <li>5.1 Type of Functions</li>
          <li>5.2 User Defined Function</li>
          <li>5.3 System Define Functions</li>
          <li>5.4 Types of parameter</li>
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
            Pointers
          </h2>
          <ul className="text-start">
          <li>6.0 Need of Pointers</li>
          <li>6.1 Types of Pointers</li>
          <li>6.2 Pointer Expression</li>
          <li>6.3 Arrays of Pointers</li>
          <li>6.7 Pointers and Functions</li>
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
            Structure and Unions
          </h2>
          <ul className="text-start">
          <li>7.0 Need of Structure</li>
          <li>7.1 Implementing Structure Variable</li>
           <li>7.2 Arrays of Structure</li>
           <li>7.3 Structure within Structure</li>
          <li>7.4 Introduction of Unions</li>
        </ul>
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
          <ul className="text-start">
          <li>8.0 Opening and Closing File</li>
          <li>8.1 Input / Output operations on File</li>
          <li>8.2 Command Line Arguments</li>
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
            Dynamic Memory Allocation
          </h2>
        <ul className="text-start">
        <li>9.0 Concept of Dynamic Allocation</li>
         <li>9.1 Implementing Malloc and Calloc Functions</li>
         <li>9.2 Releasing the free space</li>
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
            Introduction to Object Oriented Programming
          </h2>
          <ul className="text-start">
          <li>10.0 Concept of OOP</li>
         
          <li>10.1 Features of OOP</li>
      
          <li>10.2 Custom Libbaries</li>
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
            Introduction to WEB
          </h2>
          <ul className="text-start">
          <li>11.0 HTTP</li>
          <li>11.2 HTTP Web Server</li>
          <li>11.3 Websockets & Sockets IO</li>
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
            Practicals
          </h2>
          <h3 className="font-bold">Arduino base Motor Controlling</h3>
          <ul className="text-start">
          <li>12.1 DC motor controlling</li>
          <li>12.2 Stepper Motor Controlling</li>
          <li>12.3 PWM Base Controlling technique</li>
          <li>12.4 Servo Motor Controlling</li> 
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
            Practicals
          </h2>
          <ul className="text-start">
          <li><h3 className="font-bold">RS 232 Communication on Arduino</h3></li>
          <li>13.0 DC Motor Speed & Direction control via RS232</li>
          <li>13.1 Adruino to Arduino Communication</li>
          <li>13.2 Wireless Communication</li>
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
            Practicals
          </h2>
          <ul className="text-start">

          <li><h3 className="font-bold">RFID & GSM Modules</h3></li>
          <li>14.0 Home automation system controll via HTTP</li>
       
          <li>14.1 Arduino and GSM-based Security Alert message to multiple numbers</li>
        
          <li>14.2 GSM and GPS based  location tracking</li>
        
          <li>14.3 RFID and GSM-based Students Attendance<br/> System with vb.net application</li>
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
            Practicals
          </h2>
          <ul className="text-start">

          <li><h3 className="font-bold">Finger print sensor</h3></li>
          <li>15.0 Door lock system </li>
         
          <li>15.1 Students Attendance<br/> System with vb.net application</li>
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
            Practicals
          </h2>
          <ul className="text-start">
         <li> <h3 className="font-bold">Web controll Project</h3></li>
          <li>16.0 DC Motor Speed & Direction control via web</li>
           <li>16.1 Factory data monitoring through online</li>
            <li>16.2 Real time data monitoring via socket IO</li>
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
            Practicals
          </h2>
          <ul className="text-start">

          <h3 className="font-bold">STM32 Base Project</h3>
          <li>16.0 DC Motor Speed & Direction control via WIFI</li>
          
          <li>16.1 Factory data monitoring through WIFI</li>
          
          <li>16.2 Real time data monitoring via WIFI</li>
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
            Practicals
          </h2>
         < ul className="text-start">

         <li> <h3 className="font-bold">Arduino Base Project</h3></li>
          <li>17.0 Line following robot controll</li>
        
          <li>17.1 Obstacle Avoiding Robot</li>
         
          <li>17.2 Arduino-Controlled Model Elevator</li>
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
            Practicals
          </h2>
      < ul className="text-start">
          <li><h3 className="font-bold">PID Controlling</h3></li>
          <li>18.0 DC motor speed controlling via PID</li>
          <li>18.1 Surface Temparature controlling</li>
          
          </ul>
         

      
            
        </motion.div>






        
      </motion.div>
      
    </>
  );
};

export default Advancerobotics;
