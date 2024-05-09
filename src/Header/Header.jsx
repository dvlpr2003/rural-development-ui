import { NavLink } from 'react-router-dom'
import './Header.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Header({isLogin,setisLogin}){
    const [isServiceOption,setisServiceOption]=useState(false)
    const [isInfo,setisInfo]=useState(false)
    const [isProfile,setisProfile]=useState(false)
    const [isMenu,setMenu]=useState(true)
    // const [isLogoutEvent,setisLogoutEvent]=useState(false)

    const navigate = useNavigate();

    function lrt(){
        setisServiceOption((e)=>!e)
        if (isInfo === true){
            setisInfo(false)
        }
    }
    function lrt1(){
        setisInfo((e)=>!e)
        
    }
    function changeProfile(){
        setisProfile((e)=>!e)
        // setisLogin(false)
        // navigate("/")


    }

    function LogoutEvent(){
        navigate("/")
        window.location.reload()
        setisLogin(false)
        
        
        
        
    }

    
    return(

        <div id="Header-container">
            <NavLink to="/" id='Header-Title'>
                <span style={{color:"black"}}>Rural</span>
                <span>Development</span>
            </NavLink >
            <div id='Header-Elements'>
                <NavLink to="/"><span>Home</span></NavLink >
                <span onClick={lrt} style={{cursor:"pointer"}}>Our services</span>
                <NavLink to='/officer-login'><span>Officer login</span></NavLink>
            </div>
            <div id='Header-Login-Signup'>
                { !isLogin?
                <>
                <NavLink to ="/signup" id='signup-btn'>Sign up</NavLink>
                <NavLink to="/login" id='Login-btn'><span>Login</span></NavLink></> :
                
                <div id='login-round-container' onClick={changeProfile}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  >
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                </div>
                
                }
            </div>
            {
            isServiceOption? <ServiceOption lrt1={lrt1}/>:""
            }
            {isInfo?<InfrastructureDevelopmentOptions/>:""}
            {isProfile?<ProfileOptions LogoutEvent={LogoutEvent}/>:""}
            <MenuBar setMenu={setMenu}/>


            <MenuItems isLogin={isLogin} LogoutEvent={LogoutEvent} isMenu={isMenu}/>


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
            <div><NavLink to="/Agriculture-and-Development"><span>Agriculture Development</span></NavLink></div>
            <div><NavLink to="/Education-Development"><span>Education Development</span></NavLink></div>
        </div>
        </>
    )
}
function InfrastructureDevelopmentOptions(){
    return(
        <div id='info-dev-options' style={{backgroundColor:"white"}}>
            <NavLink to="/Roads-and-Transport"><span>Roads and Transportation</span></NavLink>
            <NavLink to="/Electricity-and-Power"><span>Electricity and Power</span></NavLink>
            <NavLink to="/Water-Supply-and-Sanitation"><span>Water Supply and Sanitation</span></NavLink>
        </div>
    )
}
function ProfileOptions({LogoutEvent}){
    return(
        <div style={{border:"1px solid #d5d5d5",width:"8rem",height:"7rem",display:'flex',position:"absolute",right:"1rem",top:"5.9rem",backgroundColor:"white",borderRadius:"10px",flexDirection:"column",gap:"1rem",alignItems:"center",justifyContent:"center"}}>
            <NavLink to="/people" style={{fontFamily:"Assistant"}}>
                Profile
            </NavLink>
            <span style={{cursor:"pointer",fontFamily:"Assistant"}} onClick={LogoutEvent}>Logout</span>

        </div>
    )
}
function MenuBar({setMenu}){
    return(
        <div className='menu-bar-c4-mg' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={()=>setMenu((e)=>!e)}>
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
        </div>
    )
}
function MenuItems({isLogin,isProfile,LogoutEvent,isMenu}){
    return(
        <div className='menu-bar-item-c7' style={isMenu?{display:"none"}:{display:"flex"}} >
            <NavLink to="/"><span>Home</span></NavLink >
            <NavLink to='/officer-login'><span>Officer login</span></NavLink>
            { !isLogin?
                <>
                <NavLink to ="/signup" id='signup-btn'>Sign up</NavLink>
                <NavLink to="/login" id='Login-btn'><span>Login</span></NavLink></> :
                <NavLink to="/people" style={{fontFamily:"Assistant"}}>
                 Profile
                </NavLink>
                }

            {isLogin?<span style={{cursor:"pointer",fontFamily:"Assistant"}} onClick={LogoutEvent}>Logout</span>:""}
        </div>
    )
}