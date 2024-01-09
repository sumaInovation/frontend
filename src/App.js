    import React from 'react'
    import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './page/Layout';
import Home from './page/Home';
import Contact from './page/Contact';
import NoPage from './page/NoPage';
import Services from './page/Services';
import About from './page/About';
import Footer from './page/Footer';
    
    
    const App=()=> {
      return (
        <BrowserRouter>
          <Routes>  
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="Services" element={<Services/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="About" element={<About/>}/>
              <Route path="*" element={<NoPage/>} />
            </Route>
          </Routes>
          <Footer/>   
        </BrowserRouter>
      );
    
  
}

export default App
