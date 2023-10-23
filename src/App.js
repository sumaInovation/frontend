import {Route, Routes } from 'react-router-dom';
import './App.css';
import login from './Pages/login';
function App() {
return (

<Routes>
<Route path="/login" component={login}/>

</Routes>

)
}


export default App;
