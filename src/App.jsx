import { useState } from 'react'

import './App.css'
import Header from './Header/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'

function App() {

  return (
    // <>
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Header/>}/>
    //   <Route path='/Login' element={<Login/>}/>
    // </Routes>
    // </BrowserRouter>
    
    // </>
    <>
    <SignUp/>
    </>
  )
}

export default App
