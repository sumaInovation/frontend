import React, { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Registration = () => {
  
  const [Name, setName] = useState();
  const [Course, setCourse] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Number, setNumber] = useState();
  const Navigate = useNavigate();
  const [reqdata, setReqdata] = useState(0);
  const [reg_state,setRegstate]=useState("REGISTER NOW")
  const Handlesubmit = (e) => {
    setReqdata(1);
    e.preventDefault();
 
    //Create New User

    
   axios
      .post("https://http-server-r3wc.onrender.com/registration", { Name, Number, Course, Email, Password,"Verification":false })
      .then((result) => {
        setReqdata(1)
        if (result.data ==="OK") {
          setReqdata(0);
          setRegstate("REGISTRATION SUCCUSSFULLY");
          
        } else {
          if(result.data ==="Already exsiting"){
            setRegstate("ALREADY EXSISTING");
          }else{
            setRegstate("REGISTRATION FAILED");
          }
        setReqdata(0)
        
        
      }


      })
      .catch((error) => { alert('Error') });

  };

  if (reqdata === 0) {
    return (
      <>
    
 
      <div className="grid min-h-screen bg-white place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold text-center md:text-2xl">
            {reg_state}
          </h1>
          <form onSubmit={Handlesubmit} className="mt-6">
            <div className="">
              <span className="w-1/2">
                <label
                  for="firstname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="John"
                  autocomplete="given-name"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
              <span className="w-1/2">
                <label
                  for="firstname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Phone
                </label>
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="+94 77123456"
                  autocomplete="given-name"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>

              <span className="w-1/2">
                <label
                  for="lastname"
                  className="block text-xs font-semibold text-gray-600 uppercase"
                >
                  Course
                </label>
                <input
                  onChange={(e) => setCourse(e.target.value)}
                  id="lastname"
                  type="text"
                  name="lastname"
                  placeholder="Doe"
                  autocomplete="family-name"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  required
                />
              </span>
            </div>
            <label
              for="email"
              class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@company.com"
              autocomplete="email"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="password"
              class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autocomplete="new-password"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              for="password-confirm"
              class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Confirm password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="password-confirm"
              type="password"
              name="password-confirm"
              placeholder="********"
              autocomplete="new-password"
              class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <button
              type="submit"
              class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Sign up
            </button>
            <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            <Link to="/singin">Already registered?</Link> 
            </p>
          </form>
        </div>
      </div>
      </>
    )
  }
  if (reqdata === 1) {

    return (
      <>
        
        <div class="flex h-screen w-screen items-center justify-center">
          <button type="button" class="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white" disabled>
            <svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-medium"> Processing... </span>
          </button>
        </div>



      </>
    );
  }
  if (reqdata === 2) {
    Navigate('/singin')
  }

};

export default Registration;
