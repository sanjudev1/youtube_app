/* eslint-disable no-unused-vars */
import React, { useEffect }  from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appSlice'
import { useParams,useSearchParams } from 'react-router-dom';

function WatchPlay() {
    const [searchParams] = useSearchParams();
   const path_id= searchParams.get("v")
    // const path =useParams()
  
    const dispatch=useDispatch()
    useEffect(()=>{
      
        dispatch(closemenu())
    },[dispatch])
       
  
  return (
    <div className='m-5'>
      <iframe width="1160" 
      height="615" 
      src={"https://www.youtube.com/embed/"+path_id}
       title="YouTube video player"
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
    </div>
  )
}

export default WatchPlay
