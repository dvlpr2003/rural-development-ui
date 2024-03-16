import { NavLink } from "react-router-dom"
import Header from "../Header/Header"
import "./Home.css"
import { Slideshow } from "./Slide"
import InfrastructureDevelopment from "./container-2/Container"
export default function Home(){
    return(
        <>
        <Header/>
        <HeadingContainer/>
        <InfrastructureDevelopment/>
        </>
    )
}
function HeadingContainer(){
    return(
        <div id="heading-container">
            <Heading/>
            <HeadingImage/>
            

        </div>
    )
}
function Heading(){
    return(
        <div className="H-containers" id="heading">
            <div className="heading-text-container">
            <h1>Empowering Tamil Nadu's Heartland: </h1>

            <h1>A Journey of <span style={{color:"#317ef3",fontSize:"2.3rem"}}>Rural Renaissance</span></h1>
            </div>
            <div className="heading-text-container" id="heading-para">
                <p>
                Discover the transformative journey of rural Tamil Nadu, where grassroots efforts and
                </p>
                <p>
                innovative strategies converge to drive sustainable development and empower 
                </p>
                <p>
                communities.
                </p>
            </div>
            <div id="Heading-buttons">
                <NavLink to="/login" className="Btn-items">
                    Login
                </NavLink>
                <NavLink to="/signup" className="Btn-items">
                    Signup
                </NavLink>
            </div>
        </div>

    )
}
function HeadingImage(){
    return(
        <div className="H-containers">
            <Slideshow/>
        </div>
    )
}