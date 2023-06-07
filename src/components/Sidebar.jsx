import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
function Sidebar() {

    const MenuOption=useSelector((store)=>store.app.isMenuOpen)
    if(!MenuOption) return null;

  return (
    <div className='p-5 shadow-lg col-span-1'>
      <ul className='font-medium border pb-2'>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className='font-bold'>Subscriptions</h1>
      <ul className='font-medium border pb-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold'>Watched Content</h1>
      <ul className='font-medium'>
        <li>Library</li>
        <li>History</li>
        <li>YourVideos</li>
        <li>WatchLater</li>
        <li>LikedVideos</li>
        <li>ShowMore</li>
      </ul>
    </div>
  )
}

export default Sidebar
