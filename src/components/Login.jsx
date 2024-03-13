import "./Login.css"
import Header from "../Header/Header"
function Login(){
    return(
        <>
        <Header/>
        <div id="login-container">
        <div id="login">
            <h2>Login</h2>
            <LoginElement/>
        </div>
        </div>
        </>
    )
}

function LoginElement(){
    return(
        <div className="login-elements">
            <div className="input-container">
            <label for="u-name"> User Name</label>
            <input id="u-name" type="text"/>
            </div>

            <div className="input-container">
            <label for="password" >Password</label>
            <input id="password" type="password"/>
            </div>
            <p>Forgot Password?</p>
            <div id="login-xx-container">
            <button>Login</button>
            <p>Not a member? Signup</p>
            </div>
        </div>
    )
}


export default Login;