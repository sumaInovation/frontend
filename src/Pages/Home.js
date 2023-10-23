// Home.js 
import React from 'react'; 
import { Link } from 'react-router-dom';


function Home (){ 
	return (
        <div>
          
        <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <br/>
      <Link to="contact">Click to view our contact page</Link>
      </div>
    )
} 

export default Home;
