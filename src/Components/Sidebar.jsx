import React, { useContext, useState } from 'react'
import mechdoc from '../assets/mechdoc.png'
import { Clock4Icon, RotateCcwClock, Wrench, XCircle } from 'lucide-react'
import { NavabarContext } from '../App'

function Sidebar() {
    const [butontype,setButtontype]=useState('')
    const {navbarOn,setNavbar}=useContext(NavabarContext)
  return (
    <div className='bg-tertiary w-[50%] z-20 fixed top-0 justify-start items-start gap-18 py-7  lg:gap-22 flex flex-col lg:w-[20%] min-h-screen p-2 '>
        <div className='flex w-full  bg-tertiary relative justify-start gap-3 lg:gap-7 items-center px-5'>
            <img src={mechdoc} className='w-[12%]' />
            <h2 className=' text-buttoncolor text-2xl lg:text-3xl font-bold'>Mechdoc</h2>
            
        </div>
      {

 navbarOn&&       <div onClick={()=>setNavbar(false)} className='absolute rounded-full bg-black/20  hover:bg-gray-500/50 right-5 top-5'>
            <XCircle className='text-buttoncolor/50 '/>

            </div>
}
        <div className='flex w-full flex-col gap-8  justify-start items-start'>
            <label className='text-buttoncolor/60 font-serif px-12'>BOOKINGS</label>
            <div className='w-full flex flex-col justify-center gap-9  items-center'>
                
            <ul className='w-full flex justify-center items-center'>
                <div onClick={()=>setButtontype('repair') } className={`${butontype==='repair'?'bg-buttoncolor text-black':'text-buttoncolor'} rounded-md w-[90%] hover:bg-buttoncolor hover:text-secondary-500 flex gap-2 justify-start  items-center p-2  lg:p-3 px-5 lg:px-5`}>
                    <Wrench className='w-[2rem] '/>
                    <label className={`px-2 lg:text-lg`}>Book Repair</label>
                </div>
            </ul>
              <ul className='w-full flex justify-center items-center'>
                <div onClick={()=>setButtontype('request') } className={`${butontype==='request'?'bg-buttoncolor text-black':'text-buttoncolor'} rounded-md w-[90%] hover:bg-buttoncolor hover:text-secondary-500 flex gap-2 justify-start  items-center p-2 lg:p-3 px-5 `}>
                    <RotateCcwClock className='w-[2rem] '/>
                    <label className={`px-2 lg:text-lg`}>My Requests</label>
                </div>
            </ul>
            </div>

        </div>

    </div>
  )
}

export default Sidebar