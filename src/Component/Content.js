import React from "react";
import logo from "../Assets/hero-img.png";
const Content = () => {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={logo} className='w-[500px] mx-auto my-4' />
       <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[#00df9a] font-bold text-4xl px-4 py-4'>PLC & Advance Robotic Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ratione
          expedita suscipit iusto consequatur in explicabo laborum fuga qui,
          ullam id itaque voluptas. Doloribus fugit fugiat vel sint, quam
          repellat?
        </p>
        <button  className='bg-[#151515] w-[200px] rounded-md mx-auto my-6 py-3 text-white' >Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
