import { NavLink } from "react-router-dom"
import "./Container.css"
export default function InfrastructureDevelopment(){
    return(
        <>
        <div id="info-container-main">
        <div id="info-heading-container-2">
          <h1>Infrastructure <span style={{color:"#317ef3",fontSize:'2.5rem'}}>Development</span></h1>
          <div id="container-2-para">
            <p>The state government has focused on improving rural infrastructure by constructing roads, bridges, and culverts to enhance connectivity between villages and urban centers.</p>
            <p>This includes initiatives like the construction of all-weather roads under the Pradhan Mantri Gram Sadak Yojana (PMGSY) and the Tamil Nadu Rural Road Development Scheme</p>
          </div>
          <div id="container-2-component">
            <div className ="container-elements">
                <div className="element-img">
                    <img src="Home-container-2/road.jpeg"/>
                </div>
                <div className="element-blue-box">
                    <h3>Roads and Transportation</h3>
                    <span>
                    Constructing and maintaining roads, highways, and bridges to enhance connectivity between villages, towns, and urban centers. This includes all-weather roads, rural access roads, and transport facilities to improve accessibility for residents and facilitate the movement of goods and services
                    </span>
                    <NavLink to="/Roads-and-Transport"><span>Learn more</span></NavLink>

                </div>
                
            </div>
            <div className ="container-elements">
                <div className="element-blue-box">
                <h3>Electricity and Power</h3>
                    <span>
                    Extending electricity infrastructure to rural areas to provide reliable access to electricity for households, businesses, and agricultural activities. This includes electrification projects, distribution networks, and promoting renewable energy sources like solar power.
                    </span>
                    <NavLink to="/Electricity-and-Power"><span>Learn more</span></NavLink>


                </div>
                <div className="element-img">

                <img src="Home-container-2/electricity.jpeg" id="electric"/>


                </div>
                
            </div>
            <div className ="container-elements">
                <div className="element-img">
                <img src="Home-container-2/water.jpeg"/>

                </div>
                <div className="element-blue-box">
                <h3>Water Supply and Sanitation</h3>
                    <span>
                    Developing water supply systems, including piped water networks, hand pumps, and borewells, to ensure access to clean and safe drinking water in rural communities. Sanitation infrastructure such as toilets, sewage systems, and waste management facilities are also crucial for public health and hygiene.
                    </span>
                    <NavLink to="/Water-Supply-and-Sanitation"><span>Learn more</span></NavLink>
                </div>
                
            </div>
          </div>
        </div>
        </div>
        </>
    )
}