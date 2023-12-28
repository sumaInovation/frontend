import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
import logo from './Image/newlogo.png'; // Tell webpack this JS file uses this image
function App() {
  return (
    <Router>
      <Topbar />
        <p><img src={logo} alt="Logo" /></p>
    </Router>
    
  
   );
}

export default App;
