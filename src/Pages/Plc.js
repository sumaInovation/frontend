import React from "react";

const Plc = () => {
  return (
    <div>
    <div className="w-full py-[10rem] bg-white">
      <h2 className="py-8 text-5xl font-bold text-center md:text-7xl text-[#009B77]">
        PLC PROGRAM
      </h2>
      <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2 gap-8">
        <div className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
        <h2 className="py-8 font-bold text-center text-2xl md:text-3xl text-[#6b5b95]">Basic Course</h2>
        <p className='font-semibold text-center text-[1.5rem]'>
          Duration:4 Months<br/>
          Dates:Every Sunday 8.00AM-5.00PM<br/>
          Fees:25000LKR
        </p>
        <p>Can be pay on 4 months</p>
        </div>
        <div className="flex flex-col w-full p-4 my-4 duration-75 rounded-lg shadow-xl hover:scale-105">
        <h2 className="py-8 font-bold text-center text-1xl md:text-3xl text-[#6b5b95]">Advance Course</h2>
        <p className='font-semibold text-center text-[1.5rem]'>
          Duration:4 Months<br/>
          Dates:Every Sunday 8.00AM-5.00PM<br/>
          Fees:30000LKR
        </p>
        <p>Can be pay on 4 months</p>
        </div>
      </div>
    </div>

{/* Navbar */}
<div>




   
 
<ul class="block text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
    <li class="w-full ">
        <a  onClick={()=>{alert('hello')}}  href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">SYLABUS</a>
    </li>
    <li class="w-full">
        <a onClick={()=>{alert('hello')}}  href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">GALLERY</a>
    </li>
    <li class="w-full">
        <a onClick={()=>{alert('hello')}}  href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">More Deatils</a>
    </li>
   
</ul>


  
</div>












    
    </div>
  );
};

export default Plc;
