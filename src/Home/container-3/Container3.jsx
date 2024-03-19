import "./Container3.css"

export default function AgriculturalDevelopment(){
    return(
        <>
        <div id="container-3-main">
            <div id="container-3-main-element-1">

            <Container3Heading/>
            <Container3Para/>
            </div>
        
            <Container3image/>
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
            <span>Learn more...</span>
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