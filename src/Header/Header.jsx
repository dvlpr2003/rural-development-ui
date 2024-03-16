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
                <span>Development</span>
                <span>Query</span>
            </div>
            <div id='Header-Login-Signup'>
                <NavLink to ="/signup" id='signup-btn'>Sign up</NavLink>
                <NavLink to="/login" id='Login-btn'><span>Login</span></NavLink>
            </div>

        </div>
    )
}