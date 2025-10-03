import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = ({handleScroll,setSearchTerm ,isScroll ,handlePanel ,totalItem ,wishlist}) => {

  return (
    <div>
      <header className={`bg-white fixed right-0 left-0 top-0 z-30 ${isScroll ? 'shadow-xl' : ''} `}>
        <nav className="h-[14vh] flex items-center gap-2 justify-between max-w-[1300px] mx-auto sm:px-12 px-4">
          {/* logo */}
          <a href="#" className="flex bg-zinc-100 w-15 h-15  rounded-full p-2">
            <img src={logo} className="object-contain w-full h-full" />
          </a>

          {/* Nav Action */}
          <div className="flex items-center sm:gap-5 gap-3 ">
            <div className="flex flex-row justify-center items-center p-1 rounded-full border-2 border-blue-600">

                {/* Search bar */}
              <input
                type="text"
                name="search"
                placeholder="Search..."
                id="search"
                autoComplete="off"
                className="sm:h-[5vh] h-10 w-[110px] sm:w-full sm:pl-4 pl-2 rounded-full focus:outline-none"
                onFocus={handleScroll}
                onChange={(e)=>{setSearchTerm(e.target.value)}}
              />
              <button className="flex flex-row justify-center items-center text-white sm:w-10 w-7 sm:h-10 h-7 sm:px-3 rounded-full bg-blue-600 sm:text-md text-2xl cursor-pointer">
                <IoIosSearch />
              </button>
            </div>

            <button className="sm:text-[1.7rem] text-[1.3rem] text-zinc-800 relative cursor-pointer"
            onClick={()=>handlePanel('wishlist')}>
                <FaHeart/>
                <span className="flex justify-center items-center absolute -top-2 left-3 bg-rose-600 text-white w-5 h-5 rounded-full text-[14px]
                border-2 border-white">{wishlist.length}</span>
            </button>

            <button className="sm:text-[1.7rem] text-[1.3rem] text-zinc-800 relative cursor-pointer" onClick={()=>handlePanel('cart')}>
                <FaBagShopping/>
                <span className="flex justify-center items-center absolute -top-2 left-3 bg-rose-600 text-white w-5 h-5 rounded-full text-[14px]
                border-2 border-white">{totalItem}</span>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
