import { useEffect, useState } from 'react'

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
import ForgetPassword from './components/UserLoginPassword'


function App() {
  const [Username,setUsername]=useState("")
  const [isLogin,setisLogin]=useState(false)






  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home isLogin={isLogin} setisLogin={setisLogin}/>}/>
      <Route exact path='/Login' element={<Login Username={Username} setUsername={setUsername} setisLogin={setisLogin} isLogin={isLogin}/>}/>
      <Route path='/signup' element={<SignUp isLogin={isLogin}/>}/>
      {isLogin&&<Route path='/People' element={<Complaints isLogin={isLogin} setisLogin={setisLogin} />}/>}
      <Route path='/Complaint-form' element={<ComplaintForm isLogin={isLogin} setisLogin={setisLogin} Username={Username}/>}/>
      <Route path='/officer-login' element={<OfficerLogin/>}/>
      <Route path='/officer-Home' element={<OfficerPage/>}/>
      <Route path='/Education-Development' element={<EducationandDevelopment isLogin={isLogin} setisLogin={setisLogin}/>}/>
      <Route path='/Agriculture-and-Development' element={<AgricultureandDevelopment isLogin={isLogin} setisLogin={setisLogin}/>}/>
      <Route path='/Roads-and-Transport' element={<RoadsandTransport isLogin={isLogin} setisLogin={setisLogin}/>}/>
      <Route path='/Water-Supply-and-Sanitation' element={<WaterSupplyandSanitation isLogin={isLogin} setisLogin={setisLogin}/>}/>
      <Route path='/Electricity-and-Power' element={<ElectricityandPower isLogin={isLogin} setisLogin={setisLogin}/>}/>

    </Routes>
    </BrowserRouter>
    {/* <ForgetPassword/> */}
  
    
    </>
 
  )
}

export default App
