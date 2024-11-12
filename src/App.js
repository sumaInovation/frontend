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
import Registration from "./Pages/Registration";
import Singup from "./Pages/Singin";
import UserLoggingData from "./Pages/UserLoggingData"
import Notfound from "./Pages/Notfound";
import Kids from "./Pages/Kidsrobotics"
import Scrolltop from "./Pages/Scrolltop";
import Googlelogin from "./Pages/Googlelogin"
import Test from "./Pages/WebSocketClient";
     
const App = () => {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
        <Scrolltop/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/plc" element={<Plc />} />
          <Route path="/cpro" element={<Cprogramming />} />
          <Route path="/online" element={<Online />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/singin' element={<Singup/>}/>
          <Route path="/loginuser" element={<UserLoggingData/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="/abc" element={<Googlelogin/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/*" element={<Notfound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter> 
  
    </>
  );
};

export default App;
