import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-white  h-24 max-w-[1240px] mx-auto p-4">
       
        <h className="w-full text-2xl font-bold text-[#00df9a] m-4">SUMAAUTOMATIOLK</h>
        <p className='m-4'>Address:<br/>No 40/C,<br/>Pahalagama Rd,<br/>Gampaha</p>
        <div className='flex gap-2 m-4 md:justify-between'>
        <FaDribbbleSquare size={30}/>
        <FaFacebookSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaInstagram size={30}/>
        <FaTwitterSquare size={30}/>
        <FaWhatsappSquare size={30}/>
        </div>
     
    </div>
  );
};

export default Footer;
