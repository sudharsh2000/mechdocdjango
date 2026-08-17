import React, { useEffect, useState } from 'react'

function UseGeoLocation(mechanic) {
  const [location_loading,setLoading]=useState(true)
  const [locationerror,setLocationerror]=useState(null)
  const [location,setLocation]=useState(null)
  useEffect(()=>{
    if(!navigator.geolocation){
        console.log("browser not supported")
        setLoading(false)
        return 
    }
    const setHandler=(position)=>{
        const {longitude,latitude,accuracy}=position.coords;
        setLocation({
            latitude:latitude,
            longitude:longitude,
            accuracy,
            timestamp:new Date()
        })
        setLoading(false)
    }
    const errorhandler=(error)=>{
        setLocationerror(error.message)
        setLoading(false)

    }
    navigator.geolocation.getCurrentPosition(setHandler,errorhandler,{
        enableHighAccuracy:true,
        timeout:10000,
        maximumAge:0
    })

  },[mechanic])
 
return {location,location_loading,locationerror}

}

export default UseGeoLocation