import React from "react";
import { motion } from "framer-motion";
import img2 from '../Assets/kidsrobotics.jpg'
const BasicRobotics= () => {
  
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
            KIDS ROBOTICS
          </h2>
         
        <motion.img 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:2}}
        
        src={img2} className='w-[300px] bg-red  items-center align-middle'/>
         
        </motion.div>
       
</motion.div>
 </>
  );
};

export default BasicRobotics;
