import React, { useEffect ,useState} from 'react'
import {   useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../constants/apis'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'
function SearchContainer() {
    const MenuOption=useSelector((store)=>store.app.isMenuOpen)
    const [videos,setvideos] =useState([])
    const [searchParams] = useSearchParams();
    const searchkey= searchParams.get("v")
    console.log(searchkey,"seachkey")
    useEffect(()=>{
         getSearchRequest()
    },[])
    const getSearchRequest=async()=>{
    const GOOGLE_API_KEY=import.meta.env.VITE_GOOGLE_API_KEY
    const data=await fetch(YOUTUBE_SEARCH_API+searchkey+"&key="+GOOGLE_API_KEY)
    const jsondata= await data.json()
    console.log(jsondata)
    setvideos(jsondata.items)  
   
  } 
  if(videos?.length===0) return <Shimmer/>
  return (
    <div className='flex'>
      <div className={`flex flex-wrap ${MenuOption===true ? "ml-44":"ml-2"}` }>
          {videos?.map(video=><div key={video.id.videoId} className=' bg-slate-950  mb-2 w-4/6 rounded-lg shadow-lg flex'><VideoCard  info={video}/><div className=' font-normal text-white m-5 mt-10' ><h1 className='m-2'>{video?.snippet?.description}</h1><h1 className='p-1 m-2'>{video?.snippet?.publishedAt}</h1><p className='m-2'>{video?.snippet?.title}</p></div></div>)}
          
         </div>
         
    </div>
  )
}

export default SearchContainer
