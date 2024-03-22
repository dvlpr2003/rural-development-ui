import "./Login.css"
import Header from "../Header/Header"
import { useState } from "react";
import axios from "axios"
import { NavLink } from "react-router-dom";
const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);
function Login(){
  const [Username,setUsername]=useState("")
  const [password,setPassword] = useState("")
  const [isLoading,setisLoading]=useState(false)
  const [uEmpty,setuEmpty]=useState(false)
  const [pEmpty,setpEmpty]=useState(false)
  const [EError,setEError]=useState(false)
  const [PError,setPError]=useState(false)
  async function LoginAction(){
    if (Username === "") return setuEmpty(true);
    if (Username != "")  setuEmpty(false);
    if (password === "") return setpEmpty(true);
    if (password != "")  setpEmpty(false);
    try{
      setisLoading(true)
      await delay(2500)
      const response = await axios.get(`http://127.0.0.1:8000/api/email/${Username}`);
      console.log(response.data)
      if (response.data["password"] != password){
        setPError(true)
        setisLoading(false)
      };
    }catch (error){
      console.log("raja you have error ",error)
      console.log(error["response"]["data"]["detail"])
      setEError(true)
      setisLoading(false)
    }
    setisLoading(false)
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
            <LoginElement LoginAction={LoginAction} setUsername={setUsername} setPassword={setPassword} uEmpty={uEmpty} pEmpty={pEmpty} EError={EError} PError={PError}/>
            {isLoading ?<LoadingAnimation/>:""}
        </div>
        </div>
        </>
    )
}

function LoginElement({LoginAction,setUsername,setPassword,uEmpty,pEmpty,EError,PError}){
    return(
        <div className="login-elements">
            <div className="input-container">
            <label for="u-name">Email or Username</label>
            <input id="u-name" type="text" onChange={(e)=>setUsername(e.target.value)} style={uEmpty ? {border:"1px solid red"} : {border:"1px solid #c0c0c0"}}/>
            <p className="username-error" style={EError?{display:"block"}:{display:"none"}}>Eamil or Username is not found</p>
            </div>
            <div className="input-container">
            <label for="password" >Password</label>
            <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} style={pEmpty ? {border:"1px solid red"} : {border:"1px solid #c0c0c0"}}/>
            <p className="username-error" style={PError?{display:"block"}:{display:"none"}}>Incorrect password</p>
            </div>
            <p>Forgot Password?</p>
            <div id="login-xx-container">
            <button onClick={LoginAction}>Login</button>
            <p >Not a member? <NavLink to="/signup" style={{textDecoration:"none"}}>Signup</NavLink></p>
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