import React from 'react'
import './mainpage.css'
import logo from './newlogo.png'
const Mainpage = () => {
  return (
  <>
     
    <div className='container'>
      <div className='banner'>
     <img src={logo}></img>


      </div>
      <div className='card1'>
        <h2>PLC Programming</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, facilis.</p>
      </div>
      <div className='card2'>
        <h2>C/C++ Programming</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, facilis.</p>
        </div>
      <div className='card3'>
      <h2>Online Courses</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, facilis.</p>
      </div>
      <div className='card4'>
      <h2>Industrial Workshop</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, facilis.</p>
      </div>
    </div>
    </>
  )
}

export default Mainpage
