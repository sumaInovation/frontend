import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/Home/Homepage.js";
import Plc from "./pages/Plc/Plc.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './Image/newlogo.png'; // Tell webpack this JS file uses this image
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Route path="/" element={<Homepage />} />
      <Route path="plc" element={<Plc/>}/>
      </BrowserRouter>
    
  
   );
}

export default App;
