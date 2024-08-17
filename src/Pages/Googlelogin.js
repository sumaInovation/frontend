import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

 function Googlelogin() {


    function test(){

        

         axios.get('http://localhost:3001/auth/google/callback')
         .then(function (response) {
           // handle success
           console.log(response);
         })
         .catch(function (error) {
           // handle error
           console.log(error);
         })
         .finally(function () {
           // always executed
         });




         
    }
//   const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

//   const handleLogout = async () => {
//     await axios.get('http://localhost:3001/logout');
//     navigate('/');
//   };

//   const fetchCurrentUser = async () => {
//     const res = await axios.get('http://localhost:3001/current_user');
//     console.log(res.data);
//   };

//   React.useEffect(() => {
//     fetchCurrentUser();
//   }, []);

  return (
    <div className="text-white">
      <h1>React Google Login</h1>
      <button onClick={handleLogin}>Login with Google</button>
      <br></br>
      <button >Logout</button>
    </div>
  );
 }

export default Googlelogin;
