/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from 'react'

function Shimmer() {
  return (
    <div className='flex flex-wrap'>
      {Array(50).fill("").map(()=><div className='w-72 h-48 bg-gray-600 m-2 p-2'></div>)}
    </div>
  )
}

export default Shimmer
