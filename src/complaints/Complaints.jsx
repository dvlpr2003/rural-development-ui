import { NavLink } from "react-router-dom"
import Header from "../Header/Header"
import Home from "../Home/Home"
import Footer from "../footer/footer"

import "./Complaints.css"


export default function Complaints({isLogin}){
    return(
        <>
        {/* <Header isLogin={isLogin}/> */}
        <div id="complaint-main">
            <ComplaintHeading/>
        </div>
        <ComplaintComponent1/>
        <ComplaintComponent2/>
        <Footer/>
        </>
    )
}
function ComplaintHeading(){
    return(
        <div id="complaint-1">
            <div id="complaint-headings">
                <h1>Empowering Communities, Enriching Lives</h1>
                <h1 id="jldoid">The Tamil Nadu Rural Development Revolution</h1>
            </div>
            <div id="complaint-sub-heading">
                <p>Building Stronger Foundations</p>
                <p>Redefining Rural Development in Tamil Nadu</p>
            </div>
            <NavLink to="/Complaint-form">
            <button className="raise-btn">Raise your Complaint</button>
            </NavLink>
            

        </div>
    )
}
function ComplaintComponent1(){
    return(
        <div id="complaint-component-1">
            <ComplaintComponent1Items/>

        </div>
    )
    
}
function ComplaintComponent1Items(){
    return(
        <div id="complaint-component-items">
            <div className="complaint-component-items-1">
                <div className="complaint-r-devop">
                    <div className="complaints-svg">

                    <svg width="128" height="128" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>road_line</title>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Map" transform="translate(0.000000, -96.000000)" fill-rule="nonzero">
            <g id="road_line" transform="translate(0.000000, 96.000000)">
                <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

</path>
                <path d="M8.24253,3.02985 C8.77832,3.1638 9.10408,3.70673 8.97013,4.24253 L4.97013,20.2425 C4.83619,20.7783 4.29325,21.1041 3.75746,20.9701 C3.22166,20.8362 2.8959,20.2933 3.02985,19.7575 L7.02985,3.75746 C7.1638,3.22166 7.70673,2.8959 8.24253,3.02985 Z M16.9701,3.75746 L20.9701,19.7575 C21.1041,20.2933 20.7783,20.8362 20.2425,20.9701 C19.7067,21.1041 19.1638,20.7783 19.0299,20.2425 L15.0299,4.24253 C14.8959,3.70673 15.2217,3.1638 15.7575,3.02985 C16.2933,2.8959 16.8362,3.22166 16.9701,3.75746 Z M12,17 C12.51285,17 12.9355092,17.386027 12.9932725,17.8833761 L13,18 L13,20 C13,20.5523 12.5523,21 12,21 C11.48715,21 11.0644908,20.613973 11.0067275,20.1166239 L11,20 L11,18 C11,17.4477 11.4477,17 12,17 Z M12,9.99999 C12.5523,9.99999 13,10.4477 13,10.99999 L13,12.99999 C13,13.5523 12.5523,13.99999 12,13.99999 C11.4477,13.99999 11,13.5523 11,12.99999 L11,10.99999 C11,10.4477 11.4477,9.99999 12,9.99999 Z M12,2.99999 C12.51285,2.99999 12.9355092,3.38603429 12.9932725,3.88336975 L13,3.99999 L13,5.99999 C13,6.55228 12.5523,6.99999 12,6.99999 C11.48715,6.99999 11.0644908,6.61395434 11.0067275,6.1166121 L11,5.99999 L11,3.99999 C11,3.44771 11.4477,2.99999 12,2.99999 Z" id="形状" fill="#09244B">

</path>
            </g>
        </g></g></svg>

                    </div>
                    <div className="devop-heading">
                        <span>Roads and Transportation</span>
                    </div>
                    <div className="devop-sub-heading">
                        <span>Roads and transportation systems are essential</span>
                        <span>for connecting people goods,and services,</span>
                        <span>facilitating economic activity, mobility,  and </span>
                        <span>societal development.</span>
                    </div>
                    <NavLink to ="/Complaint-form">
                        <button className="devop-btn">Raise Complaint</button>
                    </NavLink>

                </div>
                <div className="complaint-r-devop">
                    <div className="complaints-svg">
                        <svg width="128" height="128" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8H11.9451L13.9191 3.39392C14.2019 2.73405 13.7179 2 13 2H8C7.59997 2 7.23843 2.2384 7.08086 2.60608L4.08086 9.60608C3.79805 10.2659 4.28208 11 5 11H6.73423L4.07207 17.6273C3.67234 18.6223 4.90667 19.4633 5.68646 18.7272L10.7099 13.9849L15.6501 9.75985C16.3559 9.156 15.9289 8 15 8ZM9.50943 8.60608C9.22663 9.26595 9.71066 10 10.4286 10H12.2929L9.37334 12.4979L7.62514 14.1477L9.14152 10.3727C9.40546 9.71569 8.92168 9 8.21359 9H6.51654L8.6594 4H11.4835L9.50943 8.60608Z" fill="#000000"></path>
</svg>
</div>
<div className="devop-heading">
    <span>
    Electricity and Power
    </span>
</div>
<div className="devop-sub-heading">
<span>Electricity and power infrastructure is vital for </span>
<span>powering modern society, driving technological </span>
<span>innovation, and sustaining economic growth.</span>

</div>
<NavLink to ="/Complaint-form" >
<button className="devop-btn">Raise Complaint</button>
</NavLink>



                </div>
                <div className="complaint-r-devop">
                    <div className="complaints-svg">

                        <svg width="128" height="128" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" d="M5 14C5 10.5817 7.58172 6 12 3C16.4183 6 19 10.5817 19 14C19 18.4183 15.4183 21 12 21C8.58172 21 5 18.4183 5 14Z" fill="#001A72" id="element_01b0f258"></path>
<path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14M5 14C5 10.5817 7.58172 6 12 3C16.4183 6 19 10.5817 19 14C19 18.4183 15.4183 21 12 21C8.58172 21 5 18.4183 5 14Z" stroke="#001A72" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" id="element_c424acae"></path>
</svg>
                    </div>
                    <div className="devop-heading">
                        <span>Water Supply and Sanitation</span>
                    </div>
                    <div className="devop-sub-heading">
                    <span>Water supply and sanitation infrastructure are</span>
                    <span> crucial for ensuring public health, hygiene,and </span>
                    <span>sustainable development,promoting access to </span>
                    <span>clean water and proper waste management.</span>

                    </div>
                    <NavLink to="/Complaint-form">
                        <button className="devop-btn">Raise Complaint</button>
                    </NavLink>


                </div>


            </div>
            <div className="complaint-component-items-1">
                <div className="complaint-r-devop">
                    <div className="complaints-svg">

                        <svg width="128" height="128" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.1759 21.6474C18.705 21.9361 18.5573 22.5518 18.8459 23.0226C19.7645 24.521 20.5469 26.0084 21.0667 27.3592C21.2651 27.8746 21.8438 28.1316 22.3592 27.9333C22.8746 27.7349 23.1316 27.1562 22.9333 26.6408C22.3545 25.137 21.5066 23.536 20.5511 21.9774C20.2624 21.5065 19.6467 21.3588 19.1759 21.6474Z" fill="#333333"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.5901 20.6926C30.036 21.0185 30.1332 21.6442 29.8074 22.0901C28.6503 23.6732 27.6311 25.79 26.914 27.4056C26.69 27.9104 26.0992 28.1381 25.5944 27.914C25.0896 27.69 24.8619 27.0992 25.086 26.5944C25.8095 24.964 26.9003 22.6781 28.1926 20.9099C28.5185 20.464 29.1442 20.3668 29.5901 20.6926Z" fill="#333333"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.2397 12.0368C29.5815 9.35911 42.1051 6 42.1051 6C42.1051 6 39.9763 19.395 38.1029 21.5372C36.7076 23.1326 32.2628 22.1355 30.0846 21.5225C31.7133 19.0259 33.5996 16.5871 35.2593 14.6508C35.6187 14.2315 35.5701 13.6002 35.1508 13.2407C34.7315 12.8813 34.1002 12.9299 33.7407 13.3492C32.0679 15.3009 30.1286 17.7983 28.4317 20.3959C27.4766 18.6199 25.3879 14.1543 27.2397 12.0368ZM11 30H6V42H11V39.9567C12.0203 39.9151 13.5258 39.8614 14.0475 39.8825C15.8337 39.9548 17.1676 40.3807 18.5163 40.8114C19.7745 41.2132 21.0456 41.6191 22.7089 41.7457C23.127 41.7775 23.5338 41.8186 23.9282 41.8584C25.3524 42.0022 26.6148 42.1296 27.6583 41.7457C28.9909 41.2553 36.6053 37.529 37.5571 36.5484C38.5089 35.5677 38.033 32.9201 35.0824 33.4104C33.6265 33.6523 31.9389 34.3479 30.4083 34.9787C28.8369 35.6264 27.431 36.2058 26.6113 36.1561C24.9933 36.058 20.7101 35.2736 20.7101 35.2736L25.6279 35.3333C25.6279 35.3333 26.3226 35.3704 27.2776 34.6852C28.2326 34 29.086 32.0375 27.6583 32.0375C26.2306 32.0375 24.7077 31.5472 24.7077 31.5472L18.6161 30.1743C18.6161 30.1743 16.5222 29.7821 15.6655 30.1743C14.9604 30.4972 12.0185 31.551 11 31.9136V30ZM8.87767 9.66945C8.87767 9.66945 19.2129 12.4416 21.1455 14.6514C22.638 16.358 21.0289 19.9128 20.2186 21.4434C19.1303 19.7217 17.9186 18.052 16.7853 16.6145C16.4434 16.1808 15.8146 16.1064 15.3809 16.4483C14.9472 16.7903 14.8728 17.419 15.2147 17.8528C16.3378 19.2773 17.5121 20.9017 18.5506 22.5478C16.6831 23.0536 13.2815 23.7506 12.1806 22.4917C10.6345 20.7239 8.87767 9.66945 8.87767 9.66945Z" fill="#333333"></path>
</svg>
                    </div>
                    <div className="devop-heading">
                        <span>Agriculture Development</span>
                    </div>
                    <div className="devop-sub-heading">
                    <span>Agricultural development encompasses efforts to </span>
                    <span>enhance farming practices, improve food </span>
                    <span>security,ncrease yields, and promote sustainable </span>
                    <span>land management for long-term food production</span>
                    <span>and rural livelihoods.</span>

                    </div>
                    <NavLink to="/Complaint-form">
                        <button className="devop-btn">Raise Complaint</button>
                    </NavLink>



                </div>
                <div className="complaint-r-devop">
                    <div className="complaints-svg">
                        <svg width="128" height="128" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M19 11V16L12 19.5L5 16V11" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M22 14V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                    </div>
                    <div className="devop-heading">
                        <span>Education Development</span>
                    </div>
                    <div className="devop-sub-heading">
                    <span>Education development involves providing </span>
                    <span>equitable access to quality learning opportunities,</span>
                    <span>fostering critical thinking, creativity, and skills</span>
                    <span>necessary for personal growth, societal </span>
                    <span>advancement, and economic prosperity.</span>

                    </div>
                    <NavLink to="/Complaint-form">
                        <button className="devop-btn">Raise Complaint</button>
                    </NavLink>




                </div>

            </div>

        </div>
    )
}


function ComplaintComponent2(){
    return(
        <div id="complaint-component-2">
            <ComplaintComponent2Items/>
        </div>
    )
}
function ComplaintComponent2Items(){
    return(
        <div id="complaint-component-2-items">
            <div id="complaint-component-2-items-heading">
                <h1>Transforming Tamil Nadu's Villages</h1>
                <h1>Bridging Gaps, Building Futures</h1>
            </div>
            <div id="complaint-component-2-items-subheading">
                <span>Building Stronger Foundations</span>
                <span>Redefining Rural Development in Tamil Nadu</span>
            </div>
            <NavLink to="/Complaint-form">
                <button className="blue-raise-btn">Raise Complaint</button>
            </NavLink>

        </div>
    )
}