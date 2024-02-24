import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../Assets/logo10.svg";
const Navbar = () => {
  const isLog = window.localStorage.getItem("IsLogged");
  const [nav, setNavbar] = useState(false);
  const handlNavbar = () => {
    setNavbar(!nav);
  };
  const isLogged = window.localStorage.getItem("IsLogged");
  const logout = () => {
    window.localStorage.removeItem("IsLogged");
    window.localStorage.removeItem("Email");
    window.localStorage.removeItem("Password");
  };
  return (
    <div className="">
      <div className=" text-white flex items-center h-[120px] max-w-[1240px] mx-auto p-4 ">
        <img
          src={logo}
          alt="userimg"
          className=" w-[150px] lg:mx-auto md:w-[250px] lg:w-[400px]  h-[150px]"
        />
        <ul className="hidden  lg:flex text-[15px] gap-3">
          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/">HOME</Link>
          </li>
          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/cpro">ROBORTICS</Link>
          </li>
          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/online">ONLINE </Link>
          </li>
          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/plc">PLC </Link>{" "}
          </li>
          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/kids">KIDS ROBORTICS </Link>{" "}
          </li>
          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/workshop">WORKSHOP</Link>{" "}
          </li>
          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/contact">CONTACT</Link>
          </li>

          <li className="p-2 rounded-md hover:bg-sky-700">
            <Link to="/registration">SING UP</Link>
          </li>
          <li className="p-2 rounded-md hover:bg-sky-700">
            {!isLog ? (
              <Link to="/singin">SING IN</Link>
            ) : (
              <Link to="/" onClick={logout}>
                SING OUT
              </Link>
            )}
          </li>
          {isLog ? (
            <li className="p-2 rounded-md hover:bg-sky-700">
              <Link to="/loginuser">
                {window.localStorage.getItem("UserName")}
              </Link>
            </li>
          ) : (
            ""
          )}
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
              <Link to="/registration" onClick={handlNavbar}>
                Register
              </Link>
            </li>

            <li className="p-4 border-b hover:bg-sky-700 border-b-gray-600">
              <Link to="/registration" onClick={handlNavbar}>
                SING UP
              </Link>
            </li>
            <li className="p-4 border-b hover:bg-sky-700 border-b-gray-600">
              {!isLog ? (
                <Link to="/singin" className="p-2 rounded-md hover:bg-sky-700 ">
                  SING IN
                </Link>
              ) : (
                <Link
                  to="/"
                  onClick={logout}
                  className="p-2 rounded-md hover:bg-sky-700"
                >
                  SING OUT
                </Link>
              )}
            </li>
            {isLog ? (
              <li className="p-2 border-b rounded-md hover:bg-sky-700 border-b-gray-600">
                <Link to="/loginuser">
                  {window.localStorage.getItem("UserName")}
                </Link>
              </li>
            ) : (
              ""
            )}
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
