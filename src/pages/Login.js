import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Login({ setIsAuth }) {

let navigate = useNavigate();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then(() => {
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    navigate("/");
  })
};



    return (
      <div>
        <p>Sign in With Google to Continue</p>    
        <button 
          className='login-with-google-btn'
          onClick={signInWithGoogle}
          >
          Sign in with Google
        </button>  
      </div>
    ) 
  
}
