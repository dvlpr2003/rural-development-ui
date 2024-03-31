import { NavLink } from "react-router-dom"
import "./Container3.css"

export default function AgriculturalDevelopment(){
    return(
        <>
        <div id="container-3-main">
            <div id="container-3-main-element-1">

            <Container3Heading/>
            <Container3Para/>
            </div>
            <div id="container-3-main-element-2">
            <AgriculturalComponent1/>
            <Container3image/>
            <AgriculturalComponent2/>

            </div>
        </div>
        </>
    )
}
function Container3Heading(){
    return(
        <div id="container3Heading">
            <h1>Agricultural</h1>
            <h1>Development</h1>

        </div>
    )
}
function Container3Para(){
    return(
        <div id="container3para-container">
            <span id="container3para">
                Agricultural development stands as the cornerstone of rural prosperity in Tamil Nadu, where the fertile lands and rich 

            </span>
            <span>traditions intertwine to shape the agricultural landscape. Through innovative practices, technological advancements, and </span>
            <span>strategic interventions, agricultural development initiatives aim to enhance productivity, improve livelihoods, and ensure food </span>
            <span>security for rural communities. Join us as we delve into the multifaceted realm of agricultural development, where the seeds of</span>
            <span>progress sow the promise of a sustainable and thriving future for Tamil Nadu's agrarian heartland.</span>
            <NavLink to="/Agriculture-and-Development"><span>Learn more...</span></NavLink>
        </div>
    )
}
function AgriculturalComponent1(){
    return(
        <div className="agri-component">
            <h2>100+</h2>
            <h3 style={{fontFamily:"Antonio, sans-serif"}}>Technological Innovation</h3>
            <span>Advancements in agricultural technology play</span>
            <span>a crucial role in increasing productivity and</span>
            <span>efficiency. This includes the development of</span>
            <span>improved crop varieties, mechanization,</span>
            <span>precision agriculture techniques, and the use</span>
            <span>of biotechnology</span>
        </div>
    )
}
function AgriculturalComponent2(){
    return(
        <div className="agri-component">
            <h2>100%</h2>
            <h3 style={{fontFamily:"Antonio, sans-serif"}}>Research and Development</h3>
            <span>Investing in agricultural research and development (R&D) helps to generate  new </span>
            <span>knowledge,technologies, and practices tailored</span>
            <span>to local conditions, leading to continuous</span>
            <span>improvement in productivity and resilience.</span>
        </div>
    )
}
function Container3image(){
    return(
        <div id="container3image">
            <img src="Home-container-3/agri.jpeg"/>
        </div>
    )
}