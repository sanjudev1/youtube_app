/* eslint-disable no-unused-vars */
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closemenu } from '../utils/appSlice'
import { useParams,useSearchParams } from 'react-router-dom';
import Comments from './Comments';

function WatchPlay() {
    const [searchParams] = useSearchParams();
   const path_id= searchParams.get("v")
   const menuOption = useSelector((store)=>store.app.isMenuOpen)
    // const path =useParams()
  
    const dispatch=useDispatch()
    useEffect(()=>{
      
        dispatch(closemenu())
    },[dispatch])
       
  
  return (
    <div className=''><div className={(menuOption===true) ?"ml-44":"m-5"}>
      <iframe width="1160" 
      height="615" 
      src={"https://www.youtube.com/embed/"+path_id}
       title="YouTube video player"
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
    </div>
     <Comments/>
    </div>
  )
}

export default WatchPlay
