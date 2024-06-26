import "./Signup.css"
import Header from "../Header/Header"
import { useEffect, useState } from "react"

import axios from '/node_modules/axios';

import { useNavigate } from 'react-router-dom';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
export default function SignUp({isLogin}){
    const navigate = useNavigate();

    const [Fname,setFname]=useState("")
    const [Lname,setLname]=useState("")
    const [eMail,seteMail] = useState("")
    const [Mobileno,setMobileno] = useState("")
    const [AddressLine,setAddressLine]=useState("")
    const [DistrictLine,setDinstrictLine] = useState("")
    const [Postalcode,setPostalcode] = useState("")
    const [Passcode,setPasscode]=useState("")
    const [Data,setData] = useState()
    const [isLoading,setisLoading]=useState(false)
    const [isVerify,setisVerify] = useState(false)
  
    const [OTP,setOTP]=useState("") // main otp
    const [LoadingG,setLodingG] = useState(false)
    useEffect (function(){
        let all_data ={
            
            fname:Fname,
            lname:Lname,
            mail:eMail,
            password:Passcode,
            phone:Mobileno,
            address:AddressLine,
            district:DistrictLine,
            pincode:Postalcode,
            otp:null
        }
        if (Fname!="" && Lname!="" && eMail!="" && Mobileno!="" && AddressLine!="" && DistrictLine!="" && Postalcode != "" && Passcode !=""){
            setData(all_data)
        }

    },[Fname,Lname,eMail,Mobileno,AddressLine,DistrictLine,Postalcode])
    async function Finalize(){
        try{
            setisLoading(true)
            await delay(2500)
            const response = await axios.post("https://dvlpr2003.pythonanywhere.com/api/signup/",Data);
            console.log(response.data)
            setisLoading(false)
            setisVerify(true)

        }catch (error){
            console.log("raja you have error",error)
            setisLoading(false)
        }
    }
    async function Verify_Otp(){
        try{
            setLodingG(true)
            const response = await axios.get(`https://dvlpr2003.pythonanywhere.com/api/email/${eMail}/otp/${OTP}/`)
            setLodingG(false)
            if(response["data"][0] === "Success"){
                setisVerify(false)
                navigate("/Login")
            };
        }catch(error){
            console.log("error",error)
            setLodingG(false)
        }
    }
    return(
        <>
        <Header isLogin={isLogin}/>
        <div id="signup-container-main">
            <div id="signup-img-container" className="signup-container">
                <img src="img/kid-signup.jpeg" alt="kid-img"/>
            </div>
            <div id="signup-element" className="signup-container">
                <div id="s-elements">
                <h2>Sign Up</h2>

                <First_Last_Name setFname={setFname} setLname={setLname}/>
                <Mail seteMail={seteMail}/>
                <Password setPasscode={setPasscode}/>
                <Phone setMobileno={setMobileno}/>
                <Address setAddressLine={setAddressLine}/>
                <District setDinstrictLine={setDinstrictLine}/>
                <Pincode setPostalcode={setPostalcode}/>
                <S_Btn Finalize={Finalize}/>
                {
                isLoading ? <LoadingAnimation/> :""
                }
                </div>
            </div>
            { isVerify ?
            <OTPVerifyPage
            OTP={OTP}
            setOTP = {setOTP}
            Verify_Otp={Verify_Otp}
            LoadingG={LoadingG}

            />
 :""}
 {/* <OTPVerifyPage/> */}
        </div>
        </>
    )
}
function First_Last_Name({setFname,setLname}){
    return(
        <div id="fname-lname">
            <input placeholder="Fname" onChange={(e)=>setFname(e.target.value)}/>
            <input placeholder="Lname" onChange={(e)=>setLname(e.target.value)}/>
        </div>
    )
}
function Mail({seteMail}){
    return(
        <>
        <input placeholder="Mail" onChange={(e)=>seteMail(e.target.value)}/>
        </>
    )
}
function Password({setPasscode}){
    return(
        <>
        <input placeholder="Password" onChange={(e)=>setPasscode(e.target.value)}/>

        </>
    )
}
function Phone({setMobileno}){
    return(
        <>
        <input placeholder="Phone" onChange={(e)=>setMobileno(e.target.value)}/>
        </>
    )
}
function Address({setAddressLine}){
    return(
        <>
        <input placeholder="Address" onChange={(e)=>setAddressLine(e.target.value)}/>
        </>
    )
}
function District({setDinstrictLine}){
    return(
        <>
        <input placeholder="District" onChange={e=>setDinstrictLine(e.target.value)}/>
        </>
    )
}
function Pincode({setPostalcode}){
    return(
        <>
        <input placeholder="Pincode" onChange={e =>setPostalcode(e.target.value)}/>
        </>
    )
}
function S_Btn({Finalize}){
    return(
        <div id="s-btn-container">
            <button id="s-btn" onClick={Finalize}>Sign Up</button>
        </div>
    )
}

function OTPVerifyPage({Verify_Otp,setOTP,OTP,LoadingG}){
    function ClearOTP(){
        setOTP("")
    }
    function Demo(){
        Verify_Otp()
    }
    return(
        <div id="otp-container">
            <div id="otp-img-container">
            <img src="img/otp.png" id="otp-logo"/>
            </div>
            <div id="otp-input-container">
                <input type="text" value={OTP} onChange={e=>setOTP(e.target.value)}/>
            </div>
            <div id="otp-button-container">
                <button className="otp-btns" onClick={ClearOTP}>Clear</button>
                <button className="otp-btns" onClick={Demo}>Verify</button>
            </div>
            <div class="-n" style={!LoadingG?{display:"none"}:{}}></div>
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


  