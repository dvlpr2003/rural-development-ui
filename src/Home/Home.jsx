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
        <div style={{display:"flex",flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
        <Header isLogin={isLogin}/>
        <HeadingContainer isLogin={isLogin}/>
        <InfrastructureDevelopment/>
        <AgriculturalDevelopment/>
        <Education/>
        <Footer/>
        </div>
        </>
    )
}
function HeadingContainer({isLogin}){
    return(
        <div id="home-heading-container-main">
        <div id="heading-container" >
            <Heading isLogin={isLogin}/>
            <HeadingImage/>
            

        </div>
        </div>
    )
}
function Heading({isLogin}){
    return(
        <div className="H-containers" id="heading" >
            <div className="heading-text-container" id="heading-text-container-id" >
            <h1 className="empower">Empowering Tamil Nadu's Heartland: </h1>
            <div id="defrty" >
            <h1 className="empower">A Journey of</h1>
            <h1>Rural Renaissance</h1>
            </div>
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
        <div className="H-containers" id="slid-image-con">
            <Slideshow/>
        </div>
    )
}