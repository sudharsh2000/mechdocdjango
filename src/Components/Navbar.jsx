import { Search } from 'lucide-react'
import React from 'react'
import { NavabarContext } from '../App'
import { useContext } from 'react'

function Navbar() {
  const {navbarOn,setNavbar}=useContext(NavabarContext)
  return (
    <div className='flex bg-tertiary  justify-end-safe p-4 lg:p-5 lg:px-15 lg:gap-22'>

      <div className=' w-[15%] '>
      <div className=' lg:hidden p-1 bg-black/10 text-white rounded-md flex justify-center items-center w-[50%]' onClick={()=>setNavbar(true)}>
        <label className='text-4xl text-buttoncolor'>☰</label>
        </div>
        </div>
        <div className=' flex px-2 gap-2 bg-lightgray justify-start items-center rounded-md w-[55%]  '>
            <Search className='text-buttoncolor h-[50%]'/>
            <input placeholder='Search workshop,mechanic or jobs' className='outline-none w-[90%] text-textcolor text-sm lg:text-base p-2  border-none  lg:p-3'/>
        </div>
        <div className='flex justify-end px-2 w-[30%] lg:px-4 gap-2 lg:gap-8'>
            <button className='bg-lightgray rounded-md font-bold hover:bg-black/60 text-textcolor text-sm lg:text-base  py-1 px-4 cursor-pointer lg:px-4'>Login</button>
          <button className='bg-primary-500 rounded-md font-bold hover:bg-primary-500/60 text-sm lg:text-base text-secondary-500 py-1 px-3 cursor-pointer lg:px-4'>Get started</button>

        </div>

    </div>
  )
}

export default Navbar