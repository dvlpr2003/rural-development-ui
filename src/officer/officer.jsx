import { useEffect, useState } from "react"
import "./officer.css"
import axios from "axios"
export default function OfficerPage(){
    const [totalUser,settotalUser]=useState()
    const [totalComplaint,settotalComplaint]=useState()
    const [UserList,setUserList]=useState()
    const [OverData,setOverData]=useState()
    useEffect(function(){
        async function GetTotal(){
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/total_user/")
                console.log(response.data)
                settotalUser(response.data["total"])
            }catch(error){
                console.log(error)
            }
        }
        GetTotal()
    },[])
    useEffect(function(){
        async function GetTotalComplaints(){
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/total_complaint/")
                console.log(response.data)
                settotalComplaint(response.data["total"])
            }catch(error){
                console.log(error)
            }
        }
        GetTotalComplaints()
    },[])
    useEffect(function(){
    async function GetUser(){
        try{
            const response = await axios.get("http://127.0.0.1:8000/api/signup/")
            console.log(response.data)
            setUserList(response.data)
        }catch(error){
            console.log(error)
        }
    }
    GetUser()
},[])
    
    return(
        <div id="officer-main-page">
        <OfficerOption totalComplaint={totalComplaint} totalUser={totalUser} />
        <QueryPage UserList={UserList} setOverData={setOverData}/>
        <UserOverview OverData={OverData}/>

        </div>
    )
}
function OfficerOption({totalComplaint,totalUser}){

    return(
        <div id="officer-options">
            <OfficerItems totalUser={totalUser} totalComplaint={totalComplaint}/>
        </div>
    )
}
function OfficerItems({totalUser,totalComplaint}){
    return(
        <div id="officer-item-container">
            <div className="officer-item-container-options">
                <div className="officer-svg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="officer-user-svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
                </div>
                <div style={{display:"flex",gap:"1rem"}}>
                <span>
                    Registered Users
                </span> 
                <div style={{border:"1px solid red",width:"1rem",height:"1rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",backgroundColor:"red",color:"white",fontSize:"0.8rem"}}>
                    <span>{totalUser}</span>
                </div>
                </div>
                
            </div>
            <div className="officer-item-container-options">
                <div className="officer-svg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="officer-user-svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
</svg>
                </div>
                <div style={{display:"flex",gap:"1rem"}}>
                <span>
                    Complaints
                </span> 
                <div style={{border:"1px solid red",width:"1rem",height:"1rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",backgroundColor:"red",color:"white",fontSize:"0.8rem"}}>
                    <span>{totalComplaint}</span>
                </div>
                </div>
            </div>
        </div>
    )
}







function QueryPage({UserList,setOverData}){
    return(
        <div id="officer-Query-page">
            {
            
            UserList && <RegisteredUser UserList={UserList} setOverData={setOverData}/>
            }

        </div>
    )
}

function RegisteredUser({UserList,setOverData}){
    return(
        <div id="Registered-user-main">
            {
                UserList.map((e)=><RegisteredUserItems 
                fname={e.fname}
                 lname={e.lname} 
                 address={e.address} 
                 district = {e.district}
                  mail = {e.mail} 
                  phone = {e.phone} 
                  pincode = {e.pincode}
                  setOverData={setOverData}
                  />)
            }
        </div>
    )
}
function RegisteredUserItems({fname,lname,address,district,mail,phone,pincode,setOverData}){
    function updatelist(){
        setOverData()
        let data = {
            fname:fname,
            lname:lname,
            address:address,
            district:district,
            mail:mail,
            phone:phone,
            pincode:pincode
        }

        setOverData(data)
    }
    return(
        <div className="Registered-user-items" onClick={updatelist}>
            <div className="user-profile-svg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8e8eee" className="user-dvd">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

            </div>
            <div className="user-profile-content">
                <div className="user-profile-name">
                    <span>{fname}</span><span>{lname}</span>
                </div>
                <div className="user-profile-complaint">
                    <div className="complaint-svg">
                        <span>1</span>
                    </div>
                    <span>Complaints</span>

                </div>
            </div>

        </div>
    )
}





function UserOverview({OverData}){
    return(
        <div id="User-overview-main">
            {
             OverData && <UserOverviewItems OverData={OverData}/>
            }
        </div>
    )
}

function UserOverviewItems({OverData}){
    return(
        <div id="user-overview-items">
            <div id="user-overview-items-svg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8e8eee" className="user-dvd">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

            </div>
            <div id="user-overview-name">
                <span>{OverData.fname} {OverData.lname}</span>
            </div>
            <div id="user-overview-contacts">
                <div id="user-mail">
                    <div id="user-mail-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                    </div>
                    <span>{OverData.mail}</span>
                </div>
                <div id="user-phone">
                    <div id="user-phone-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                    </div>
                    <span>{OverData.phone}</span>
                </div>
                <div id="user-address">
                    <div id="user-gps-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>

                    </div>
                    <div>
                        <span>{OverData.address},</span> <span>{OverData.district}-</span> <span>{OverData.pincode}</span>
                    </div>

                </div>
                <span></span>
            </div>
        </div>
    )
}