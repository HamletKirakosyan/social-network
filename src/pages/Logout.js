import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './../firebase-config';
import { useNavigate } from 'react-router-dom';

export default function Logout({setIsAuth}) {
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }
  
      return (
        <div>
          <p>Sign out </p>    
          <button 
            className='login-with-google-btn'
            onClick={signUserOut}
            >
              Logout
          </button>  
        </div>
      ) 

   
}

