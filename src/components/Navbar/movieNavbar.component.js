import React from "react";
import {BiChevronRight, BiSearch ,BiShareAlt} from "react-icons/bi";
const NavSm = () => {
  return(
    <>
     <div className="text-gray-800 flex items-center justify-between">
      <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
      <span className="text-gray-400 text-xs flex items-center">
      Banglore <BiChevronRight />
      </span>
      </div>
      <div className="w-8 h-8">
        <BiShareAlt className="w-full h-full" />
     </div>
    </div>
    </>
  )
};
const NavLg = () => {
  return (
    <>
    <div className="w-full flex gap-3 items-center bg-white px-3 py-2 border-rounded">
    <BiSearch />
    <input
    type="search"
    className="w-full"
    placeholder="Search for Movies, Events, Plays, Sports and Activities"
    />
    </div>
    </>
  )
};

const MovieNavbar = () => {
return (
  <>
   <nav className="bg-gray-800 px-2 py-4">
      <div className="md:hidden">{/*Mobile Screen*/}
      <NavSm />
      </div>
      <div className="hidden md:block lg:hidden">{/*Tablet Screen*/}
      <NavSm />
      </div>
      <div className="px-20">{/*Large Screen*/}
      <NavLg />
      </div>
   </nav>
  </>
  );
};

export default MovieNavbar;
