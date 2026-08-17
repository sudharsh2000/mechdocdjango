import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { NavabarContext } from '../App'
import { useContext } from 'react'
import HomeLayout from '../Components/HomeLayout'

function UserHomePage() {
  const {navbarOn,setNavbar}=useContext(NavabarContext)
  return (
    <div className='bg-secondary-500 min-h-screen'>
        <Navbar/>
          <div className='w-full flex'>
          <div className={`${navbarOn ?'flex':'hidden'} lg:flex lg:w-[20%]`}>
          <Sidebar/>
          </div>
          <div className='w-full lg:w-[80%] '>
          <HomeLayout/>
          </div>
          </div>
        
       

    </div>
  )
}

export default UserHomePage