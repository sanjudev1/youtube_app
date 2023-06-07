import React from 'react'
import Button from './Button'
import { LIST_OF_BUTTON_ITEMS as Items } from '../constants/listitems'

function ButtonContainer() {
  return (
    <div className='flex'>
      {Items.map((item,index)=><Button key={index} name={item}/>)}
      
      </div>
  )
}

export default ButtonContainer
