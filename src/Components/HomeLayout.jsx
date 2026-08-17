import React from 'react'
import HomeImage from '../assets/HomeImage.png'
import { ArrowRight, LucideAlertCircle, MoveRight, RadioTower, Settings, Truck, Wrench, WrenchIcon, WrenchOff } from 'lucide-react'
import Footer from './Footer'

function HomeLayout() {
  return (
    <div className='w-full flex flex-col gap-5 lg:gap-14'>
        <div className='flex justify-between w-full lg:h-[25rem] '>
            <div className='w-[50%] flex flex-col justify-center gap-5 lg:gap-9 bg-secondary-500 p-7 lg:p-8'>
              <div className='flex gap-4'>
                <WrenchOff className='text-primary-500' />
                <label className='text-buttoncolor'>RAPID RESPONSE NETWORK</label>

              </div>
            <div className='flex flex-col gap-1 lg:gap-3 '>
                <h2 className='text-2xl lg:text-3xl font-semibold text-white'>INDUSTRIAL GRADE </h2>
                <h2 className='text-2xl lg:text-3xl font-semibold text-white'>VEHICLE RECOVERY </h2>
            </div>
              <div className='flex gap-2 py-2 flex-col w-full'>
                <label className='text-buttoncolor text-sm w-full  lg:w-[80%]'>The definitive platform connecting stranded commercial and heavy-duty vehicles with certified local expert mechanics. Precision logistics for critical downtime mitigation.</label>

              </div>

              <div className=' flex w-full py-2 gap-2 lg:gap-4'>
               <button className='bg-primary-500 hover:bg-buttoncolor flex  px-4 hover:text-black rounded-md gap-3 p-2'>Book Repair  <MoveRight/> </button>
             <button className='bg-lightgray hover:bg-buttoncolor text-light hover:text-black rounded-md px-4  p-2'>Services </button>


              </div>

            </div>
            
                <div className='relative w-[50%] inset-0 bg-cover bg-center' >
                           <div className='absolute right-0 top-0 h-full w-full inset-0 bg-cover bg-center' style={{backgroundImage:`url(${HomeImage})`}}>
                            <div className='absolute h-full inset-0 bg-gradient-to-r from-black to-gray-100/10 '>

                            </div>
                            </div> 
            </div>
            


        </div>
        <div className=' flex w-full flex-col  p-2 py-4 text-buttoncolor gap-7 justify-center items-center'>
          <div className=' flex w-full justify-center items-center flex-col gap-3'>
            <h2 className='text-2xl w-full text-center text-light font-semibold lg:w-[70%]'>COMPREHENSIVE RECURSIVE SOLUTIONS</h2>
            <h2 className=' w-full text-center lg:w-[60%]'>Tailored mechanical intervention for commercial fleets and heavy-duty assets, designed to minimize operational disruption.</h2>

          </div>
          <div className='w-full flex flex-col gap-3 lg:gap-6 lg:flex-row justify-center items-center px-5'>
            <div className='flex lg:w-[32%] bg-tertiary py-8 rounded-md shadow-lg flex-col p-5 gap-5'>
              <div className='bg-gray-300/40 rounded-md p-2 flex justify-center w-[15%] items-center'>
              <Settings className='text-light w-[2rem] h-[2rem] '/>
              </div>
              <h2 className='text-light font-semibold text-xl'>Emergency Roadside</h2>
              <label className='text-buttoncolor w-[90%]'>Immediate deployment of specialized diagnostic units to your exact location. On-site triage and critical repairs to get assets moving.</label>
            <div className='flex gap-3 items-center p-2'>  <label className='text-buttoncolor hover:underline'>Learn more</label>
              <ArrowRight className='text-base'/>
            </div>
            </div>
            <div className='flex lg:w-[32%] bg-tertiary py-8 rounded-md shadow-lg flex-col p-5 gap-5'>
              <div className='bg-gray-300/40 rounded-md p-2 flex justify-center w-[15%] items-center'>
              <Wrench className='text-light w-[2rem] h-[2rem] '/>
              </div>
              <h2 className='text-light font-semibold text-xl'>Scheduled Maintenance</h2>
              <label className='text-buttoncolor w-[90%]'>Proactive preventative care programs orchestrated through our network of certified heavy-duty service centers.</label>
              <div className='flex gap-3 items-center p-2'>  <label className='text-buttoncolor hover:underline'>Learn more</label>
              <ArrowRight className='text-base'/>
            </div>
            </div>
            <div className='flex lg:w-[32%] bg-tertiary py-8 rounded-md shadow-lg flex-col p-5 gap-5'>
              <div className='bg-gray-300/40 rounded-md p-2 flex justify-center w-[15%] items-center'>
              <Truck className='text-light w-[2rem] h-[2rem] '/>
              </div>
              <h2 className='text-light font-semibold text-xl'>Fleet Recovery</h2>
              <label className='text-buttoncolor w-[90%]'>Coordinated extraction and logistics for severe mechanical failures. Seamless integration with our workshop bay scheduling.</label>
              <div className='flex gap-3 items-center p-2'>  <label className='text-buttoncolor hover:underline'>Learn more</label>
              <ArrowRight className='text-base'/>
            </div>
            </div>
            
          </div>

          <div className='min-h-[10rem] text-black flex bg-primary-500 w-full p-3 gap-2 lg:min-h-[15rem]'>
            <div className='flex w-[50%] p-5 gap-2 lg:gap-6 justify-center flex-col'>
              <h2 className='text-black/90 lg:text-2xl'>Platform Velocity</h2>
              <label className='text-black/50'>Real-time metrics tracking the efficiency of our dispatch and repair network.</label>

            </div>
             <div className='flex w-[50%] flex-col gap-4 lg:gap-7 justify-center items-center'>
              <div className='p-2 flex w-full justify-center items-center gap-3 lg:gap-6 px-3 lg:px-8'>
                
                <div className='bg-black/10 p-2 px-3 w-[50%] lg:w-[30%] gap-2 lg:gap-4 flex flex-col '>
                <label className='text-black/60'>ACTIVE MECHANICS</label>
                <h2 className='font-semibold text-xl lg:text-3xl px-2'>342</h2>

                </div>
                <div className='bg-black/10 p-2 px-3 w-[50%]  lg:w-[30%] gap-2 lg:gap-4 flex flex-col '>
                <label className='text-black/60'>AVG.ARRIVAL</label>
                <h2 className='font-semibold text-xl lg:text-3xl px-2'>8,456</h2>

                </div>
              </div>
               <div className='bg-black/10 p-2 px-3 w-[90%] lg:w-[60%] gap-4 flex flex-col '>
                <label className='text-black/60'>SUCCESSFULL RECOVERIES</label>
                <h2 className='font-semibold text-xl lg:text-3xl px-2'>3,142</h2>

                </div>
              

            </div>
            

          </div>

          <div className='w-full p-2 py-8 text-light'>
          <div className='py-12 px-8' >
            <h2 className='text-lg font-bold lg:text-2xl'>STANDARD</h2>
             <h2 className='text-lg font-bold lg:text-2xl'>OPERATING PROCEDURE</h2>
            </div>  
            <div className='w-full flex flex-col gap-3 lg:gap-6 lg:flex-row justify-center items-center px-5'>
            <div className='flex lg:w-[32%] bg-tertiary py-4 rounded-md shadow-lg flex-col p-5 gap-5'>
              <div className='bg-black/10 rounded-md p-2 flex justify-center w-[15%] items-center'>
              <RadioTower className='text-primary-500 w-[2rem] h-[2rem] '/>
              </div>
              <h2 className='text-light font-semibold text-xl'>Request Deployment</h2>
              <label className='text-buttoncolor w-[90%]'>Submit a distress signal with precise geolocation and vehicle telemetry. The system automatically categorizes the mechanical failure.</label>
            
            </div>
            <div className='flex lg:w-[32%] bg-tertiary py-4 rounded-md shadow-lg flex-col p-5 gap-5'>
              <div className='bg-black/10 rounded-md p-2 flex justify-center w-[15%] items-center'>
              <LucideAlertCircle className='text-primary-500 w-[2rem] h-[2rem] '/>
              </div>
              <h2 className='text-light font-semibold text-xl'>Algorithmic Match</h2>
              <label className='text-buttoncolor w-[90%]'>Our dispatch engine cross-references the required expertise with proximity and availability of certified technicians.</label>
              
            </div>
            <div className='flex lg:w-[32%] bg-tertiary py-4 rounded-md shadow-lg flex-col p-5 gap-5'>
              <div className='bg-black/10 rounded-md p-2 flex justify-center w-[15%] items-center'>
              <WrenchIcon className='text-primary-500 w-[2rem] h-[2rem] '/>
              </div>
              <h2 className='text-light font-semibold text-xl'>Field Repair</h2>
              <label className='text-buttoncolor w-[90%]'>Technician arrives fully equipped. Post-repair diagnostics are verified via the platform before final release.</label>
              
            </div>
            
          </div>

          </div>

        </div>
        <Footer/>

    </div>
  )
}

export default HomeLayout