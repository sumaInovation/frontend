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
import Dropdown from '../Component/Dropwon'

const Navbarr = () => {
  return (<>

      <div class="bg-gray-900  flex flex-wrap items-center justify-between   fixed top-0 left-0  w-full z-50 ">
        {/* LOGO */}
        
        <div>
        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="userimg" className=" w-[100px]  h-auto"
          />

        </a>
        </div>
        <div>
             {/* Serch box */}
             <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
                  <input
                    type="search"
                    className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2" />
                  
                  {/* <!--Search icon--> */}
                  <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clipRule="evenodd" />
                    </svg>
                  </span>
                  </div>
        </div>
       
        {/* Mobile navbar */}
        <div>
        <button data-collapse-toggle="navbar-default" type="button" class=" items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        </div>
        
        {/* Large screen navbar */}
        <div className="hidden lg:flex  ">
          <ul>
           
          <button class="px-6 py-3  text-white  text-lg leading-tight whitespace-nowrap">
                <a href="/">
                HOME
                  </a>
          </button>
          
            
              <button class="px-6 py-3  text-white  text-lg leading-tight whitespace-nowrap">
                <a href="/plc">
                PLC
                </a>
              </button>
            
              <button class="px-6 py-3  text-white  text-lg leading-tight whitespace-nowrap">
                <a href="/test">
               API
                  </a>
              </button>
          
              <Dropdown option={"ROBOTICS"} item1={"Advance Robotics"} item2={"Kids Robotics"}
              path1={"/cpro"} path2={"/kids"}/>
         

              <Dropdown option={"More"} item1={"ONLINE COURSE"} item2={"WORKSHOP"} path1={"/online"}
                path2={"/workshop"} />

               {/* Sing UP */}
              <button class="m-2 px-6 py-3 bg-green-500 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
                Sing Up
              </button>
               {/* Sing In */}
              <button class="m-2 px-6 py-3 bg-lime-900 text-white rounded-3xl text-lg leading-tight whitespace-nowrap">
                Log in
              </button>
              </ul>
              </div>
              



  </div>
  </>)


};
export default Navbarr