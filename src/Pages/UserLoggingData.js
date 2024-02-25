import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import axios from "axios";

const UserLoggingData = (state) => {
  const location = useLocation();
  const user=window.localStorage.getItem("IsLogged")
  const Email=window.localStorage.getItem("email");
  const ProfURL=window.localStorage.getItem("profilePic");
  const name=window.localStorage.getItem("name")
  const [Name,setNAme]=useState("");
  const [course,setCourse]=useState("")
  const [userData,setUserData]=useState({})
  const Navigate=useNavigate()
  useEffect(()=>{
    
    axios
    .post("https://http-server-r3wc.onrender.com/fetchdata", { Email})
    .then(res => {
      
       setNAme(res.data.Name);
       setCourse(res.data.Course)
       setUserData(res.data)
      
    })
   
  })
  
  
  if(window.localStorage.getItem("IsLogged")){
    return (
      <>

      <div className='text-white'>
     <pre>{JSON.stringify(userData, null, 2)}</pre>
    
      </div>
      </>

     
 
 )
  }
  else{
    Navigate("/*")
  }

}

export default UserLoggingData
