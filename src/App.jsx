import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Home from './Home/Home'
import OfficerPage from './officer/officer'

function App() {

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter> */}
    <OfficerPage/>

    {/* <LoadingAnimation/> */}
    
    </>
 
  )
}

export default App
