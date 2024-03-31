import { useState } from "react"
import "./OfficerLogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

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
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",height:"100vh",backgroundColor:"#efeff9",position:"relative"}}>
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
