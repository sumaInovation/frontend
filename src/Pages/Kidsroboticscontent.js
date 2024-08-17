import React, { useState } from 'react'

const Kidsroboticscontent = () => {
    const [isTab,setIsTab]=useState(1);
    
  return (
    <>
 <div>
   
    <ul class="block text-sm font-medium text-center
     text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 justify-between">

        <li class="w-full ">
        <button
              onClick={() => {setIsTab(1)}}
              class="inline-block w-full p-4 text-gray-900
               bg-gray-100 rounded-lg border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4
                focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              BASIC COURSE
            </button>
        </li>
        <li class="w-full ">
        <button
              onClick={() => {setIsTab(2)}}
              class="inline-block w-full p-4 text-gray-900
               bg-gray-100 rounded-lg border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4
                focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              INTERMIDIATE COURSE
            </button>
        </li>
        <li class="w-full ">
        <button
              onClick={() => {setIsTab(0)}}
              class="inline-block w-full p-4 text-gray-900
               bg-gray-100 rounded-lg border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4
                focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              GALLERY
            </button>
        </li>
       
        
    </ul>
 </div>
    {isTab===1 && 
    <div className=" w-full p-20 my-4  duration-75 bg-[#b1ddf1] rounded-lg shadow-xl 
    text-center">
     
   <h1 className='text-2xl text-[#213bcbe4]  uppercase'>BEGINNER LEVEL(Grade 4-5)</h1>

   
  <div className="gap-20 mx-2 my-4 p-:20 mdw-full text-start lg:flex">
  
  <ul>
  <li className='text-xl text-[#291f58] uppercase font-mono ...'>Basic Electronics</li>
     <li>Concept of Voltage & Current</li>
     <li>Realation between Voltage Current & Resistance</li>
     <li>Measuring Electricity</li>
     <li>Uderstanding Electrical Connections</li>
     <li>Function of Electrical Switch</li>
    <li>Build Basic  Project by using SWITCH LED & BATTERY</li>
    </ul>
    
    <ul>
    <li className='text-xl text-[#291f58] uppercase'>Intro Programming</li>
     <li>
         What is a Program?
     </li>
     <li>Introduction to Arduino </li>
     <li>LED Blinking using Arduino Program</li>
     <li>Making simple LED patern using Arduino</li>
     {/* <li>Push buttons interface to Arduino</li> */}
     <li>LED intensity controlling</li>
     <li>Rotate DC motor</li>
    <li>Intro DC Motor Driver L293D</li>
    <li>DC Motor Speed Controlling</li>
    </ul>
   
    <ul>
    <li className='text-xl text-[#291f58] uppercase'>Intro Seven Segment</li>
     <li>
         Connection of Seven Segment
     </li>
     <li>Seven Segment interface to Arduino</li>
     <li>Display Number on Seven Segment</li>
     <li>Implement Simple Timer</li>
    </ul>
    
    <ul>
    <li className='text-xl text-[#291f58] uppercase'>Intro LCD </li>
    <li>Connection of LCD</li>
    <li>LCD interface to Arduino</li>
    <li>Print Message On LCD</li>
  </ul>
    
    </div>
    </div>
    }
  
  {isTab===2 &&    <div className="flex-col w-full p-20 my-4  duration-75 rounded-lg shadow-xl  bg-[#ffecd1]">
  <h1 className='text-3xl text-[#213bcbe4]  uppercase text-center'>Intermitiade level(Grade 6-8)</h1>

      <div className="gap-20 mx-2 my-4 p-:20 mdw-full text-start lg:flex">
      
       <ul>
       <li className='text-xl text-[#291f58] uppercase'>Desicion Making(IF condition)
        & Logical Thinking</li>
        <li>push button interfacing</li>
        <li>Intro to relay switch</li>
        <li>IR Sensor Interfaceing</li>
        <li>Proximity Sensor Interfacing</li>
        <li>Water Level Sensor Interfacing</li>
       <li>DC Motor Direction Controlling</li>
       <li>Building  Simple Motor control System by using DC Motor L293D Driver & Pushbutton</li>
       </ul>
   
       <ul>
       <li className='text-xl text-[#291f58] uppercase'>Variables  & Mathamatic Operation</li>
        <li>Analog & Digital Signal</li>
        <li>Analog Input</li>
        <li>intro to PWM</li>
        <li>small Servo motor controlling</li>
        <li>DC Moto speed controlling throug PWM</li>
       <li>LED intensity control throug Potentiometer</li>
        <li>Distance Measuring through Ultrasonic sensor</li>
        
        
       </ul>
    
        <ul>
        <li className='text-xl text-[#291f58] uppercase'>Desicion Making(IF,ELSE,ELSEIF)</li>
            <li>
                Keypad Interfacing
            </li>
            <li>Making Calculator using Keypad & LCD Display</li>
            <li>Desining Obstacle Avoiding Robot </li>
        </ul>
       
        <ul>
        <li className='text-xl text-[#291f58] uppercase'>Another Pactrical Lession</li>
            <li>
              Home Automation System
            </li>
            <li>
            Home Automation System 
            </li>
            <li>
            Home Automation System
            </li>
           
        </ul>
        </div>
  
 
 </div>
}
 </>
  )
}

export default Kidsroboticscontent
