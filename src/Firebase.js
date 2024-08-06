// Login throgh google
  //924025179828-cgrqcm6piomllg1u5tihimsa42cfkbi6.apps.googleusercontent.com 
  //648059852227-24lnanli1vbb68ctgv4rruin974kgeek.apps.googleusercontent.com
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export const signInWithGoogle = () => {

    <GoogleOAuthProvider clientId="924025179828-cgrqcm6piomllg1u5tihimsa42cfkbi6.apps.googleusercontent.com">
  

    
    <GoogleLogin  
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode(credentialResponse?.credential);
        const name = decoded.name;
        const email = decoded.email;
        const profilePic = decoded.picture;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        console.log(profilePic)
        window.location.reload()
        console.log(decoded);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
</GoogleOAuthProvider>
    
      
  };