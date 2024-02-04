import React from 'react'
import {useLocation} from 'react-router-dom';
const UserLoggingData = (state) => {
    const location = useLocation();
  return (
    <div className='text-white'>
        <h1>Welcome to {location.state.userName}!!!</h1>
      {location.state.verification}
    </div>
  )
}

export default UserLoggingData
