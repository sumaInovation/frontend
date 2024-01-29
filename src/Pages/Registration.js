
import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Registration = () => {
const [Fname,setFName]=useState();
const [Lname,setLName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const Navigate =useNavigate()
const Handlesubmit=(e)=>{
e.preventDefault();
var namef;
axios.post('https://http-server-r3wc.onrender.com/',{Fname,Lname,email,password})
.then(result=>{console.log(result.Lname); namef=result.Fname})
.catch(error=>{})
if(namef==='sumanga'){Navigate('/')}
}


  return (

      


<div className="grid min-h-screen bg-white place-items-center">
  <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
    <h1 className="text-xl font-semibold text-center md:text-2xl">REGISTER NOW 
    
    </h1>
    <form  onSubmit={Handlesubmit} className="mt-6">
      <div className="flex justify-between gap-3">
        <span className="w-1/2">
          <label for="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
          <input onChange={e=>setFName(e.target.value)} id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span className="w-1/2">
          <label for="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
        <input onChange={e=>setLName(e.target.value)} id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>
      <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
      <input 
      onChange={e=>setEmail(e.target.value)}
      id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
      <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
      <input  onChange={e=>setPassword(e.target.value)} id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
      <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
        Sign up
      </button>
      <p className="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
    </form>
  </div>
</div>

)
}

export default Registration
