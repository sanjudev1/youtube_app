/* eslint-disable no-unused-vars */
import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closemenu } from '../utils/appSlice'
import { useParams,useSearchParams } from 'react-router-dom';
import Comments from './Comments';
import { Addmessages } from '../utils/chatSlice';
import { texts,names } from '../constants/commentslist';

function WatchPlay() {
    const [searchParams] = useSearchParams();
   const path_id= searchParams.get("v")
   const [postmsg,setpostmg]=useState('')
   const menuOption = useSelector((store)=>store.app.isMenuOpen)
   const chatMessages=useSelector(store=>store.livechat)
    // const path =useParams()
  
    const dispatch=useDispatch()
    useEffect(()=>{
      
        dispatch(closemenu())
    },[dispatch])

    //Pooling API 
    useEffect(()=>{
       const interval=  setInterval(() => {
          const newchat= {"name":names[Math.floor(Math.random()*names.length)],"text":texts[Math.floor(Math.random()*texts.length)]}
          dispatch(Addmessages(newchat))
         }, 1000);
      return (()=>clearInterval(interval))
    },[])
       
  
  return (
    <div className='w-full'><div className='flex'><div className={(menuOption===true) ?"ml-44":"m-5"}>
      <iframe width="1160" 
      height="615" 
      src={"https://www.youtube.com/embed/"+path_id}
       title="YouTube video player"
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowFullScreen></iframe>
    </div>
    <div className='w-full'><div className='text-black bg-white w-[29rem] h-[39rem] rounded-sm m-5 overflow-y-auto  flex flex-col-reverse'>
     {chatMessages.map((each,index)=><div key={index} className='flex ml-3'><img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPL1zW3xWnLePHIci-FRr8YsFF0Kh99rq3q9F4F_GJHu-dCxb7E2ZKsEEOF7LcsPgynU&usqp=CAU" alt="profile-icon"/><div className='font-bold ml-3 mt-1'><h1>{each.name}</h1><h1 className='font-semibold'>{each.text}</h1></div></div>)}
     </div><div>
      <form onSubmit={(e)=>{e.preventDefault(),dispatch(Addmessages({"name":"sanju","text":postmsg})),console.log(postmsg),setpostmg('')}}><input type="text" className='p-1 w-[20rem] ml-5' placeholder='chat with live...' value={postmsg} onChange={(e)=>setpostmg(e.target.value)}/> <button className='bg-white w-[98px] h-[34px] rounded-md text-lime-900'>Send</button></form></div><div/></div></div>
     <Comments/>
    </div>
  )
}

export default WatchPlay
