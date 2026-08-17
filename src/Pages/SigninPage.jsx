import React from 'react'
import SignViewLayout from '../Components/SignViewLayout'
import SignInComponent from '../Components/SignInComponent'


function SigninPage() {
  return (
    <div className='flex justify-center lg:justify-between  gap-2 bg-secondary-500 h-screen'>
        <SignViewLayout/>
       <SignInComponent/>

    </div>
  )
}

export default SigninPage