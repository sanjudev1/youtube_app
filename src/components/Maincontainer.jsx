import React from 'react'

import Videocontainer from './Videocontainer'
import ButtonContainer from './ButtonContainer'
function Maincontainer() {

  return (
    <div className='col-span-11'>
      <ButtonContainer/>
      <Videocontainer/>
    </div>
  )
}

export default Maincontainer
