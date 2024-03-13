import './Header.css'


export default function Header(){
    return(
        <div id="Header-container">
            <div id='Header-Title'>
                <span>Rural</span>
                <span>Development</span>
            </div>
            <div id='Header-Elements'>
                <span>Service</span>
                <span>Features</span>
                <span>Pricing</span>
                <span>Security</span>
            </div>
            <div id='Header-Login-Signup'>
                <button>Sign up</button>
                <button>Login</button>
            </div>

        </div>
    )
}