import React from 'react'
import './Home.css'
import log from './picture/hero-img.png'
const Home = () => {
  return (
    <>
    
  <header className="container">

<div className="hero">
  <section class="hero-left">
    <h1>WELCOME TO SUMAAUTOMATIONLK</h1>
    <p>
      We Are conducting PLC & Industrial Automation courses 
      
    </p>

    <a href="#">Get Started</a>
  </section>

  <section className="right">
    <img src={log} alt="Hero illustration" />
  </section>
</div>
</header>
      
    </>
  )
}

export default Home
