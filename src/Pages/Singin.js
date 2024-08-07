// LoginForm.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation if needed
import { jwtDecode } from 'jwt-decode';
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [User,setUser]=useState(null);
  function hanldeCheck(){
    console.log(localStorage.getItem("profilePic"));
    localStorage.setItem("value","502");

  }
  
return (
  <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <div className="flex items-center justify-center my-6">
            <span className="text-gray-500">or</span>
          </div>
    <GoogleLogin
        onSuccess={credentialResponse => {
        setUser(jwtDecode(credentialResponse.credential));
        localStorage.setItem("profilePic",jwtDecode(credentialResponse.credential).picture)
        localStorage.setItem("IsLogged",true);
        }}
    onError={() => {
    console.log('Login Failed');
  }}
   >
  
  </GoogleLogin>
        </form>
      </div>
    
    </div>
    
    {

      User &&
    <div className="flex items-center justify-center  bg-gray-100">
     <img src={User.picture}  ></img>
     <button onClick={hanldeCheck}>CHECK</button>
       
     </div>
    }
    <div className="flex items-center justify-center  bg-gray-100">
      HELLO GUYS  
      {localStorage.getItem("value")}
    </div>
    </>
  );
};

export default LoginForm;
