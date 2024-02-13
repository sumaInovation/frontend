
import { Select, Option } from "@material-tailwind/react";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../Assets/MyLogo.svg'
const Navbar = () => {
  const [nav, setNavbar] = useState(false);
  const handlNavbar = () => {
    setNavbar(!nav);
  };

  return (
    <div className="">
       

      <div className=" text-white flex    items-center h-[120px] max-w-[1240px] mx-auto p-4 mt-1">
        {/* <h className=" w-full text-6xl font-bold text-[#00df9a] m-4"> */}
        <img src={logo} alt="userimg" className=' w-[250px] lg:mx-auto md:w-[250px] lg:w-[400px]  h-[200px]   mb-2' />
        {/* </h> */}

        <ul className="hidden  lg:flex text-[15px]">
        <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/">HOME</Link>
          </li>
          <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/cpro">ROBORTICS</Link>
          </li>
          <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/online">ONLINE </Link>
          </li>
          <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/plc">PLC </Link>{" "}
          </li>
          <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/kids">KIDS ROBORTICS </Link>{" "}
          </li>
          <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/workshop">WORKSHOP</Link>{" "}
          </li>
          <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/contact">CONTACT</Link>
          </li>
          {/* <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/about">About</Link>
          </li> */}
          <li className="p-4 rounded-md hover:bg-sky-700">
            <Link to="/registration">SING UP</Link>
          </li>
         <li className="p-4">
            <Link to="/singin" >
              SING IN
            </Link>

          </li>
          </ul>

        <div
          onClick={handlNavbar}
          className="text-[#00df9a] fixed right-0 block lg:hidden "
        >
          {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-100/50 h-full ease-out duration-500 bg-[#e6eae6de] z-40 "
              : "fixed hidden"
          }
        >
          
          <ul className="p-20 uppercase text-[#0c0c0cbf] font-bold">
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/" onClick={handlNavbar}>
                HOME
              </Link>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/plc" onClick={handlNavbar}>
                PLC{" "}
              </Link>{" "}
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/cpro" onClick={handlNavbar}>
                Robotics
              </Link>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/online" onClick={handlNavbar}>
                Online{" "}
              </Link>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/kids" onClick={handlNavbar}>
                Kid Robotics{" "}
              </Link>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/workshop" onClick={handlNavbar}>
                Workshop
              </Link>{" "}
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/about" onClick={handlNavbar}>
                About
              </Link>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:bg-sky-700">
              <Link to="/registration" onClick={handlNavbar}>Register</Link>
            </li>
            <li className="p-4 border-b hover:bg-sky-700 border-b-gray-600">
              <Link to="/singin" onClick={handlNavbar}>
                SING IN
              </Link>
            </li>
            <li className="p-4 border-b hover:bg-sky-700 border-b-gray-600">
            <Link to="/registration" onClick={handlNavbar}>SING UP</Link>
          </li>
            <li className="p-4 hover:bg-sky-700">
              <Link to="/contact" onClick={handlNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
