import Header from "../Header/Header"
import Footer from "../footer/footer"
import "./pages.css"
import LabelContainer from "./Label"
export default function WaterSupplyandSanitation({isLogin,setisLogin}){
    return(
        <>
        <Header isLogin={isLogin} setisLogin={setisLogin}/>
        <div className="pages-main">
            <RTElements1/>
            <RTElements2/>
        </div>
        <Footer/>
        </>
    )
}
function RTElements1(){
    return(
        <div className="pages-element-1">
            {/* font-family: "Anton", sans-serif; */}
            {/* font-family: "Archivo Black", sans-serif; */}
            <h1 style={{marginTop:"2rem",marginBottom:"2rem",color:"#393737",fontFamily:"Archivo Black",fontWeight:"normal",fontSize:"2.6rem"}}>Water Supply and Sanitation</h1>
            <img src="Home-container-2/water.jpeg" style={{width:"20rem",height:"20rem",borderRadius:"20px",marginBottom:"2rem"}}/>
            <div className="page-container-1">
                <h3>Expansion of Coverage</h3>
                <p>
                Expanding coverage of water supply and sanitation services ensures that all communities, regardless of their location or socio-economic status, have access to essential services for drinking water, hygiene, and sanitation. This is essential for promoting social inclusion, reducing inequalities, and improving the quality of life for residents across Tamil Nadu.
                Increasing coverage of water supply and sanitation services has significant public health benefits. Access to clean drinking water and sanitation facilities helps prevent waterborne diseases, reduce the spread of infections, and improve overall public health outcomes, particularly among vulnerable populations such as children, the elderly, and people with compromised immune systems.
                Increasing coverage of water supply and sanitation services has significant public health benefits. Access to clean drinking water and sanitation facilities helps prevent waterborne diseases, reduce the spread of infections, and improve overall public health outcomes, particularly among vulnerable populations such as children, the elderly, and people with compromised immune systems.
                </p>

            </div>
            <div className="page-container-1">
                <h3>Promotion of Water Conservation</h3>
                <p>
                Promoting water conservation helps in sustainable management of water resources by reducing water wastage and ensuring efficient utilization of available water supplies. By implementing conservation measures, Tamil Nadu can maintain ecological balance, support biodiversity, and safeguard water quality for present and future generations.
                Water conservation measures mitigate water scarcity by minimizing demand pressure on limited water sources. As Tamil Nadu faces increasing water stress due to population growth, urbanization, and climate change, promoting conservation practices becomes essential to ensure availability of water for various sectors such as agriculture, industry, and domestic use.
                Water conservation contributes to the preservation of ecosystems and habitats dependent on water resources. By reducing water extraction from rivers, lakes, and groundwater aquifers, conservation efforts help maintain flow regimes, aquatic habitats, and biodiversity, ensuring the health and resilience of ecosystems in Tamil Nadu.

                </p>


            </div>
            <div className="page-container-1">
                <h3>Improvement of Water Quality</h3>
                <p>
                Ensuring safe and clean drinking water is essential for preventing waterborne diseases and protecting public health. Contaminated water sources can pose serious health risks, including gastrointestinal illnesses, infections, and waterborne diseases such as cholera and typhoid. By improving water quality through treatment, monitoring, and regulation, Tamil Nadu can mitigate these health hazards and ensure access to safe drinking water for all residents.
                Clean water is vital for maintaining healthy ecosystems and biodiversity in Tamil Nadu. Pollution and contamination of water bodies can have detrimental effects on aquatic habitats, freshwater ecosystems, and marine life. Improving water quality through pollution control measures, watershed management, and restoration efforts helps preserve ecosystems, support biodiversity, and ensure the sustainability of natural resources for future generations.
                Access to clean water is fundamental for achieving sustainable development goals in Tamil Nadu. Clean water is essential for agriculture, industry, energy production, and domestic use, supporting economic growth, poverty reduction, and human well-being. By improving water quality, the state can enhance productivity, promote sustainable livelihoods, and create opportunities for socio-economic development across communities.
                </p>

            </div>
            <div className="page-container-1">
                <h3>Behavioral Change and Hygiene Promotion</h3>
                <p>
                Promoting hygiene practices such as handwashing with soap, safe water storage, and proper sanitation can prevent the spread of waterborne diseases in Tamil Nadu. By raising awareness about the importance of hygiene and encouraging behavioral change, the incidence of waterborne illnesses such as diarrhea, cholera, and typhoid can be significantly reduced, leading to improved public health outcomes and reduced healthcare costs.
                Encouraging communities to adopt safe sanitation practices and end open defecation is essential for reducing environmental contamination and improving public health. By promoting the construction and use of toilets, raising awareness about the health risks associated with open defecation, and addressing cultural norms and behavioral barriers, Tamil Nadu can achieve significant progress towards eliminating open defecation and improving sanitation coverage.
                Addressing menstrual hygiene management is essential for promoting the health and dignity of women and girls in Tamil Nadu. By raising awareness about menstrual hygiene, providing access to affordable menstrual products and sanitation facilities, and challenging stigma and taboos surrounding menstruation, the state can empower women and girls to manage their periods safely and hygienically, improving their overall health and well-being.
                </p>

            </div>
            <div className="page-container-1">
                <h3>Integrated Water Resource Management</h3>
                <p>
                IWRM ensures the efficient and equitable allocation of water resources among competing users and sectors, including agriculture, industry, domestic supply, and environmental conservation. By considering the needs and priorities of all stakeholders, IWRM promotes the optimal use of water resources, minimizes conflicts, and enhances water security in Tamil Nadu.
                IWRM promotes the integration of social, economic, and environmental objectives in water management decision-making, fostering sustainable development in Tamil Nadu. By balancing the needs of current and future generations, IWRM helps ensure that water resources are managed in a way that supports economic growth, poverty reduction, and environmental sustainability over the long term.
                IWRM emphasizes the importance of protecting and restoring natural ecosystems that depend on water resources for their survival. By incorporating ecosystem-based approaches into water management strategies, Tamil Nadu can preserve biodiversity, maintain ecosystem services, and promote the resilience of ecosystems to climate change and other threats.
                </p>

            </div>
            <div className="page-container-1" style={{marginBottom:"2.5rem"}}>
                <h3>Policy and Regulatory Reforms</h3>
                <p>
                Policy and regulatory reforms are necessary to promote sustainable water management practices that balance competing demands for water resources while preserving environmental integrity. By establishing clear guidelines, standards, and regulations for water use, pollution control, and ecosystem protection, Tamil Nadu can ensure the long-term sustainability of its water resources and ecosystems.
                Effective water governance requires robust policy frameworks, institutional mechanisms, and regulatory frameworks that facilitate coordinated decision-making, stakeholder participation, and accountability in water management. Policy reforms that clarify institutional mandates, streamline regulatory processes, and enhance transparency and accountability can strengthen water governance in Tamil Nadu and improve the efficiency and effectiveness of water management systems.
                Policy and regulatory reforms are essential for ensuring equitable access to water resources, particularly for marginalized and vulnerable communities. By implementing policies that prioritize the needs of underserved populations, establish water rights, and promote participatory water management approaches, Tamil Nadu can ensure that all residents have access to safe and reliable water services.
                </p>

            </div>


        </div>
    )
}
function RTElements2(){
    return(
        <div className="pages-element-2">
            <LabelContainer/>

        </div>
    )
}