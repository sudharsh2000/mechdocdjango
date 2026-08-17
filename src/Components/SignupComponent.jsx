import React, { useEffect, useRef, useState } from 'react'
import InputField from './InputField'
import { ArrowLeft, ArrowRight, Loader2, LoaderIcon } from 'lucide-react'
import axios from 'axios'
import { ResendOtpApi, SignupApi, VehicleCategoryApi, verifyOtpApi, WorkshopApi } from '../Auth/Api'
import { useNavigate } from 'react-router-dom'
import MechanicImg from '../assets/mechanic.png'
import UseGeoLocation from '../Hooks/UseGeoLocation'
import RegistrationStatus from './RegistrationStatus'


function SignupComponent() {
    const navigate=useNavigate()

    const [regsuccess,setRegsuccess]=useState(false)

     const [is_submit,setSumbit]=useState(false)
    const[loading,setLoading]=useState(false)
    const [otpdata,setOtp]=useState({
        otp:''
    })
    const [timerval,setTimer]=useState(5*60)
    const timerRef=useRef()
    const [specialization,setSpecialization]=useState([])
    const [spec_value,setSpecValue]=useState([])

    const [mechanic,setmechanic]=useState({
        mechanicsignup:false,
        layertype:1
    })
    const {location,location_loading,locationerror}=UseGeoLocation(mechanic)
    const [formdata,setFormdata]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:''
    })

    const [mechanicFormdata,setmechanicData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:'',
        "specialization": [],
longitude: "",
latitude: "",
address: "",
owner_name: "",
pincode: "",
district: "",
state: "",
proof_document: "",
shop_image: "",
gst_number:null,
opens_at: "",
closes_at: "",

    })

      const [error,setError]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:'',
        otp:''
    })


    const [mechanicerror,setMechanicerror]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:'',
        otp:'',
        address:'',
        owner_name:'',
        pincode:'',
        district:'',
        state:'',
        gst_number:0,
        opens_at:'12:00:00',
        closes_at:'12:00:00',
        proof_document:'',
        shop_image:''

    })

   

   if(regsuccess){
return( <RegistrationStatus/>)
   }  


    const validatefn=()=>{
        let returnval=true
        const demoerror={
            username:'',
            email:'',
        password:'',
            confirmPassword:'',
            otp:'',
            mobile:''
        }
        const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        console.log(formdata)

        if (formdata.username === '' ){

            demoerror.username='Please enter username'
            returnval=false
        }
        if (formdata.email === ''){
            demoerror.email='Please enter email id'
            returnval=false
        }
        else if (!formdata.email.endsWith('.com')){
            demoerror.email='Please enter valid email'
            returnval=false
        }
         console.log()
        if (!password_pattern.test(formdata.password) || formdata.password === ''){
            demoerror.password='Please enter Valid Password'
            returnval=false
        }
       
        else if (formdata.password.length < 6){
            demoerror.password='Please enter valid Password'
            returnval=false
        }
        if(formdata.confirmPassword ===''){
            demoerror.confirmPassword='Please enter confirm password'
            returnval=false
        }
        else if(formdata.password !==formdata.confirmPassword){
            demoerror.confirmPassword='Password missmatch'
            returnval=false
        }
        console.log('mobile',formdata.mobile.length)
        if (formdata.mobile === ''){
            demoerror.mobile='Please enter mobile number'
            returnval=false
        }
        
        else if (formdata.mobile.length !== 10){
            demoerror.mobile='Please enter valid mobile number'
            returnval=false
        }

        setError(demoerror)
        console.log(demoerror)
        return returnval

    }




    const mechanicValidate=()=>{
       
        let returnval=true
        const demoerror={
           username:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:'',
        otp:'',
        address:'',
        owner_name:'',
        pincode:'',
        district:'',
        state:'',
        gst_number:0,
        opens_at:'',
        closes_at:'',
        proof_document:'',
        shop_image:'',
        specialization:[]
        }
        const password_pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        console.log('mechancdata',mechanicFormdata)
        if (mechanic.mechanicsignup && mechanic.layertype==1){
        if (mechanicFormdata.username === '' ){

            demoerror.username='Please enter username'
            returnval=false
        }
        if (mechanicFormdata.email === ''){
            demoerror.email='Please enter email id'
            returnval=false
        }
        else if (!mechanicFormdata.email.endsWith('.com')){
            demoerror.email='Please enter valid email'
            returnval=false
        }
         console.log()
        if (!password_pattern.test(mechanicFormdata.password) || mechanicFormdata.password === ''){
            demoerror.password='Please enter Valid Password'
            returnval=false
        }
       
        else if (mechanicFormdata.password.length < 6){
            demoerror.password='Please enter valid Password'
            returnval=false
        }
        if(mechanicFormdata.confirmPassword ===''){
            demoerror.confirmPassword='Please re-enter password'
            returnval=false
        }
        else if(mechanicFormdata.password !==mechanicFormdata.confirmPassword){
            demoerror.confirmPassword='Password missmatch'
            returnval=false
        }
        console.log('mobile',mechanicFormdata.mobile.length)
        if (mechanicFormdata.mobile === ''){
            demoerror.mobile='Please enter mobile number'
            returnval=false
        }
        
        else if (mechanicFormdata.mobile.length !== 10){
            demoerror.mobile='Please enter valid mobile number'
            returnval=false
        }
    }
    else if(mechanic.mechanicsignup && mechanic.layertype === 2){
        if (mechanicFormdata.owner_name === '' ){

            demoerror.owner_name='Please enter owner name'
            returnval=false
        }
        if (mechanicFormdata.address === ''){
            demoerror.address='Please enter address'
            returnval=false
        }
         if (mechanicFormdata.pincode ===''){
            demoerror.pincode='Please enter Pincode'
            returnval=false
        }
        else if (mechanicFormdata.pincode.length!==6){
            demoerror.pincode='Please enter Valid Pincode'
            returnval=false
        }
        if (mechanicFormdata.district === '' ){

            demoerror.district='Please Select the district'
            returnval=false
        }
        if (mechanicFormdata.state === ''){
            demoerror.state='Please select the state'
            returnval=false
        }
         if (mechanicFormdata.gst_number ===0){
            demoerror.gst_number='Please enter gst number'
            returnval=false
        }
        
    }
    else if (mechanic.mechanicsignup && mechanic.layertype===3){
         if (mechanicFormdata.shop_image === '' ){

            demoerror.owner_name='Please upload shop image'
            returnval=false
        }
        if (mechanicFormdata.proof_document === ''){
            demoerror.proof_document='Please Please upload proof document'
            returnval=false
        }
         if (mechanicFormdata.closes_at ===''){
            demoerror.closes_at='Please enter closing time'
            returnval=false
        }
        if (mechanicFormdata.opens_at===''){
            demoerror.opens_at='Please enter opening time'
            returnval=false
        }
        if(spec_value===[]){
            demoerror.specialization='Please enter opening time'
            returnval=false

        }

    }

        setMechanicerror(demoerror)
        console.log(demoerror)
        return returnval

    }

    const mechanicSignup=async(e)=>{
        e.preventDefault()
         if (!mechanicValidate()){
            return
         } 
          if(mechanic.mechanicsignup){
            if (mechanic.layertype==1){
                setmechanic({...mechanic,layertype:2})
                return
            }
            if (mechanic.layertype===2){
                setmechanic({...mechanic,layertype:3})
                return
            }
            
        }
        const updated_data={...mechanicFormdata,specialization:spec_value,latitude: JSON.stringify( location.latitude.toFixed(2)),langitude:JSON.stringify( location.longitude.toFixed(2))}
        setmechanicData(updated_data)
        console.log(location.latitude)
    
       
        const formdata=new FormData()
        formdata.append("username",mechanicFormdata.username)
        formdata.append("email",mechanicFormdata.email)
        formdata.append("password",mechanicFormdata.password)
        formdata.append("mobile",mechanicFormdata.mobile)
        formdata.append("owner_name",mechanicFormdata.owner_name)
        formdata.append("address",mechanicFormdata.address)
        formdata.append("pincode",mechanicFormdata.pincode)
        formdata.append("district",mechanicFormdata.district)
        formdata.append("state",mechanicFormdata.state)
        formdata.append("gst_numeber",mechanicFormdata.gst_number)
        formdata.append("opens_at",mechanicFormdata.opens_at)
        formdata.append("closes_at",mechanicFormdata.closes_at)
        formdata.append("specialization",spec_value)
        formdata.append("latitude",JSON.stringify( location.latitude.toFixed(6)))
        formdata.append("longitude",JSON.stringify(location.longitude.toFixed(6)))
        formdata.append("shop_image",mechanicFormdata.shop_image)
        formdata.append("proof_document",mechanicFormdata.proof_document)


        try{
            console.log("spec",spec_value)
            console.log("success",mechanicFormdata)
            const mechanicresponse=await axios.post(WorkshopApi,formdata)
            console.log(mechanicresponse.data)
            setSumbit(true)


        }
        catch(er){
            console.log(er.response?.data)
        }

    }


    const signupFunction=async(e)=>{


        e.preventDefault()
       

      
         

            
     
        if (!validatefn()){
            return
        }
    


        setLoading(true)
        try{
            const SignupResponse=await axios.post(SignupApi,{
                username:formdata.username,
                email:formdata.email,
                password:formdata.password,
                confirmPassword:formdata.confirmPassword,
                mobile:formdata.mobile

            })
            
             setSumbit(true)
        }
        catch(er){
        
            if (er.response?.status === 400) {
                console.log('eroor', er.response?.data)
                if(er.response?.data?.username){
                    console.log('comes')
                    setError({...error,username:er.response.data.username[0]})
                }
                if(er.response?.data.email){
                    console.log('comes2')
                    setError({...error,email:er.response.data.email[0]})
                }
                if(er.response?.data?.mobile){
                    console.log('comes3')
                    setError({...error,mobile:er.response.data.mobile[0]})
                }
            }
          
           
           
          
        }
        finally{
           setLoading(false)
        }

    }




    const VerifyOtp=async()=>{
        if (otpdata.otp === ''){
            setError({...error,otp:'Please enter otp'})
            return
        }
            
        const verifydata={
                otp:otpdata.otp,
                email:formdata.email
            }
           setLoading(true)

        try{
            const VerifyOtpResponse=await axios.post(verifyOtpApi,verifydata)
            console.log(VerifyOtpResponse.data)
            // if(VerifyOtpResponse.data.role ==='')
            // navigate('/signin')
        }
        catch(er){
            console.log(er.response?.data)
            if (er.response?.status === 400) {
            const backendErrors = er.response.data
            const formattedErrors = {}
                console.log('backendErrors', backendErrors)
            // ella field-inteyum first error message mathram edukkuka (array-il ninnu)
            Object.keys(backendErrors).forEach((field) => {
                const value = backendErrors[field]
                formattedErrors[field] = Array.isArray(value) ? value[0] : value
            })

            setError((prev) => ({ ...prev, ...formattedErrors }))
        }
        }
        finally{
            setLoading(false)
        }

    }


