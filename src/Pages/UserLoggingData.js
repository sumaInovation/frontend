import React from 'react'
import {useLocation} from 'react-router-dom';
import { useEffect } from "react";

const UserLoggingData = (state) => {
    const location = useLocation();
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, ["/"]);
  return (
    <div className='text-white'>
        <h1 className='  text-center text-3xl text-[#00df9a]'>Welcome to {location.state.userName}!!!</h1>
      {location.state.verification==="not verified" && 
      <h1 className='  text-4xl text-center'>Your Account Not Veryfied!
      <br/>Please log your email and verfied account</h1>}
      {location.state.verification==="verified" && <div className='text-white'>
        HELLO
        
        
      </div>}
    </div>
  )
}

export default UserLoggingData
