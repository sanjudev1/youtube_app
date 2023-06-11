/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from 'react'
import { useSelector } from 'react-redux'

function Shimmer() {
  const menuOption =useSelector((store)=>store.app.isMenuOpen)
  return (
    <div className={`flex flex-wrap ${menuOption===true ?"ml-44":"ml-2"}`}>
      {Array(50).fill("").map((e,index)=><div className='w-72 h-48 bg-gray-600 m-2 p-2' key={index}></div>)}
    </div>
  )
}

export default Shimmer
