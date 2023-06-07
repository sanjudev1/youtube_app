import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className='p-2 m-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
