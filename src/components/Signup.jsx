import "./Signup.css"

export default function SignUp(){
    return(
        <div id="signup-container-main">
            <div id="signup-img-container" className="signup-container">
                <img src="img/kid-signup.jpeg" alt="kid-img"/>
            </div>
            <div id="signup-element" className="signup-container">
                <div id="s-elements">
                <h2>Sign Up</h2>

                <First_Last_Name/>
                <Mail/>
                <Phone/>
                <Address/>
                <District/>
                <Pincode/>
                <S_Btn/>
                </div>

            </div>
        </div>
    )
}
function First_Last_Name(){
    return(
        <div id="fname-lname">
            <input placeholder="Fname"/>
            <input placeholder="Lname"/>
        </div>
    )
}
function Mail(){
    return(
        <>
        <input placeholder="Mail"/>
        </>
    )
}
function Phone(){
    return(
        <>
        <input placeholder="Phone"/>
        </>
    )
}
function Address(){
    return(
        <>
        <input placeholder="Address"/>
        </>
    )
}
function District(){
    return(
        <>
        <input placeholder="District"/>
        </>
    )
}
function Pincode(){
    return(
        <>
        <input placeholder="Pincode"/>
        </>
    )
}
function S_Btn(){
    return(
        <div id="s-btn-container">
            <button id="s-btn">Sign Up</button>
        </div>
    )
}