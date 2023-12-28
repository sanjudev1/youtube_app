import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="pl-5 pt-2 pr-5 shadow-lg col-span-1 fixed bg-slate-50 overflow-auto text-black">
      {/* Main Menu */}
      <ul className="font-medium border pb-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      {/* Subscriptions Section */}
      <div>
        <h1 className="font-bold">Subscriptions</h1>
        <ul className="font-medium border pb-2">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>

      {/* Watched Content Section */}
      <div>
        <h1 className="font-bold">Watched Content</h1>
        <ul className="font-medium">
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Show More</li>
        </ul>
      </div>

      {/* See More Section */}
      <div>
        <h1 className="font-bold">See More</h1>
        <ul className="font-medium">
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Show More</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
