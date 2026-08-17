import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import mechanic from '../assets/mechanic.png'

function RegistrationStatus() {
  return (
    <div className='w-full lg:w-[50%] h-full relative flex lg:z-10 justify-center items-center bg-secondary-500'>
        <div className='absolute h-full lg:w-[50%] lg:hidden inset-0 bg-cover bg-black/30 bg-center' style={{backgroundImage:`url(${mechanic})`}}/>
        <div className='absolute w-full h-full  lg:bg-black bg-black/70 flex justify-center items-center'>
        <div className='w-[65%]  gap-19 lg:w-[80%] bg-black border shadow-lg flex flex-col border-gray-300 rounded-xl p-4 lg:p-8'>
            <div className='flex flex-col p-2 lg:p-4 gap-2 justify-center items-center lg:gap-4'>
                <h2 className='text-buttoncolor text-xl lg:text-4xl'>Registration Successfully Completed</h2>
                <div className='flex justify-center'>
                <CheckCircle2  className='text-primary-500 w-[3rem] h-[3rem]'/>
                </div>

            </div>
            <div className='flex w-full justify-center items-center p-3 lgp-8'>
                <h2 className='text-buttoncolor text-lg lg:text-xl'>Our admin section validate your documents.we will notify you when validation is completed.</h2>
            </div>

        </div>
       </div>
       
    </div>
  )
}

export default RegistrationStatus