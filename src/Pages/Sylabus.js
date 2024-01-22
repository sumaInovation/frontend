import React from "react";
import { motion } from "framer-motion";
const Sylabus = () => {
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
      


      </motion.div>
    </>
  );
};

export default Sylabus;
