import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../Assets/im1.png'
const Navbar = () => {
  const [nav, setNavbar] = useState(false);
  const handlNavbar = () => {
    setNavbar(!nav);
  };

  return (
    <div className=" text-white flex   items-center h-24 max-w-[1240px] mx-auto p-4 ">
      {/* <h className=" w-full text-6xl font-bold text-[#00df9a] m-4"> */}
      <img src={logo}   className='w-[250px] md:mx-auto md:w-[300px] lg:w-[500px]' />
        {/* </h> */}

      <ul className="hidden md:flex">
        <li className="p-4 rounded-md hover:bg-sky-700">
          <Link to="/">HOME</Link>
        </li>
        <li className="p-4 rounded-md hover:bg-sky-700">
          <Link to="/cpro">Robotics</Link>
        </li>
        <li className="p-4 rounded-md hover:bg-sky-700">
          <Link to="/online">Online </Link>
        </li>
        <li className="p-4 rounded-md hover:bg-sky-700">
          <Link to="/plc">PLC </Link>{" "}
        </li>
        <li className="p-4 rounded-md hover:bg-sky-700">
          <Link to="/workshop">Workshop</Link>{" "}
        </li>
        <li className="p-4 rounded-md hover:bg-sky-700">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4 rounded-md hover:bg-sky-700">
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div
        onClick={handlNavbar}
        className="text-[#00df9a] fixed right-0 block md:hidden "
      >
        {!nav ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-100/50 h-full ease-out duration-500"
            : "fixed hidden"
        }
      >
        <ul className="p-20 uppercase text-[#3939FF]">
          <li className="p-4 border-b border-b-gray-600">
            <Link to="/" onClick={handlNavbar}>
              HOME
            </Link>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link to="/plc" onClick={handlNavbar}>
              PLC{" "}
            </Link>{" "}
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link to="/cpro" onClick={handlNavbar}>
              Robotics
            </Link>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link to="/online" onClick={handlNavbar}>
              Online{" "}
            </Link>
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link to="/workshop" onClick={handlNavbar}>
              Workshop
            </Link>{" "}
          </li>
          <li className="p-4 border-b border-b-gray-600">
            <Link to="/about" onClick={handlNavbar}>
              About
            </Link>
          </li>
          <li className="p-4">
            <Link to="/contact" onClick={handlNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
