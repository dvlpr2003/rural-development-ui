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

function App() {
  const [Username,setUsername]=useState("")
  const [isLogin,setisLogin]=useState(false)



  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home isLogin={isLogin}/>}/>
      <Route exact path='/Login' element={<Login Username={Username} setUsername={setUsername} setisLogin={setisLogin} isLogin={isLogin}/>}/>
      <Route path='/signup' element={<SignUp isLogin={isLogin}/>}/>
      <Route path='/People' element={<Complaints isLogin={isLogin}/>}/>
      <Route path='/Complaint-form' element={<ComplaintForm isLogin={isLogin}/>}/>

    </Routes>
    </BrowserRouter> */}
    <OfficerPage/>
    {/* <Complaints/> */}
    {/* <LoadingAnimation/> */}
    {/* <ComplaintForm/> */}
    
    </>
 
  )
}

export default App
