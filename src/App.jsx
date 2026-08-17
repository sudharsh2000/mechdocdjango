import React, { createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './Pages/SignupPage'
import SigninPage from './Pages/SigninPage'
import UserHomePage from './Pages/UserHomePage'
import { useState } from 'react'
export const NavabarContext=createContext()
function App() {
  const [navbarOn,setNavbar]=useState(false)
  return (
    <NavabarContext.Provider value={{navbarOn,setNavbar}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserHomePage/>} />
      <Route path="/about" element={<div>About Page</div>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/signin" element={<SigninPage/>} />
      </Routes>
      </BrowserRouter>
      </NavabarContext.Provider>
    
    
  )
}

export default App