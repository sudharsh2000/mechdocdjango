import React, { useState } from 'react'
import InputField from './InputField'
import { ArrowRight, LoaderCircleIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function SignInComponent() {

    const navigate=useNavigate()
    const [loading,setLoading]=useState(false)
    const [usertype,setUsertype]=useState('user')

    const [formdata,SetFormdata]=useState({
        login:'',
        password:''
    })

    const [error,setError]=useState({
        login:'',
        password:''
    })


const SigninFn=async(e)=>{
    e.preventDefault()
    let returnval=true
}

  return (
    <div className='flex justify-center items-center w-[70%] lg:w-[50%] h-full  p-2 lg:p-4'>
            <div className='flex  justify-center px-12 lg:px-1 items-center flex-col gap-3 lg:gap-8 pb-2 lg:pb-5 w-full lg:w-[55%] lg:p border bg-greyColor rounded-2xl shadow-lg '>

            <div className='flex w-full rounded-t-xl items-start justify-start'>
                <button className={` ${usertype==='user' ? 'border-buttonColor border-b-2 bg-gray-900/80 text-buttoncolor':'text-buttoncolor/60 '} w-[50%] font-serif   px-3 lg:px-5 py-2 lg:py-3 rounded-tl-xl  `} onClick={()=>setUsertype('user')}>User</button>
                <button className={` ${usertype==='mechanic' ? 'border-buttonColor border-b-2 bg-gray-900/80 text-buttoncolor':'text-buttoncolor/60 '} w-[50%] font-serif   px-3 lg:px-5 py-2 lg:py-3 rounded-tr-xl  `} onClick={()=>setUsertype('mechanic')}>Mechanic</button>

            </div>
            <div className='flex flex-col gap-2 lg:gap-3 w-full justify-center items-center '>
                <h2 className='font-serif font-bold text-lg lg:text-3xl text-gray-100'>{usertype==='user' ? 'Client Sign In' : 'Mechanic Sign In'}</h2>
                <h3 className='font-serif text-base lg:text-xl text-buttoncolor/80'>{usertype==='user' ? 'Manage Your Vehicle Repairs' : 'Provide Professional Mechanical Services'}</h3>
                

            </div>

           <form onSubmit={SigninFn} className='w-full lg:w-full py-4 lg:py-6 lg:gap-8 gap-3 px-3 lg:px-10 '>
            <InputField value={'login'} setValue={SetFormdata} formtype={formdata} filetype="text" placeholder="Username or email" errortype={error} errorvalue={error.login} setErrorValue={setError} />
           <InputField value={'password'} setValue={SetFormdata} formtype={formdata} filetype="password" placeholder="Password" errortype={error} errorvalue={error.password} setErrorValue={setError}/>
            <div className='flex justify-center py-3 relative'>
              {loading && <LoaderCircleIcon className='absolute right-[30%]' />}
           
            <button type="submit" className='flex gap-3 lg:gap-5 bg-buttoncolor rounded-lg w-[95%] cursor-pointer justify-center py-2 lg:py-3 text-lg lg:text-xl' > Sign In  <ArrowRight/> </button>

            </div>
            <div className='flex gap-2 lg:gap-3 px-2 lg:px-5'>
                <label className='text-light'>Dont have an account ?</label>
                 <p onClick={()=>navigate('/signup')} className='text-light cursor-pointer hover:text-buttoncolor'> create account</p>
            </div>
            
            </form>
            </div>
    </div>
  )
}

export default SignInComponent