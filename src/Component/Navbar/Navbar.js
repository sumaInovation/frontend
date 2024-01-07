import React, { useState } from 'react'
import './navbar.css';
import logo from '../Asset/logo.png';
import menuicon from '../Asset/menu.png';
const Navbar = () => {
    const [menu,setMenu]=useState('home')
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="logo img"/>
          <p>SUMAAUTOMATIONLK</p>
        </div>
            <div className='menu-icon'>
            <img src={menuicon} alt='menu icon'/>
            </div>
           
            <ul className='nav-menu'>
            <li><a href='#' onClick={()=>setMenu('home')}>HOME</a>{menu==='home'?<hr/>:<></>}</li>
            <li><a href='#'onClick={()=>setMenu('Service')}>Serivce</a>{menu==='Service'?<hr/>:<></>}</li>
            <li><a href='#'onClick={()=>setMenu('About')}>About</a>{menu==='About'?<hr/>:<></>}</li>
            <li><a href='#'onClick={()=>setMenu('Contact')}>Contact</a>{menu==='Contact'?<hr/>:<></>}</li>
            </ul>
            
       
      
   </div>
  )
}

export default Navbar
