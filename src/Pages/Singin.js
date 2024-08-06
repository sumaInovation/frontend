import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../Assets/Nav_Logo.svg";
// Login throgh google 
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";



export default function Singup() {
  const [user,setUser]=useState(null);
  function handleSingout(event){
    setUser(null);
    document.getElementById("singIn").hidden=false;

  }
  return(
    <>
   <div id="singIn">
    
<GoogleLogin 
  onSuccess={credentialResponse => {
    console.log(credentialResponse.credential);
    const userObject=jwtDecode(credentialResponse.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("singIn").hidden=true;
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  
/>
</div> 
{
user && <div className="text-white">
<img src={user.picture} class="w-32 h-32 rounded-full object-cover"></img>
<button onClick={handleSingout}>sing out</button>
</div>
}

</>
  );
}
/*
export default function Singup() {
  const [isComplete, setIsComplete] = useState(0);
  const [isError, setIsError] = useState(0);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(0);
  const [isCorrectPassword, setIsPasswordCorrect] = useState(0);
  const [invalidUserName, setInvalidUserName] = useState(0);
  const Navigate = useNavigate();

  const Handlesubmit = (e) => {
    setIsComplete(1);
    e.preventDefault();
    axios
      .post("https://http-server-r3wc.onrender.com/login", { Email, Password })
      .then((res) => {
        if (!res.data.status) {
          window.localStorage.setItem("IsLogged", true);
          window.localStorage.setItem("Email", Email);
          window.localStorage.setItem("Password", Password);
          window.localStorage.setItem("UserName", res.data.Name);
          Navigate("/loginuser");
        } else {
          if (res.data.status === "Wrong Password") {
            console.log("Wrong Password");
            setIsPasswordCorrect(1);
          }
          if (res.data.status == "Error") {
            console.log("Invalid User Name");
            setInvalidUserName(1);
          }
        }
        setIsComplete(0);
      })
      .catch(() => {});
  };
  if (!isComplete) {
    return (
      <>
      
        <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="w-auto mx-auto h-36"
              // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-[#ebf4eb]">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={Handlesubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {invalidUserName && (
                  <h1 className="text-[#a43b3b]">INVALID USER NAME</h1>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {isCorrectPassword && (
                  <h1 className="text-[#a43b3b]">Wrong Password</h1>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
                {isError && (
                  <h1 className="text-2xl text-center text-rose-900">
                    Password Wrong
                  </h1>
                )}
                 <h2 className="mt-5 text-sm font-bold leading-9 tracking-tight text-center text-[#ebf4eb]">
              OR
            </h2>
              </div>
            </form>
            
   <GoogleOAuthProvider clientId="924025179828-cgrqcm6piomllg1u5tihimsa42cfkbi6.apps.googleusercontent.com">
    <GoogleLogin  
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode(credentialResponse?.credential);
        const name = decoded.name;
        const email = decoded.email;
        const profilePic = decoded.picture;
        axios
        .post("https://http-server-r3wc.onrender.com/googlesign", {email})
        .then((res) => {
           if(res.data==="OK"){
            
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        window.localStorage.setItem("IsLogged", true);
         Navigate("/");
        window.location.reload()

            }  else{
            setIsComplete(0);
           alert("INVALID USER NAME")
            
           }

            
        });





        
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
</GoogleOAuthProvider>
    
            
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="flex h-screen w-screen items-center justify-center">
          <button
            type="button"
            class="flex items-center rounded-lg bg-green-700 px-4 py-2 text-white"
            disabled
          >
            <svg
              class="mr-3 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span class="font-medium"> Processing... </span>
          </button>
        </div>
      </>
    );
  }
}
*/