useEffect(()=>{
    
    if (!is_submit) return 

    timerRef.current=setInterval(()=>{
        setTimer((prev)=>{
            if (prev <= 1){
                clearInterval(timerRef.current)
            
                return 0
            }
            return prev-1
        })
    },1000)
        return ()=> clearInterval(timerRef.current)

    



},[is_submit])

const ResendOtpfn=async()=>{
    try{
        const ResendOtpResponse=await axios.post(ResendOtpApi,{
            email:formdata.email
        })
        console.log(ResendOtpResponse.data)

    }
    catch(er){
        console.log(er)
         console.log('eroor', er.response?.status)
    }
    finally{
        setTimer(5*60)
        clearInterval(timerRef.current)
        timerRef.current=setInterval(()=>{
            setTimer((prev)=>{
                if (prev <= 1){
                    clearInterval(timerRef.current)
                   
                    return 0
                }
                return prev-1
            })
        },1000)
    }

}

const getCurrentFormData = () => {
    return mechanic.mechanicsignup ? mechanicFormdata : formdata
}

// Helper to get the current error state
const getCurrentErrors = () => {
    return mechanic.mechanicsignup ? mechanicerror : error
}

// Helper to get the current setter
const getCurrentSetter = () => {
    return mechanic.mechanicsignup ? setmechanicData : setFormdata
}

