import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { togglemenu } from '../utils/appSlice';
// import { YOUTUBE_SUGGESTIONS_API } from '../constants/apis'
import { clearCache, userCache } from '../utils/cacheSlice';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showsuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const toggleHamburgermenu = () => {
    dispatch(togglemenu());
  };
  const cachee = useSelector((store) => store.search);

  useEffect(() => {
    // searchQuery is there in cache we decline ApI call

    if (cachee[searchQuery]) {
      return setSuggestions(cachee[searchQuery]);
    }
    const timer = setTimeout(() => getSuggestionsApi(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSuggestionsApi = async () => {
    const API_URL =
      'https://suggestqueries.google.com/complete/search?client=firefox&q=';
    try {
      const data = await fetch(`${API_URL}=${searchQuery}`);
      const jsondata = await data.json();
      setSuggestions(jsondata[1]);
      if (Object.keys(cachee).length > 20) {
        dispatch(clearCache());
        dispatch(userCache({ [searchQuery]: jsondata[1] }));
      } else {
        console.log(Object.keys(cachee).length, 'length');
        dispatch(userCache({ [searchQuery]: jsondata[1] }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setShowSuggestionsdelay = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <div className="grid grid-flow-col p-2 shadow-md fixed top-0 left-0 w-full bg-slate-50 z-10">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleHamburgermenu()}
          className="h-10"
          src="https://icon-library.com/images/hamburger-menu-icon-png/hamburger-menu-icon-png-10.jpg"
          alt="Hamburger-menu"
        />
        <a href="/">
          <img
            className="h-11 mx-2"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-6">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="flex border border-gray-400 rounded-l-full w-1/2 h-10 justify-center align-middle pl-7"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestionsdelay()}
          />
          <button className="border border-gray-400 rounded-r-full h-10 w-100">
            <img
              className="h-7 align-middle mx-2.5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
              alt="search"
            />
          </button>
        </div>

        {suggestions.length !== 0 && showsuggestions && (
          <div className=" boder bg-gray-100 rounded-lg shadow-lg w-[35%] ml-[] py-[1%] fixed top-55 left-55 z-100">
            <ul>
              {suggestions.map((s) => (
                <li className="hover:bg-gray-300 font-semibold" key={s}>
                  <a href={'search?v=' + s}>
                    <button className="m-2">
                      <img
                        className="h-4 mt-3 ml-3"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                        alt="search"
                      />
                    </button>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-10 rounded-3xl"
          src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci82MDNkNTNhMzY5MmFmODRiNjI3YmUyNTE4NjVjMmVhMj9zaXplPTUwJmRlZmF1bHQ9cmV0cm8ifQ.JhUuRa6nWz8LFGG_cHQrQ8dUzkasQARdpC8xEkGtcjE"
        />
      </div>
    </div>
  );
}

export default Header;
