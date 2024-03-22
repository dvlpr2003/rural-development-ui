import { NavLink } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'


export default function Header(){
    const [isServiceOption,setisServiceOption]=useState(false)
    const [isInfo,setisInfo]=useState(false)
    function lrt(){
        setisServiceOption((e)=>!e)
        if (isInfo === true){
            setisInfo(false)
        }
    }
    function lrt1(){
        setisInfo((e)=>!e)
        
    }
    
    return(

        <div id="Header-container">
            <NavLink to="/" id='Header-Title'>
                <span style={{color:"black"}}>Rural</span>
                <span>Development</span>
            </NavLink >
            <div id='Header-Elements'>
                <NavLink to="/"><span>Home</span></NavLink >
                <span>About Us</span>
                <span onClick={lrt} style={{cursor:"pointer"}}>Our services</span>
                <span>Officer login</span>
            </div>
            <div id='Header-Login-Signup'>
                <NavLink to ="/signup" id='signup-btn'>Sign up</NavLink>
                <NavLink to="/login" id='Login-btn'><span>Login</span></NavLink>
            </div>
            {
            isServiceOption? <ServiceOption lrt1={lrt1}/>:""
            }
            {isInfo?<InfrastructureDevelopmentOptions/>:""}


        </div>
    )
}
function ServiceOption({lrt1}){
    return(
        <>
        <div id='service-options'>
            <div onClick={lrt1}>
                <span>Infrastructure Development</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</span>
            </div>
            <div><span>Agriculture Development</span></div>
            <div><span>Education Development</span></div>
        </div>
        </>
    )
}
function InfrastructureDevelopmentOptions(){
    return(
        <div id='info-dev-options'>
            <span>Roads and Transportation</span>
            <span>Electricity and Power</span>
            <span>Water Supply and Sanitation</span>
        </div>
    )
}