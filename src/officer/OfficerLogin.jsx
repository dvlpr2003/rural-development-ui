import { useState } from "react"
import "./OfficerLogin.css"

import axios from '/node_modules/axios';

import { NavLink, useNavigate } from "react-router-dom";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

export default function OfficerLogin(){
    const [OfficerUserName,setOfficerUserName]=useState("")
    const [OfficerPassword,setOfficerPassword]=useState("")
    const [isLoading,setisLoading]=useState(false)
    const [uEmpty,setuEmpty]=useState(false)
    const [pEmpty,setpEmpty]=useState(false)
    const [EError,setEError]=useState(false)
    const [PError,setPError]=useState(false)
    const navigated= useNavigate();


    async function lOGINofficer(){
        if (OfficerUserName === "") return setuEmpty(true);
        if (OfficerUserName != "")  setuEmpty(false);
        if (OfficerPassword === "") return setpEmpty(true);
        if (OfficerPassword != "")  setpEmpty(false);
        try{
            setisLoading(true)
            await delay(3000)
            const response = await axios.get(`http://127.0.0.1:8000/api/officer_login/${OfficerUserName}/password/${OfficerPassword}/`)
            console.log(response.data)
            setisLoading(false)
            if (response.data["status"] === "invalid password"){
                setPError(true)
                setisLoading(false)
              } else if (response.data["status"]=="success"){
                navigated("/officer-Home")
                // setisLogin(true)
                // console.log("hi")
        
              }
        }catch(error){
            console.log(error)
            setEError(true)
            setisLoading(false)
        }
    }
    return(
        <div id="officer-main-login-con"style={{backgroundColor:"#efeff9"}}>
            <BackTOhome/>
            <OfficerLoginItems setOfficerPassword={setOfficerPassword} setOfficerUserName={setOfficerUserName} lOGINofficer={lOGINofficer} uEmpty={uEmpty} pEmpty={pEmpty} EError={EError} PError={PError}/>
            {isLoading&&<LoadingAnimation/>}

        </div>
    )
}

function OfficerLoginItems({setOfficerPassword,setOfficerUserName,lOGINofficer,uEmpty,pEmpty,EError,PError}){
    return(
        <div id="officer-login-items-controller">
            <h2>Officer Login</h2>
            <div style={{display:'flex',flexDirection:"column",justifyContent:"center",marginTop:"2.2rem"}}>
                <label htmlFor="u-name-officer" style={{marginTop:"1.3rem"}}>Username</label>
                <input text ="text"id="u-name-officer" onChange={(e)=>setOfficerUserName(e.target.value)} style={uEmpty ? {border:"1px solid red"} : {border:"1px solid #c0c0c0"}}/>
                <p className="username-error" style={EError?{display:"block",marginTop:"0.3rem"}:{display:"none"}}>Eamil or Username is not found</p>

                <label htmlFor="password-officer" style={{marginTop:"1.3rem"}}>Password</label>
                <input type="text" id="password-officer" onChange={(e)=>setOfficerPassword(e.target.value)} style={pEmpty ? {border:"1px solid red"} : {border:"1px solid #c0c0c0"}}/>
                <p className="username-error" style={PError?{display:"block"}:{display:"none"}}>Incorrect password</p>


                <span style={{marginTop:"2.5rem",fontFamily:"Assistant",color:"#4c94ff"}}>Forgot password</span>
                <div style={{marginTop:"1rem"}}>
                    <button onClick={lOGINofficer}>Login</button>
                </div>
            </div>
        </div>
    )
}
function LoadingAnimation(){
    return (
      <div className="loading-container" style={{position:"absolute"}}>
        <div className="loading-spinner"></div>
      </div>
    );
  };


  function BackTOhome(){
    return(
        <div style={{position:'absolute',bottom:"2rem",left:"1rem"}}>
            <NavLink to="/" style={{display:"flex",width:"12rem",justifyContent:"center",alignItems:"center",gap:'1rem',fontFamily:"Assistant"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" id="back-to-home" style={{height:"2rem"}}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
<span>Back to Home</span>
</NavLink>
        </div>
    )
  }