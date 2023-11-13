import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Userlogin from "./Pages/UserLogin"
import Singup from "./Pages/Singup"
import Wsclient from "./Pages/Wsclient"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="/login" element={<Userlogin/>}/>
        <Route path="/singup" element={<Singup/>}/>
        <Route path="/wsclient" element={<Wsclient/>}/>
      </Routes>
    </div>
  )
}

export default App