import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Plc from "./Pages/Plc";
import Cprogramming from "./Pages/Cprogramming";
import Online from "./Pages/Online";
import Workshop from "./Pages/Workshop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
     
const App = () => {
  return (
    <>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="plc" element={<Plc />} />
          <Route path="/cpro" element={<Cprogramming />} />
          <Route path="/online" element={<Online />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
  
    </>
  );
};

export default App;
