import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { auth } from '../firebase';
import "./login.css"
const Login = () => {
const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");

  const handleSignIn = (e)=>{
    e.preventDefault();


    auth 
    .signInWithEmailAndPassword(email,password)
    .then((auth)=>{

      if(auth){
      navigate("/")
      }
    })
    .catch((error)=>alert(error.message))
  }

  const handleRegister = (e)=>{
    e.preventDefault()


    auth 
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth)

      if(auth){
      navigate("/")
      }
    })
    .catch((error)=>alert(error.message))
    
  }
  return (
    <div className='login'>


      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className='login__logo' />
       <div className='login__container'>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" placeholder='Enter Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button className='login__signInButton' type='submit' onClick={handleSignIn}>Sign In</button>
         
        </form>
        <p>
            By Signing-In you agree to AMAZON FAKE 
            Clone Conditions  of Use & Sale.Please 
            see out Privacy Notice,our Cookies Notice
            and our Interest-Based Ads Notice
          </p>
          <button className='login__registerButton' type='submit' onClick={handleRegister}> Create your Amazon Account</button>

       </div>
    </div>
  )
}

export default Login