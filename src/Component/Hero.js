import React from "react";
import Typed from "react-typed";
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className="text-white">
      
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center  items-center text-center">
        <motion.h1 
        
       initial={{scale:0}}
       animate={{scale:1}}
       transition={{duration:2}}
        
        className="text-[#00df9a] md:text-7xl sm:text-6xl text-1xl font-bold md:py-6 " >
          WELCOME TO SUMAAUTOMATIOIN
        </motion.h1>
        <Typed
       
          className="font-bold md:text-4xl sm:text-2xl text-1xl md:py-6"
          strings={["THE WORLD'S BEST ENGINNER"]}
          typeSpeed={120}
          backSpeed={60}
          loop
        />
        <motion.p
        
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:2,duration:2}}
        >Learn PLC & Advance Robotics with us!</motion.p>
         <motion.button 
         initial={{scale:0}}
         animate={{scale:1}}
         transition={{delay:4,duration:1}}
         
         className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' >Learn More</motion.button>
     </div>
    
    </div>
  );
};

export default Hero;
