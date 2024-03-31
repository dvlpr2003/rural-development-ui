import { NavLink } from "react-router-dom"
import "./container4.css"


export default function Education(){
    return (
        <div id="Education-system-main">
            <EduCo1/>
            <EduCo2/>

        </div>
    )
}
function EduCo1(){
    return(
        <div id="Education-system-container-1" className="Education-system-containers">
            <div id="Education-system-Heading">
            <h1>Empowering Minds, Building Futures:</h1>
            <h1 style={{color:"#1470D8",fontSize:"1.7rem"}}>The Journey of Education Development</h1>
            </div>
            <div id="Education-system-image">
                <img src="Home-container-4/Education.jpeg"/>
            </div>
        </div>
    )
}





function EduCo2(){
    return(
        <div id="Education-system-container-2" className="Education-system-containers">
            <div id="Education-system-para">
                <span>
                    Developing an effective education system requires a comprehensive approach that addresses
                </span>

                <span>
                    various aspects such as infrastructure, curriculum, teaching methods, teacher training, equity, access, and governance
                </span>
                <NavLink to="/Education-Development"><button>
                    View More
                </button>
                </NavLink>
            </div>
            <div id="Education-system-elements">
                <div className="Education-system-elements-items">
                    <div className="Education-item-img">
                        <img src="Home-container-4/invesment.png" />
                    </div>
                    <div className="Education-item-txt">
                        <h3>Investment in Infrastructure</h3>
                        <span>Investment in infrastructure fuels economic growth and enhances societal development</span>
                        <span> through improved connectivity and essential services.</span>
                    </div>
                </div>
                <div className="Education-system-elements-items">
                <div className="Education-item-img">
                <img src="Home-container-4/school.png" />


                </div>
                <div className="Education-item-txt">
                <h3>Curriculum Development</h3>
                <span>Curriculum development involves designing educational frameworks to equip learners</span>
                <span>with relevant knowledge, skills, and competencies for success in a rapidly evolving world.</span>

                </div>
                </div >
                <div className="Education-system-elements-items">
                <div className="Education-item-img">
                <img src="Home-container-4/teacher.png" />
                </div>
                <div className="Education-item-txt">
                <h3>Quality Teachers</h3>
                <span>Quality teachers are the cornerstone of effective education, shaping students' learning</span>
                <span>experiences and fostering their intellectual growth.</span>
                </div>
                </div>
                <div className="Education-system-elements-items">
                <div className="Education-item-img">
                <img src="Home-container-4/learning.png" />
                </div>
                <div className="Education-item-txt">
                <h3>Student-Centered Learning</h3>
                <span>Student-centered learning places students at the forefront, fostering active</span>
                <span>engagement,critical thinking, and personalized pathways to knowledge acquisition.</span>

                </div>
                </div>

            </div>

        </div>
    )
}