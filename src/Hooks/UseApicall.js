import React, { useEffect, useState } from 'react'

function UseApicall(url) {
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(false)
    const [error,setError]=useState('')

    useEffect(()=>{
        const fetchData=async()=>{
            setloading(true)
        try{
            const res=await axios.get(url)
            setdata(res.data)

        }
        catch(err){
            setError(err.message)
        }
        finally{
            setloading(false)
        }
    }

    fetchData();

    },[url])
  return {data,loading,error}
}

export default UseApicall