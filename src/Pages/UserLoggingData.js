import React from 'react'
import {useLocation} from 'react-router-dom';
import { useEffect } from "react";

const UserLoggingData = (state) => {
    const location = useLocation();
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <div className='text-white'>
        <h1>Welcome to {location.state.userName}!!!</h1>
      {location.state.verification}
    </div>
  )
}

export default UserLoggingData
