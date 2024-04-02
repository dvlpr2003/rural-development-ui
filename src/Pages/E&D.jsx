import Header from "../Header/Header"
import Footer from "../footer/footer"
import LabelContainer from "./Label"
import "./pages.css"

export default function EducationandDevelopment({isLogin,setisLogin}){
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
            <h1 style={{marginTop:"2rem",marginBottom:"2rem",color:"#393737",fontFamily:"Archivo Black",fontWeight:"normal",fontSize:"2.6rem"}}>Education and Development</h1>
            <img src="Home-container-4/Education.jpeg" style={{width:"20rem",height:"20rem",borderRadius:"20px",marginBottom:"2rem"}}/>
            <div className="page-container-1">
                <h3>Quality Education and Teacher Training</h3>
                <span>Quality education ensures that students acquire knowledge, skills, and competencies that are relevant, meaningful, and applicable to real-world contexts in Tamil Nadu. By emphasizing learner-centered approaches, active learning methodologies, and experiential learning opportunities, quality education promotes deeper understanding, retention, and application of concepts, leading to improved academic performance and learning outcomes for students.
                Quality education promotes equity and inclusion by ensuring that all students, regardless of their background, abilities, or socio-economic status, have access to high-quality learning opportunities in Tamil Nadu. By addressing disparities, providing targeted support for marginalized groups, and fostering a culture of diversity and inclusivity, quality education helps narrow the achievement gap and promote social justice and equality in education.
                Effective teacher training programs enhance the quality and effectiveness of teaching practices in Tamil Nadu. By providing pre-service and in-service training, professional development opportunities, and mentoring support, teacher training initiatives equip educators with the pedagogical knowledge, classroom management skills, and instructional strategies needed to engage students, facilitate learning, and promote positive learning outcomes.


                </span>

            </div>
            <div className="page-container-1">
                <h3>Promotion of Inclusive and Equitable Education</h3>
                <span>
                Inclusive and equitable education initiatives aim to address disparities in access to education by targeting marginalized groups such as girls, children from low-income families, those with disabilities, and ethnic minorities in Tamil Nadu. By providing targeted interventions, scholarships, transportation assistance, and support services, inclusive education promotes equal opportunities for all students, narrowing the gap in educational access and outcomes.
                Inclusive education fosters a culture of diversity, respect, and acceptance in Tamil Nadu schools and communities. By celebrating cultural differences, promoting tolerance, and combating discrimination and prejudice, inclusive education creates inclusive learning environments where every student feels valued, respected, and supported, enhancing their sense of belonging and well-being.
                Equitable education ensures that all students receive the support and resources they need to succeed academically in Tamil Nadu. By providing additional learning support, remedial classes, and specialized services for students with diverse learning needs, equitable education initiatives help level the playing field, improve learning outcomes, and maximize the potential of every student, regardless of their background or abilities.
                </span>


            </div>
            <div className="page-container-1">
                <h3>Technical and Vocational Education and Training (TVET)</h3>
                <span>
                TVET programs equip students with the practical skills, technical knowledge, and hands-on experience needed to enter and succeed in the workforce in Tamil Nadu. By offering training in various trades, professions, and industries, TVET bridges the gap between education and employment, preparing individuals for immediate entry into the labor market and facilitating their transition to productive and fulfilling careers.
                TVET addresses the evolving needs of industries and employers by providing training that is aligned with market demand and industry standards in Tamil Nadu. By collaborating with industry partners, conducting labor market assessments, and updating training programs to reflect emerging trends and technologies, TVET ensures that graduates are equipped with the skills and competencies needed to meet current and future labor market demands.
                TVET programs promote entrepreneurship and self-employment opportunities by providing individuals with the knowledge, resources, and support needed to start and manage their own businesses in Tamil Nadu. By offering training in business management, financial literacy, and entrepreneurship skills, TVET empowers individuals to pursue entrepreneurial ventures, create jobs, and contribute to economic development and innovation in the state.


                </span>

            </div>
            <div className="page-container-1">
                <h3>Promotion of Higher Education and Research</h3>
                <span>
                Higher education and research institutions serve as hubs of knowledge creation, innovation, and intellectual inquiry in Tamil Nadu. By conducting cutting-edge research, developing new technologies, and generating intellectual capital, higher education institutions contribute to scientific advancements, technological innovations, and economic competitiveness, driving growth and prosperity in the state.
                Higher education plays a vital role in developing human capital by equipping individuals with the knowledge, skills, and competencies needed to succeed in the knowledge-based economy of Tamil Nadu. By offering undergraduate, graduate, and professional programs in diverse fields of study, higher education institutions prepare students for careers in various sectors, including industry, academia, government, and entrepreneurship, enhancing their employability and socio-economic mobility.
                Higher education promotes lifelong learning and personal development by providing opportunities for continuous upskilling, reskilling, and professional growth in Tamil Nadu. By offering flexible learning pathways, continuing education programs, and online courses, higher education institutions enable individuals to update their skills, acquire new knowledge, and stay abreast of emerging trends and technologies, enhancing their competitiveness and adaptability in the labor market.
                </span>

            </div>
            <div className="page-container-1">
                <h3>Enhancement of Digital Literacy and Technology Integration</h3>
                <span>
                Digital literacy and technology integration provide individuals in Tamil Nadu with access to vast amounts of information and knowledge. By leveraging digital tools, online resources, and internet connectivity, individuals can access educational materials, research resources, and learning opportunities from anywhere, empowering them to acquire new skills, expand their knowledge, and pursue lifelong learning.
                Digital literacy empowers individuals, particularly marginalized groups, by providing them with the skills, knowledge, and resources needed to participate in the digital economy and society in Tamil Nadu. By bridging the digital divide, promoting digital inclusion, and providing training and support for underserved populations, digital literacy initiatives empower individuals to access opportunities, participate in civic life, and improve their socio-economic well-being.
                Technology integration enhances teaching and learning experiences by providing educators and students with innovative tools and resources to facilitate interactive, engaging, and personalized learning experiences in Tamil Nadu. By incorporating multimedia content, educational apps, and online platforms into classroom instruction, technology integration enables educators to cater to diverse learning styles and preferences, enhance student engagement, and improve learning outcomes.
                </span>

            </div>
            <div className="page-container-1"style={{marginBottom:"2rem"}}>
                <h3>Community Engagement and Parental Involvement</h3>
                <span>
                Community engagement strengthens partnerships between schools, families, and local communities in Tamil Nadu. By involving community members, local organizations, and businesses in education initiatives, schools can leverage community resources, expertise, and support to enrich learning experiences, promote holistic development, and address the diverse needs of students.
                Parental involvement in education positively impacts student learning and achievement in Tamil Nadu. By fostering a culture of support, encouragement, and high expectations for academic success at home, parents play a crucial role in motivating students, reinforcing learning goals, and instilling values of perseverance and resilience, leading to improved academic performance and overall well-being.
                Community engagement promotes school accountability and transparency in Tamil Nadu. By encouraging open communication, dialogue, and collaboration between schools and communities, community engagement initiatives foster trust, accountability, and shared responsibility for educational outcomes, leading to greater transparency in decision-making processes and improved governance in schools.
                </span>

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