import React from "react";
import plc from "../Assets/plc.jpg";
import mc from "../Assets/mc.jpg";
import workshop from "../Assets/workshop.jpg";
import online from "../Assets/online.jpg";
const Card = () => {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8">
        <div className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img src={plc} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="py-8 text-6xl font-bold text-center">
            PLC Programming
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' > More</button>
        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img src={mc} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="py-8 text-6xl font-bold text-center">
            C/C++ Programming
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' > More</button>
        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img src={workshop} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="py-8 text-6xl font-bold text-center">
            Industrial Workshop
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' > More</button>
        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
          <img src={online} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="py-8 text-6xl font-bold text-center">
            Online Courses
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' >More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
