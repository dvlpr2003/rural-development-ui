import { NavLink } from "react-router-dom"

export default function LabelContainer(){
    return(
        <div style={{border:"1px solid  #cecece",width:"20rem",height:"30rem",borderRadius:"10px",marginTop:'2rem'}}>
            <LabelContainerItems/>
        </div>
    )
}


function LabelContainerItems(){
    return(
        <>
        <div style={{display:'flex',flexDirection:"column",justifyContent:"center",marginLeft:"3rem",marginTop:"2rem"}}>
            <h3 style={{fontFamily:"Antonio",color:"#838181",cursor:"pointer",marginBottom:"1rem",fontSize:"1rem"}}>Infrastructure Development</h3>
            <NavLink to="/Roads-and-Transport" ><span style={{marginLeft:"2rem",marginTop:"1.5rem",fontFamily:"Assistant",cursor:"pointer",color:"#838181"}}>Roads and Transportation</span></NavLink>
            <NavLink to="/Electricity-and-Power" style={{marginTop:"1rem"}}><span style={{marginLeft:"2rem",marginTop:"1rem",fontFamily:"Assistant",cursor:"pointer",color:"#838181"}}>Electricity and Power</span></NavLink>
            <NavLink to="/Water-Supply-and-Sanitation" style={{marginTop:"1rem"}}><span style={{marginLeft:"2rem",marginTop:"0.5rem",fontFamily:"Assistant",cursor:"pointer",color:"#838181"}}>Water Supply and Sanitation</span></NavLink>

        </div>
        <div style={{display:'flex',flexDirection:"column",justifyContent:"center",marginLeft:"3rem",gap:"1rem",marginTop:"1rem"}}>
        <NavLink to="/Agriculture-and-Development"><h3 style={{fontFamily:"Antonio",color:"#838181",cursor:"pointer",fontSize:"1rem"}}>
                Agriculture and Development
            </h3></NavLink> 
            <NavLink to="/Education-Development"><h3 style={{fontFamily:"Antonio",color:"#838181",cursor:"pointer",fontSize:"1rem"}}>
                Education Development
            </h3></NavLink> 
        </div>
        </>
    )
}