    import React from 'react'
    import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './page/Layout';
import Home from './page/Home';
import Blog from './page/Blog';
import Contact from './page/Contact';
import NoPage from './page/NoPage';
    
    
    const App=()=> {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="blogs" element={<Blog/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path="*" element={<NoPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    
  
}

export default App
