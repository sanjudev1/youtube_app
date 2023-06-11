import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex gird grid-flow-col mt-16 bg-black'>
      
      <Sidebar/>
      <Outlet/>
      
    </div>
  )
}

export default Body
