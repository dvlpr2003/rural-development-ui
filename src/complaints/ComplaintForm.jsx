import { useSearchParams } from "react-router-dom"
import "./ComplaintForm.css"
import axios from '/node_modules/axios';

import { useEffect, useState } from "react"
import Header from "../Header/Header";
import Footer from "../footer/footer";
import { useNavigate } from 'react-router-dom';



export default function ComplaintForm({isLogin,Username}){
    const navigate = useNavigate();

    const [ComplaintImage, setComplaintImage] = useState();
    const [ComplaintCategory,setComplaintCategory]=useState("")
    const [ComplaintName,setComplaintName] = useState("")
    const [ComplaintLocation,setComplaintLocation]=useState("")
    const [ComplaintDistrict,setComplaintDistrict]=useState("")
    const [ComplaintPincode,setComplaintPincode]=useState()
    const [ComplaintDes,setComplaintDes] = useState("")
    const handleFileChange = (event) => {
        setComplaintImage(event.target.files[0]);
      };
    async function UpdateComplaint(){
        const formData = new FormData();
        formData.append('ComplaintImage', ComplaintImage);
        formData.append('ComplaintCategory', ComplaintCategory);
        formData.append('ComplaintName', ComplaintName);
        formData.append('ComplaintLocation', ComplaintLocation);
        formData.append('ComplaintDistrict', ComplaintDistrict);
        formData.append('ComplaintPincode', ComplaintPincode);
        formData.append('ComplaintDes', ComplaintDes);

        try{
            const response = await axios.post(`https://dvlpr2003.pythonanywhere.com/api/complaint/${Username}/`,formData,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
            if (response.data["hi"] === "success"){
                navigate("/People")
            }


         
        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
        <Header isLogin={isLogin}/>
        <div id="complaint-form-main">
            <FormBody 
            setComplaintCategory={setComplaintCategory}
            setComplaintName={setComplaintName}
            setComplaintLocation={setComplaintLocation}
            setComplaintDistrict={setComplaintDistrict}
            setComplaintPincode={setComplaintPincode}
            setComplaintDes={setComplaintDes}
            handleFileChange={handleFileChange}
            UpdateComplaint={UpdateComplaint}
            />
          
        </div>
        {/* <Footer/> */}
        </>

    )
}
function FormHeading(){
    return(
        <div id="complaint-heading">

        </div>
    )
}
function FormBody({setComplaintCategory,setComplaintName,setComplaintLocation,setComplaintDistrict,setComplaintPincode,setComplaintDes,handleFileChange,UpdateComplaint }){

    return(

        <div id="form-body">
            <div id="category">
                <span>Select Category</span>
                <select onChange={(e)=>setComplaintCategory(e.target.value)}>
                    <option value="Roads and Transportation">Roads and Transportation</option>
                    <option value="Electricity and Power">Electricity and Power</option>
                    <option value="Water Supply and Sanitation">Water Supply and Sanitation</option>
                    <option value="Agriculture Development">Agriculture Development</option>
                    <option value="Education Development">Education Development</option>
                    <option value="Other">Other</option>
                    
                </select>
            </div>
            <div id="comp-name">
                <span>Complaint Name</span>
                <input type="text" onChange={(e)=>setComplaintName(e.target.value)} />
            </div>
            <div id="comp-image">
                <span>Image</span>
                <input type="file" onChange={handleFileChange}/>
            </div>
            <div id="comp-location">
                <span>Location</span>
                <input type="text" name="myimg" onChange={e=>setComplaintLocation(e.target.value)}/>

            </div>
            <div id="comp-dist">
                <span>District</span>
                <select name="District"  onChange={e=>setComplaintDistrict(e.target.value)}>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Salem">Salem</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Vellore">Vellore</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Erode">Erode</option>
                <option value="Thoothukudi">Thoothukudi</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Ramanathapuram">Ramanathapuram</option>
                <option value="Karur">Karur</option>
                <option value="Namakkal">Namakkal</option>
                <option value="Virudhunagar">Virudhunagar</option>
                <option value="Krishnagiri">Krishnagiri</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Kanyakumari">Kanyakumari</option>
                <option value="Thiruvarur">Thiruvarur</option>
                <option value="Nagapattinam">Nagapattinam</option>
                <option value="Perambalur">Perambalur</option>
                <option value="Ariyalur">Ariyalur</option>
                <option value="The Nilgiris">The Nilgiris</option>
                <option value="Theni">Theni</option>
                <option value="Tiruvannamalai">Tiruvannamalai</option>
                <option value="Viluppuram">Viluppuram</option>
                <option value="Kancheepuram">Kancheepuram</option>
                <option value="Tirupathur">Tirupathur</option>
                <option value="Tiruvarur">Tiruvarur</option>
                <option value="Sivaganga">Sivaganga</option>
                <option value="Pudukkottai">Pudukkottai</option>
                <option value="Ranipet">Ranipet</option>
                <option value="Tenkasi">Tenkasi</option>
                <option value="Tiruppur">Tiruppur</option>
                <option value="Tiruvallur">Tiruvallur</option>
                </select>

            </div>
            <div id="comp-pincode">
                <span>Pincode</span>
                <input type="text" onChange={e=>setComplaintPincode(e.target.value)}/>

            </div>
            <div id="complaint-txt">
                <span>Write your complaint</span>
                <textarea onChange={e=>setComplaintDes(e.target.value)}>
                    
                </textarea>
            </div>
            <button className="complaint-form-register-btn"onClick={UpdateComplaint}>Register</button>
           

        </div>

    )
}