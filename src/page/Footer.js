import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="footer">
     <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">Tel:+94762183549</a></li>
            <li><a href="#">Email:<br/>sumaautomation@gmail.com</a></li>
            <li><a href="#">Address:<br/>Pahalagama Rd,Gampahaga</a></li>
            {/* <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>online shop</h4>
          <ul>
            <li><a href="#">PLC</a></li>
            <li><a href="#">Arduino</a></li>
            <li><a href="#">Arduino Modules</a></li>
            <li><a href="#">PLC Modules</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
     </div>
  </div>
      
    </>
  )
}

export default Footer
