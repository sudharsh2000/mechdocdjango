import React from 'react'
import mechdoc from '../assets/mechdoc.png'
import mechanic from '../assets/mechanic.png'
function SignViewLayout() {
  return (
    <div className='hidden lg:flex w-[50%] h-full  flex-col p-2 justify-between bg-primary-500 '>
        <div className='realative h-full w-[50%] flex flex-col gap-3'>
      
        <div className='absolute h-full w-[50%] inset-0 bg-cover bg-center' style={{backgroundImage:`url(${mechanic})`}}/>
           <div className='absolute h-full w-[50%] inset-0 bg-gradient-to-r from-black/50 to-black/90 '/> 
           <div className='flex  h-full flex-col z-10 justify-between  lg:py-12  p-5'>
            <div className='flex gap-2 items-start justify-start'>
            <img src={mechdoc} alt="MechDoc" className='w-10 h-10 rounded-full'/>
            <h1 className='text-buttoncolor text-lg lg:text-3xl font-bold'>MechDoc</h1>
            </div>
            <div className='  w-full justify-center items-center'>
            <h2 className='text-buttoncolor  text-lg lg:text-3xl border-b-3 py-3 border-buttoncolor text-center  font-bold'>Industrial Grade Maintenance.
Precision Vehicle Recovery.</h2>
            </div>
            </div>
         

        </div>

       
        

    </div>
  )
}

export default SignViewLayout