import "./Login.css"
import Header from "../Header/Header"
import { useState } from "react";

import axios from "axios"
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

function Login(){
  const [Username,setUsername]=useState("")
  const [password,setPassword] = useState("")
  const [isLoading,setisLoading]=useState(false)


  async function LoginAction(){
    try{
      setisLoading(true)
      await delay(2500)
      const response = await axios.get(`http://127.0.0.1:8000/api/email/${Username}`);
      console.log(response.data)
      setisLoading(false)
    }catch (error){
      console.log("raja you have error ",error)
      setisLoading(false)
    }

  }
    return(
        <>
        <Header/>
        <div id="login-container">
        <div id="login-image-container">
          <img src="img/kid_login.jpeg" alt="login-kid-img"/>
        </div>
        <div id="login">
            <h2>Login</h2>
            <LoginElement LoginAction={LoginAction} setUsername={setUsername}/>
            {isLoading ?<LoadingAnimation/>:""}
        </div>
        </div>
        </>
    )
}

function LoginElement({LoginAction,setUsername}){
    return(
        <div className="login-elements">
            <div className="input-container">
            <label for="u-name">Email or Username</label>
            <input id="u-name" type="text" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="input-container">
            <label for="password" >Password</label>
            <input id="password" type="password"/>
            </div>
            <p>Forgot Password?</p>
            <div id="login-xx-container">
            <button onClick={LoginAction}>Login</button>
            <p>Not a member? Signup</p>
            </div>
        </div>
    )
}


// Loading animation
function LoadingAnimation(){
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  };


export default Login;