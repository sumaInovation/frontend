import React from "react";
import Hero from "../Component/Hero";
import Content from "../Component/Content";
import Card from "../Component/Card";
import Navbar from "../Component/Navbar";
import { signInWithGoogle } from "../Firebase"
const Main = () => {
 
return (
    <>
      <Hero />
     <Content />
      <Card />
     
    </>
  );
};

export default Main;
