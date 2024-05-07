import axios from "axios"
import "./UserLoginPassword.css"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";


export default function ForgetPassword(){
    const navigated = useNavigate();
    const [fGmail,setfGmail]=useState("")
    const [Redm,setRedm] = useState(false)
    const [Load,setLoad]=useState(false)
    const [otppg,setotppg] = useState(false)
    const [Otp,setOtp]=useState("")
    const [Success,setSuccess] = useState(false)
    async function Sen(){
        try{
            setLoad(true)
            const response = await axios.post(`https://dvlpr2003.pythonanywhere.com/api/forgetpassword/${fGmail}/`)
            console.log(response.data)
            setLoad(false)
            setotppg(true)
        }
        catch (error){
            console.log(error)
            setRedm(true)
            setLoad(false)

        }
    }
    async function Ten(){
        try{
            setLoad(true)
            const response = await axios.get(`https://dvlpr2003.pythonanywhere.com/api/forget/verify/${fGmail}/${Otp}/`)
            console.log(response.data)
            setLoad(false)
            setotppg(true)
            setSuccess(true)
            setRedm(false)
            navigated("/Login")





        }
        catch (error){
            console.log(error)
            setRedm(true)
            setLoad(false)
            // setSuccess(false)

        }
    }

    return(
        <>
        <Header/>
        <div className="forget-password-c5-c7-main" >
        <div className="forget-password-c5-c7">
            <form className="forget-password-c5-c7-form-1" style={otppg?{display:"none"}:{}}>
                <h2>Forget password</h2>
                <p className="forget-password-c5-c7-form-p">Enter your Mail</p>
                <input type="text" onChange={(e)=>setfGmail(e.target.value)}/>
                <p className="red-msg" style={!Redm?{display:"none"}:{}}>Email  not found</p>
                <div className="form-btn-loader">
                <span className="form-password-btn" onClick={Sen}><p>Send OTP</p></span>
                <div className="loader" style={!Load?{display:"none"}:{}} ></div>
                </div>
            </form>
            <form className="forget-password-c5-c7-form-1" style={!otppg?{display:"none"}:{}}>
                <p className="forget-password-c5-c7-form-p">Enter otp</p>
                <input type="text" className="form-2" onChange={(e)=>setOtp(e.target.value)}/>
                <p className="red-msg" style={!Redm?{display:"none"}:{}}>wrong otp</p>
                <div className="form-btn-loader">
                <span className="form-password-btn"onClick={Ten}><p>Verify</p></span>
                <div className="loader" style={!Load?{display:"none"}:{}} ></div>
                </div>
                <p style={!Success?{display:"none"}:{}}>Password was sended your mail</p>
            </form>
        </div>
        </div>
        </>
    )
}