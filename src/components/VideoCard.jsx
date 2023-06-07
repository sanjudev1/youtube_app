/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

function VideoCard({info}) {
  console.log(info)
  const {snippet,statistics,id} = info
  const {thumbnails,channelTitle,title}=snippet
  
  return (
    <><Link to={"watch?v="+id}><div className='m-3 p-2 w-72 rounded-xl shadow-lg'>
      <img src={thumbnails.medium.url} alt="video" className='shadow-2xl'/>
      <h1 className='font-bold'>{channelTitle}</h1>
      <p>{title.substr(0,20)}</p>
      <p >{statistics.viewCount} views</p>
    </div></Link></>
  )
}

export default VideoCard
