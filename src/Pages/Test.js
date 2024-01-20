import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
const Test = () => {
    const [isVisible,setIsVisible]=useState(true);
    
  return (
    <>
     <button   onClick={()=>setIsVisible(!isVisible)}  className="bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3">
    {" "}
    More
  </button>
   <div className='flex'>
    {isVisible && (
      <motion.div
      className=' bg-red-700 w-[100vw] h-[200px]'
        initial={{ x:"-100vw",opacity: 0 }}
        animate={{ x:0,opacity: 1 }}
        transition={{duration:2}}
        exit={{ opacity: 0 }}
      >
         HELLO WORLD
        </motion.div>
    )}
    {!isVisible && (
  <motion.div
  className=' bg-lime-500 w-[100px] h-[200px]'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{duration:10}}
    exit={{ opacity: 0 }}
  />
)}
  </div>
</>
  )
}

export default Test
