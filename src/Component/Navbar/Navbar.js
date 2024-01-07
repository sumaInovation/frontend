import React, { useState } from 'react'
import './navbar.css'
import { FaBeer } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu,setMenu]=useState('home')
  return (
    <div className='container'>
      <input type="checkbox" id="check" className="checkbox1"/>
      <div className='header'>
       
        < div className='logo'><h2>SUMAAUTOMATIONLK</h2></div>
        <ul className='nav-menu'>
          <li onClick={()=>setMenu('home')}><Link to="/">HOME</Link>{menu==='home'?<hr/>:<></> }</li>
          <li onClick={()=>setMenu('Services')}><Link to="/Services">Services</Link>{menu==='Services'?<hr/>:<></>}</li>
          <li onClick={()=>setMenu('About')}><Link to="/About">About</Link>{menu==='About'?<hr/>:<></>}</li>
          <li onClick={()=>setMenu('Contact')}><Link to="/Contact">Contact</Link>{menu==='Contact'?<hr/>:<></>}</li>
          
        
        </ul>
        <label for="check">&#9776;</label>

      </div>
      <ul className='mobile-menu'>
      <li onClick={()=>setMenu('home')}><Link to="/">HOME</Link>{menu==='home'?<hr/>:<></> }</li>
          <li onClick={()=>setMenu('Services')}><Link to="/Services">Services</Link>{menu==='Services'?<hr/>:<></>}</li>
          <li onClick={()=>setMenu('About')}><Link to="/About">About</Link>{menu==='About'?<hr/>:<></>}</li>
          <li onClick={()=>setMenu('Contact')}><Link to="/Contact">Contact</Link>{menu==='Contact'?<hr/>:<></>}</li>
          
          
          
        </ul>
      

    </div>
  )
}

export default Navbar
