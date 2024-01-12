import React from "react";
import plc from "../Assets/plc.jpg";
import mc from "../Assets/plc.jpg";
import online from "../Assets/plc.jpg";
import workshop from "../Assets/plc.jpg";
const Card = () => {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-75">
          <img src={plc} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="font-bold text-6xl py-8 text-center">
            PLC Programming
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' > More</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-75">
          <img src={plc} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="font-bold text-6xl py-8 text-center">
            PLC Programming
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' > More</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-75">
          <img src={plc} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="font-bold text-6xl py-8 text-center">
            PLC Programming
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' > More</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105  duration-75">
          <img src={plc} className="w-[100%] mx-auto mt-[-3rem] bg-white" />
          <h2 className="font-bold text-6xl py-8 text-center">
            PLC Programming
          </h2>
          <p className="text-center">Description and price display here</p>
          <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' >More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
