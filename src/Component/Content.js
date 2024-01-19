import React from "react";
import logo from "../Assets/hero-img.png";
import {motion} from 'framer-motion'
const Content = () => {
  return (
    <motion.div
className="w-full px-6 py-6 bg-white " style={{border:"1px solid black"}}>
      <div className="max-w-[800px] mx-auto grid md:grid-cols-2 bg-white">
        <img src={logo}   className='w-[500px] mx-auto my-4 ' />
       <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[#00df9a] font-bold text-4xl px-4 py-4'>PLC & Advance Robotic Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ratione
          expedita suscipit iusto consequatur in explicabo laborum fuga qui,
          ullam id itaque voluptas. Doloribus fugit fugiat vel sint, quam
          repellat?
        </p>
        <button  className='bg-[#151515] w-[200px] rounded-md mx-auto my-6 py-3 text-[#00df9a]' >Learn More</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Content;
