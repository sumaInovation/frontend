
import './App.css';
// import Navbar from './Component/Navbar/Navbar';
import About from './Pages/About/About';
import Mainpage from './Pages/MainPage/Mainpage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
// import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
    
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
    <Route path="/"  element={<Mainpage/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Services" element={<Services/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
   {/* <Footer/> */}
    </BrowserRouter>
 

   </>
 );
}

export default App;
