import "./Signup.css"
import Header from "../Header/Header"
import { useEffect, useState } from "react"
import axios from "axios"
const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
export default function SignUp(){
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
    // otp
    const[OTP1,setOTP1] = useState("")
    const[OTP2,setOTP2] = useState("")
    const[OTP3,setOTP3] = useState("")
    const[OTP4,setOTP4] = useState("")
    const[OTP5,setOTP5] = useState("")
    const[OTP6,setOTP6] = useState("")
    const [OTP,setOTP]=useState("") // main otp
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
            const response = await axios.post("http://127.0.0.1:8000/api/signup/",Data);
            console.log(response.data)
            setisLoading(false)
            setisVerify(true)

        }catch (error){
            console.log("raja you have error",error)
            setisLoading(false)
        }
    }
    async function Verify_Otp(){
        setOTP(OTP1+OTP2+OTP3+OTP4+OTP5+OTP6)

        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/email/${eMail}/otp/${OTP}/`)
            if(response["data"][0] === "Success") setisVerify(false);
        }catch(error){
            console.log("error",error)

        }
    }
    return(
        <>
        <Header/>
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
            setOTP1={setOTP1}
            setOTP2={setOTP2}
            setOTP3={setOTP3}
            setOTP4={setOTP4}
            setOTP5={setOTP5}
            setOTP6={setOTP6}
            OTP1={OTP1}
            OTP2={OTP2}
            OTP3={OTP3}
            OTP4={OTP4}
            OTP5={OTP5}
            OTP6={OTP6}
            Verify_Otp={Verify_Otp}

            />
 :""}
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

function OTPVerifyPage({setOTP1,setOTP2,setOTP3,setOTP4,setOTP5,setOTP6,OTP1,OTP2,OTP3,OTP4,OTP5,OTP6,Verify_Otp}){
    function ClearOTP(){
        setOTP1("")
        setOTP2("")
        setOTP3("")
        setOTP4("")
        setOTP5("")
        setOTP6("")
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
                <input type="text" maxLength={"1"} value={OTP1} onChange={e=>setOTP1(e.target.value)}/>
                <input type="text" maxLength={"1"} value={OTP2} onChange={e=>setOTP2(e.target.value)}/>
                <input type="text" maxLength={"1"} value={OTP3} onChange={e=>setOTP3(e.target.value)}/>
                <input type="text" maxLength={"1"} value={OTP4} onChange={e=>setOTP4(e.target.value)}/>
                <input type="text" maxLength={"1"} value={OTP5} onChange={e=>setOTP5(e.target.value)}/>
                <input type="text" maxLength={"1"} value={OTP6} onChange={e=>setOTP6(e.target.value)}/>
            </div>
            <div id="otp-button-container">
                <button onClick={ClearOTP}>Clear</button>
                <button onClick={Demo}>Verify</button>
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


  