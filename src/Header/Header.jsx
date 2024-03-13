import { NavLink } from 'react-router-dom'
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
                <NavLink to ="/" id='signup-btn'>Sign up</NavLink>
                <NavLink to="/login" id='Login-btn'><span>Login</span></NavLink>
            </div>

        </div>
    )
}