// Helper to get the current error setter
const getCurrentErrorSetter = () => {
    return mechanic.mechanicsignup ? setMechanicerror : setError
}

// On mechanic toggle
const handleMechanicToggle = (e) => {
    const isChecked = e.target.checked
    
    if (isChecked && !mechanicFormdata.username) {
        // First time checking - copy data
        setmechanicData(prev => ({
            ...prev,
            username: formdata.username,
            email: formdata.email,
            password: formdata.password,
            confirmPassword: formdata.confirmPassword,
            mobile: formdata.mobile
        }))
    }
    
    setmechanic({
        ...mechanic,
        mechanicsignup: isChecked,
        layertype: 1
    })
}


useEffect(()=>{

    const getSpecialization=async()=>{
        try{
            const getvehiclecategory=await axios.get(VehicleCategoryApi)
            console.log(getvehiclecategory.data)
            setSpecialization(getvehiclecategory.data)

        }
        catch(er){
            console.log(er)

        }

    }
    getSpecialization();

},[])


const mm=String(Math.floor(timerval/60)).padStart(2,'0')
const ss=String(timerval%60).padStart(2,'0')

  return (
    <div className="flex border-none relative w-full lg:w-[50%] lg:border border-amber-50 flex-col bg-secondary-50 items-center justify-center h-screen ">
        <div style={{backgroundImage:`url(${MechanicImg})`}}  className='flex lg:bg-black  absolute bg-cover w-full h-full  flex-col items-center justify-center gap-3 lg:gap-5'>
        <div  className='flex w-full h-full  absolute inset-0 lg:bg-black  bg-gradient-to-r from-black/70 to-black flex-col items-center justify-center gap-3 lg:gap-5'>
        <div  className='flex border bg-[#241f1f] w-[80%] lg:py-4 lg:w-[60%] flex-col  gap-2 px-2 lg:px-4 rounded-2xl shadow-lg '>
            <label htmlFor="username" className='text-buttoncolor border-b-2  border-[#683b11] py-4 lg:py-6 text-center font-bold text-2xl lg:text-2xl'>Signup</label>
        {
           ! is_submit ?
         ( <form onSubmit={!mechanic.mechanicsignup?  signupFunction:mechanicSignup} className='w-full py-3  lg:gap-1 lg:py-3 lg:px-3 px-16  '>
         
           
         {mechanic.layertype ==1 || !mechanic.mechanicsignup ? (<div>
             
             <InputField value={'username'} setValue={getCurrentSetter()} formtype={getCurrentFormData()} filetype="text" placeholder="Username" errortype={getCurrentErrors()} errorvalue={getCurrentErrors().username} setErrorValue={getCurrentErrorSetter()} />
            <InputField value={'email'} setValue={getCurrentSetter()} formtype={getCurrentFormData()} filetype="email" placeholder="Email" errortype={getCurrentErrors()} errorvalue={getCurrentErrors().email} setErrorValue={getCurrentErrorSetter()}/>
            <InputField value={'mobile'} setValue={getCurrentSetter()} formtype={getCurrentFormData()} filetype="number" placeholder="Mobile Number" errortype={getCurrentErrors()} errorvalue={getCurrentErrors().mobile} setErrorValue={getCurrentErrorSetter()}/>
            <InputField value={'password'} setValue={getCurrentSetter()} formtype={getCurrentFormData()} filetype="password" placeholder="Password" errortype={getCurrentErrors()} errorvalue={getCurrentErrors().username} setErrorValue={getCurrentErrorSetter()}/>
            <InputField value={'confirmPassword'} setValue={getCurrentSetter()} formtype={getCurrentFormData()} filetype="password" placeholder="Confirm Password" errortype={getCurrentErrors()} errorvalue={getCurrentErrors().username} setErrorValue={getCurrentErrorSetter()}/> 
          </div> ) :mechanic.layertype ===2 ? (
            <div> 
            <InputField value={'owner_name'} setValue={setmechanicData} formtype={mechanicFormdata} filetype="text" placeholder="shop authorized owner" errortype={mechanicerror} errorvalue={mechanicerror.owner_name} setErrorValue={setMechanicerror} />
       
            <InputField value={'address'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="text" placeholder="shop address" errortype={mechanicerror} errorvalue={mechanicerror.address} setErrorValue={setMechanicerror}/>
            
            <InputField value={'pincode'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="text" placeholder="pincode" errortype={mechanicerror} errorvalue={mechanicerror.pincode} setErrorValue={setMechanicerror}/>
            <InputField value={'district'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="text" placeholder="district" errortype={mechanicerror} errorvalue={mechanicerror.district} setErrorValue={setMechanicerror}/>
            <InputField value={'state'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="text" placeholder="state" errortype={mechanicerror} errorvalue={mechanicerror.state} setErrorValue={setMechanicerror}/> 
         <InputField value={'gst_number'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="number" placeholder="gst number" errortype={mechanicerror} errorvalue={mechanicerror.gst_number} setErrorValue={setMechanicerror}/> 
          </div>):(
          <div> <InputField value={'proof_document'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="File" placeholder="Proof document" errortype={mechanicerror} errorvalue={mechanicerror.proof_document} setErrorValue={setMechanicerror} />
            <InputField value={'shop_image'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="File" placeholder="shop image" errortype={mechanicerror} errorvalue={mechanicerror.shop_image} setErrorValue={setMechanicerror}/>
            
            <div className='flex justify-between w-full p-3'>

                {specialization&& specialization.map((spec)=>{
                    const IsChecked=spec_value.includes(spec.id)
                  return   <div className='flex gap-4 ' key={spec.id}>
                    <label className='text-buttoncolor'>{spec.name}</label>
                    <input className='w-[30%]' type="checkbox"  onChange={(e)=>{
                        if(e.target.checked){
                            setSpecValue([...spec_value,spec.id])
                        }
                        else{
                             const newValue = spec_value.filter(id => id !== spec.id);
            
            setSpecValue(newValue)
                        }
                    } } />
                </div>

                })}
                
               

            </div>
            
            <InputField value={'opens_at'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="time" placeholder="Open time time" errortype={mechanicerror} errorvalue={mechanicerror.opens_at} setErrorValue={setMechanicerror}/>
            <InputField value={'closes_at'} setValue={setmechanicData}  formtype={mechanicFormdata} filetype="time" placeholder="Close time" errortype={mechanicerror} errorvalue={mechanicerror.closes_at} setErrorValue={setMechanicerror}/>
          </div> )
} {
            mechanic.layertype !==2 && mechanic.layertype !==3 &&
            <div className='flex gap-2 lg:gap-5 px-2 lg:px-5 items-center justify-start py-2 w-full'>
         <label className='text-buttoncolor text-sm lg:text-base'>Are you a Mechanic ? </label>
            <input className='w-[1.3rem] h-[1.3rem]' type="checkbox" value={mechanic.mechanicsignup} checked={mechanic.mechanicsignup} onChange={handleMechanicToggle} />
              
          
            </div>
          }
         
            <div className={`relative flex ${mechanic.mechanicsignup? 'justify-around gap-4 ':'justify-center'}  py-3`}>

            {loading &&    <Loader2 height={100} className="animate-spin z-10 right-[45%]  absolute text-red-800  ml-10 self-center"/>
            }
       {
       mechanic.mechanicsignup&& mechanic.layertype !==1  &&
         <button type="button" onClick={()=>setmechanic(prev=>{
            console.log(prev)
            return  {...prev,layertype:prev.layertype -1}
         }
           )} className={` lg:text-xl lg:py- flex gap-3 lg:gap-5 bg-buttoncolor rounded-lg ${mechanic.mechanicsignup ? 'w-[35%] lg:w-[30%]  absolute left-10 ' : 'w-[95%]'} cursor-pointer justify-center py-2`} >  <ArrowLeft/>  previous </button>
       }
            <button type="submit" disabled={loading}  className={` ${loading && 'opacity-50 cursor-not-allowed'} lg:text-xl lg:py- flex gap-3 lg:gap-5 bg-buttoncolor rounded-lg ${mechanic.mechanicsignup ? 'w-[35%] lg:w-[30%] absolute right-10 ' : 'w-[95%]'} cursor-pointer justify-center py-2`} >{mechanic.mechanicsignup ?'next' :'Create Account'}  <ArrowRight/>  </button>
            </div>
            
            </form>




            ):

           ( <div className='flex flex-col justify-center py-3'>
                <label className='text-buttoncolor w-full text-center'>Time remaining: {mm}:{ss}</label>
                <InputField value={'otp'} setValue={setOtp} formtype={otpdata} filetype="text" placeholder="Enter OTP" errortype={error} errorvalue={error.otp} setErrorValue={setError}/>
                {
                    timerval  ? (
                        <label className='text-primary-500 text-center ' >Otp Successfully Sent to your email</label>
                    ):
                    (
                         <label className='text-primary-500 text-center cursor-pointer hover:text-white' onClick={ResendOtpfn}>Resend Otp</label>
                    )
                }
           <div className='relative flex justify-center py-3'>
            
            {loading && <Loader2 height={100} className="animate-spin z-10 right-[45%]  absolute text-primary-500  ml-10 self-center"/>}
            <button type="button" onClick={VerifyOtp} className={` ${loading && 'opacity-50 cursor-not-allowed'} flex gap-3 lg:gap-5 hover:rounded-md bg-buttoncolor rounded-lg w-[95%] cursor-pointer justify-center py-2` } > Finish Signup </button>
            </div>
            </div>)
            }

          {mechanic.mechanicsignup && (
            <div className='flex gap-2 w-full justify-center items-center lg:gap-5 px-2 lg:px-5  py-2 '>
                <label className={`${mechanic.layertype === 1 ? 'text-buttoncolor' : 'text-gray-500 '} font-bold text-3xl`} >.</label>
                 <label className={`${mechanic.layertype === 2 ? 'text-buttoncolor' : 'text-gray-500 '} font-bold text-3xl`} >.</label>
                  <label className={`${mechanic.layertype === 3 ? 'text-buttoncolor' : 'text-gray-500 '} font-bold text-3xl`} >.</label>
            </div>
          )}



        </div>
        </div>
        </div>


    </div>
  )
}

export default SignupComponent