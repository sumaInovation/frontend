import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/Home/Homepage.js";
import Plc from "./pages/Plc/Plc.js";
import { BrowserRouter as Router,Route } from "react-router-dom";
import logo from './Image/newlogo.png'; // Tell webpack this JS file uses this image
function App() {
  return (
    <Router>
      <Topbar />
      
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/plc">
          <Plc />
        </Route>
        
        
      
    
    </Router>
    
  
   );
}

export default App;
