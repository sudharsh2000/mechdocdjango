import React from 'react'
import SignViewLayout from '../Components/SignViewLayout'
import SignupComponent from '../Components/SignupComponent'

function SignupPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-secondary-500 ">
        <SignViewLayout/>
        <SignupComponent/>
        
        </div>
  )
}

export default SignupPage