import { NavLink } from "react-router-dom"
import Header from "../Header/Header"
import "./Home.css"
import { Slideshow } from "./Slide"
import InfrastructureDevelopment from "./container-2/Container"
import AgriculturalDevelopment from "./container-3/Container3"
import Education from "./container-4/container4"
import Footer from "../footer/footer"
export default function Home({isLogin}){
    return(
        <>
        <Header isLogin={isLogin}/>
        <HeadingContainer isLogin={isLogin}/>
        <InfrastructureDevelopment/>
        <AgriculturalDevelopment/>
        <Education/>
        <Footer/>
        </>
    )
}
function HeadingContainer({isLogin}){
    return(
        <div id="heading-container" >
            <Heading isLogin={isLogin}/>
            <HeadingImage/>
            

        </div>
    )
}
function Heading({isLogin}){
    return(
        <div className="H-containers" id="heading" style={{marginLeft:"3em"}}>
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
            { !isLogin ?
            <div id="Heading-buttons">
                <NavLink to="/login" className="Btn-items">
                    Login
                </NavLink>
                <NavLink to="/signup" className="Btn-items">
                    Signup
                </NavLink>
            </div>:""
            }
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