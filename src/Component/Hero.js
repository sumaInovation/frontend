import React from "react";
import Typed from "react-typed";
const Hero = () => {
  return (
    <div className="text-white">
      
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center  items-center text-center">
        <h1 className="text-[#00df9a] md:text-7xl sm:text-6xl text-1xl font-bold md:py-6 " >
          WELCOME TO SUMAAUTOMATIOIN
        </h1>
        <Typed
          className="font-bold md:text-4xl sm:text-2xl text-1xl md:py-6"
          strings={["THE WORLD'S BEST ENGINNER"]}
          typeSpeed={120}
          backSpeed={60}
          loop
        />
        <p>Learn PLC & Advance Robotics with us!</p>
         <button  className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3' >Learn More</button>
     </div>
    
    </div>
  );
};

export default Hero;
