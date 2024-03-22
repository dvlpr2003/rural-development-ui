import { NavLink } from 'react-router-dom'
import './Header.css'


export default function Header(){
    return(
        <div id="Header-container">
            <NavLink to="/" id='Header-Title'>
                <span style={{color:"black"}}>Rural</span>
                <span>Development</span>
            </NavLink >
            <div id='Header-Elements'>
                <span>Service</span>
                <span>Features</span>
                <span>Development</span>
                <span>Officer login</span>
            </div>
            <div id='Header-Login-Signup'>
                <NavLink to ="/signup" id='signup-btn'>Sign up</NavLink>
                <NavLink to="/login" id='Login-btn'><span>Login</span></NavLink>
            </div>

        </div>
    )
}