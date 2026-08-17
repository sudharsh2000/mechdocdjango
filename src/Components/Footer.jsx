import { Wrench } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-between p-5 gap-4 lg:gap-6'>
        <div className='flex justify-between p-3'>

            <div className='flex items-center gap-3 w-[60%] lg:gap-5'>
                <Wrench className='w-[1rem] h-[1rem] text-primary-500'/>
                <h2 className='text-lg lg:text-xl text-buttoncolor' >MECHDOC</h2>

            </div>
            <div className='text-buttoncolor justify-end-safe w-[40%] flex gap-3'>
                <label className='text-sm'>PRIVACY</label>
                 <label className='text-sm'>TERMS</label>
                  <label className='text-sm'>SUPPORT</label>
                   <label className='text-sm'>API</label>

            </div>

        </div>
         <label className='text-buttoncolor/40 text-sm'>Technician arrives fully equipped. Post-repair diagnostics are verified via the platform before final release.</label>



    </div>
  )
}

export default Footer