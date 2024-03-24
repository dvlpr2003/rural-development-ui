import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Home from './Home/Home'
import OfficerPage from './officer/officer'
import Complaints from './complaints/Complaints'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/People' element={<Complaints/>}/>
    </Routes>
    </BrowserRouter>
    {/* <OfficerPage/> */}
    {/* <Complaints/> */}
    {/* <LoadingAnimation/> */}
    
    </>
 
  )
}

export default App
