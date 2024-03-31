import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Home from './Home/Home'
import OfficerPage from './officer/officer'
import Complaints from './complaints/Complaints'
import ComplaintForm from './complaints/ComplaintForm'
import OfficerLogin from './officer/OfficerLogin'
import RoadsandTransport from './Pages/R&T'
import ElectricityandPower from './Pages/E&P'
import WaterSupplyandSanitation from './Pages/W&S'
import AgricultureandDevelopment from './Pages/A&D'
import EducationandDevelopment from './Pages/E&D'

function App() {
  const [Username,setUsername]=useState("")
  const [isLogin,setisLogin]=useState(false)



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home isLogin={isLogin}/>}/>
      <Route exact path='/Login' element={<Login Username={Username} setUsername={setUsername} setisLogin={setisLogin} isLogin={isLogin}/>}/>
      <Route path='/signup' element={<SignUp isLogin={isLogin}/>}/>
      <Route path='/People' element={<Complaints isLogin={isLogin}/>}/>
      <Route path='/Complaint-form' element={<ComplaintForm isLogin={isLogin}/>}/>
      <Route path='/officer-login' element={<OfficerLogin/>}/>
      <Route path='/officer-Home' element={<OfficerPage/>}/>
      <Route path='/Education-Development' element={<EducationandDevelopment/>}/>
      <Route path='/Agriculture-and-Development' element={<AgricultureandDevelopment/>}/>
      <Route path='/Roads-and-Transport' element={<RoadsandTransport/>}/>
      <Route path='/Water-Supply-and-Sanitation' element={<WaterSupplyandSanitation/>}/>
      <Route path='/Electricity-and-Power' element={<ElectricityandPower/>}/>

    </Routes>
    </BrowserRouter>
    {/* <RoadsandTransport/> */}
    {/* <ElectricityandPower/> */}
    {/* <WaterSupplyandSanitation/> */}
    {/* <AgricultureandDevelopment/> */}
    {/* <EducationandDevelopment/> */}
    {/* <OfficerLogin/> */}
    {/* <OfficerPage/> */}
    {/* <Complaints/> */}
    {/* <LoadingAnimation/> */}
    {/* <ComplaintForm/> */}
    
    </>
 
  )
}

export default App
