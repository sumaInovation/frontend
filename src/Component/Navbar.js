// import React, {useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import logo from "../Assets/logo10.svg";

// const Navbar = () => {

//   const [nav, setNavbar] = useState(false);
//   const handlNavbar = () => {
//     setNavbar(!nav);
//   };

//   return (
//     <div className="">
//       <div className=" text-white flex items-center h-[120px] max-w-[1240px] mx-auto p-4 ">
//       <div class="bg-gray-900  col-span-12 row-span-1">
//           <div class="flex  items-center  justify-between  lg:justify-evenly">
//             <div>
//               <img
//                 src={logo}
//                 alt="userimg"
//                 className=" w-[100px] lg:w-[400px]  h-36"
//               />
//             </div>
//             <div>

//               <div className=' gap-10 hidden lg:flex  '>

//                 <div class="w-full flex gap-2">
//                 <button class=" flex gap-2 px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">
//                     HOME
//                   </button>
//                   <button class=" flex gap-2 px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">
//                     PLC
//                   </button>
//                   <button class="px-6 py-3  text-white  text-md flex leading-tight whitespace-nowrap">
//                     Kids Robotics
//                   </button>
//                   <button class="px-6 py-3  text-white  text-md flex leading-tight whitespace-nowrap">
//                     Adavance Robotics
//                   </button>
//                   <button class="px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">
//                     ONLINE
//                   </button>
//                   <button class=" flex gap-2 px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">


//                     WORKSHOP
//                   </button>

//                 </div>



//               </div>
//             </div>


//             {/* Warpping serch box and serch icon usong div */}
//             <div className='flex text-white gap-2'>
//               <input class="mx-4 w-1/8 border rounded-md px-4 py-2 bg-slate-900" type="text" placeholder="Search" />
//               <svg width="100px" height="50px" viewBox="0 0 24 24">
//                 <g
//                   fill="none"
//                   fillRule="evenodd"
//                   stroke="white"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M13.5 8.5 A5 5 0 0 1 8.5 13.5 A5 5 0 0 1 3.5 8.5 A5 5 0 0 1 13.5 8.5 z" />
//                   <path d="M17.571 17.5L12 12" />
//                 </g>
//               </svg>

//               <div class="w-full flex gap-2">
//                 <button class="px-6 py-3 bg-green-900 text-white  rounded-3xl text-lg leading-tight whitespace-nowrap">
//                   Sign Up
//                 </button>
//                 <button class="px-6 py-3 bg-slate-500 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
//                   Log in
//                 </button>
//               </div>


//               <button class="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden " >
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                     d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>

//             </div>


//           </div>
//         </div>




//         <div
//           onClick={handlNavbar}
//           className="text-[#00df9a] fixed right-0 block lg:hidden "
//         >
//           {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
//         </div>


//         <div
//           className={
//             nav
//               ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-100/50 h-full ease-out duration-500 bg-[#e6eae6de] z-40 "
//               : "fixed hidden"
//           }
//         >

//           <ul className="p-20 uppercase text-[#0c0c0cbf] font-bold">
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/" onClick={handlNavbar}>
//                 HOME
//               </Link>
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/plc" onClick={handlNavbar}>
//                 PLC{" "}
//               </Link>{" "}
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/cpro" onClick={handlNavbar}>
//                 Robotics
//               </Link>
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/online" onClick={handlNavbar}>
//                 Online{" "}
//               </Link>
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/kids" onClick={handlNavbar}>
//                 Kid Robotics{" "}
//               </Link>
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/workshop" onClick={handlNavbar}>
//                 Workshop
//               </Link>{" "}
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/test" onClick={handlNavbar}>
//                 API
//               </Link>{" "}
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/about" onClick={handlNavbar}>
//                 About
//               </Link>
//             </li>
//             <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
//               <Link to="/registration" onClick={handlNavbar}>
//                 Register
//               </Link>
//             </li>

//             <li className="p-4 border-b hover:bg-sky-700 border-b-gray-600">
//               <Link to="/registration" onClick={handlNavbar}>
//                 SING UP
//               </Link>
//             </li>


//               <li className="p-4 border-b hover:bg-sky-700 border-b-gray-600">
//             <Link to="/singin"   onClick={handlNavbar}>SING IN</Link>
//             </li>



//             <li className="p-4 hover:bg-sky-700">
//               <Link to="/contact" onClick={handlNavbar}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


/******************************************* */


// const Navbar = () => {

//  return(
//   <>
//   <div class="bg-gray-900  col-span-12 row-span-1">
//           <div class="flex  items-center  justify-between  lg:justify-evenly">
//             <div>
//               <img
//                 src={logo}
//                 alt="userimg"
//                 className=" w-[100px] lg:w-[400px]  h-36"
//               />
//             </div>
//             <div>

//               <div className=' gap-10 hidden lg:flex  '>

//                 <div class="w-full flex gap-2">
//                 <button class=" flex gap-2 px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">
//                     HOME
//                   </button>
//                   <button class=" flex gap-2 px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">
//                     PLC
//                   </button>
//                   <button class="px-6 py-3  text-white  text-md flex leading-tight whitespace-nowrap">
//                     Kids Robotics
//                   </button>
//                   <button class="px-6 py-3  text-white  text-md flex leading-tight whitespace-nowrap">
//                     Adavance Robotics
//                   </button>
//                   <button class="px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">
//                     ONLINE
//                   </button>
//                   <button class=" flex gap-2 px-6 py-3  text-white  text-md leading-tight whitespace-nowrap">


//                     WORKSHOP
//                   </button>

//                 </div>



//               </div>
//             </div>


//             {/* Warpping serch box and serch icon usong div */}
//             <div className='flex text-white gap-2'>
//               <input class="mx-4 w-1/8 border rounded-md px-4 py-2 bg-slate-900" type="text" placeholder="Search" />
//               <svg width="100px" height="50px" viewBox="0 0 24 24">
//                 <g
//                   fill="none"
//                   fillRule="evenodd"
//                   stroke="white"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M13.5 8.5 A5 5 0 0 1 8.5 13.5 A5 5 0 0 1 3.5 8.5 A5 5 0 0 1 13.5 8.5 z" />
//                   <path d="M17.571 17.5L12 12" />
//                 </g>
//               </svg>

//               <div class="w-full flex gap-2">
//                 <button class="px-6 py-3 bg-green-900 text-white  rounded-3xl text-lg leading-tight whitespace-nowrap">
//                   Sign Up
//                 </button>
//                 <button class="px-6 py-3 bg-slate-500 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
//                   Log in
//                 </button>
//               </div>


//               <button class="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden " >
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24"
//                   stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                     d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>

//             </div>


//           </div>
//         </div>

//   </>
//  )

// }

// export default Navbar;



// import React, { useState } from 'react';
// import logo from "../Assets/logo10.svg";

// const Navbar=()=>{
//   return(

// )
// };
// export default Navbar;

import logo from "../Assets/logo10.svg";

const Navbarr = () => {
  return (<>



    <nav class="bg-white ">
      <div class="bg-gray-900  flex flex-wrap items-center justify-between   fixed top-0 left-0  w-full z-50 ">
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="userimg" className=" w-[100px]  h-auto"
          />

        </a>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex gap-3">

          <li>
              <button class="px-6 py-3 bg-green-500 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
               Sing Up
              </button>
            </li>

            <li>
              <button class="px-6 py-3 bg-lime-900 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
                Log in
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>


  </>)


};
export default Navbarr