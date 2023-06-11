/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

function VideoCard({info}) {
  console.log(info)
  const {snippet,statistics,id} = info
  const {thumbnails,channelTitle,title}=snippet
  
  return (
    <><Link to={id?.videoId ? `watch?v=${id.videoId}` : `watch?v=${id}`}><div className={`${id?.videoId ? "bg-slate-950 border-gray-200 text-white":"bg-slate-950 text-white"} w-[21rem] m-3 p-1 ml-5 rounded-xl shadow-lg`}>
      <img src={thumbnails.medium.url} alt="video" className='shadow-2xl'/>
      <h1 className='font-bold'>{channelTitle}</h1>
      <p>{title.substr(0,20)}</p>
      <p >{statistics?.viewCount} views</p>
    </div></Link></>
  )
}

export default VideoCard
