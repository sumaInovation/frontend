import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/Home/Homepage.js";
import Cprograming from "./pages/Cprogramming/Cprogramming.js"
import Plc from "./pages/Plc/Plc.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './Image/newlogo.png'; // Tell webpack this JS file uses this image
function App() {
  return (
    <Router>
        <Topbar />
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="plc" element={<Plc/>}/>
      <Route path="programming" element={<Cprograming/>}/>
      </Routes>
    

      
      </Router>
    
  
   );
}

export default App;
