import React from 'react'
import './Footer.css'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { ImWhatsapp } from "react-icons/im";
const Footer = () => {
  return (
    <div class="footer">
    
    <BiLogoFacebookCircle style={{fontSize:"36px"}} />
    <BiLogoLinkedinSquare style={{fontSize:"36px"}} />
    <ImWhatsapp style={{fontSize:"36px"}}/>
  </div>
  )
}

export default Footer
