import React, { useEffect,useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../constants/apis'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'
import { useSelector } from 'react-redux'


function Videocontainer() {
  const [videos,setvideos] =useState([])
  useEffect(()=>{
    getData()
 },[])
 const MenuOption=useSelector((store)=>store.app.isMenuOpen)
 const getData=async()=>{
   const GOOGLE_API_KEY=import.meta.env.VITE_GOOGLE_API_KEY
   const data = await fetch(YOUTUBE_VIDEOS_API+GOOGLE_API_KEY)
   const jsondata = await data.json()
   setvideos(jsondata.items)  
 }
 if(videos?.length===0) return <Shimmer/>
  return (
   <div className={`flex flex-wrap mt-10 m-2 ${MenuOption===true && "ml-44"}` }>
     {videos?.map(video=><VideoCard key={video.id} info={video}/>)}
    </div>
  )
}

export default Videocontainer
