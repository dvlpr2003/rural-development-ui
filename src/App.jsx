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

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route exact path='/Login' Component={Login}/>
      <Route path='/signup' Component={SignUp}/>
      <Route path='/People' Component={Complaints}/>
    </Routes>
    </BrowserRouter>
    {/* <OfficerPage/> */}
    {/* <Complaints/> */}
    {/* <LoadingAnimation/> */}
    {/* <ComplaintForm/> */}
    
    </>
 
  )
}

export default App
