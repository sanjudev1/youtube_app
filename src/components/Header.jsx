import React from 'react'
import { useDispatch } from 'react-redux'
import { togglemenu } from '../utils/appSlice'

function Header() {
  const dispatch=useDispatch()
  const toggleHamburgermenu=()=>{
     dispatch(togglemenu())
  }  
  
  return (
    <div className='grid grid-flow-col p-2 shadow-md '>
      <div className='flex col-span-1 cursor-pointer'>
      <img onClick={()=>toggleHamburgermenu()} className="h-10" src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-10.jpg" alt="Hamburger-menu"/>
      <a href='/'><img className='h-11 mx-2' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="youtube-logo"/>
      </a></div>
      <div className='flex col-span-10'>
        <input type="text" className='border border-gray-400 rounded-l-full w-1/2 h-10'/>
        <button className='border border-gray-400 rounded-r-full h-10 w-100'><img className="h-7 align-middle mx-2.5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="search"/></button>
      </div>
      <div className='col-span-1'>
      <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnPL1zW3xWnLePHIci-FRr8YsFF0Kh99rq3q9F4F_GJHu-dCxb7E2ZKsEEOF7LcsPgynU&usqp=CAU" alt="profile-icon"/>
    </div>
    </div>
  )
}

export default Header
