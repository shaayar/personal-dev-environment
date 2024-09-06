"use client;"
import React from "react";

function Navbar() {
  const g1 = "flex justify-center items-center h-screen";
  return (
    <nav className="w-screen h-screen md:flex bg-red-100 items-center justify-between">
      <div className={g1}>
        <h1>Quote</h1>
      </div>
      <div className="h-screen sm:flex sm:flex-col sm:justify-center sm:items-center sm:p-2 w-fit md:grid grid-cols-5 grid-rows-1 gap-1 auto-cols-fr auto-rows-fr grid-flow-row grid-areas">
        <div className="Dashboard flex items-center sm:w-fit sm:p-[1vw] md:w-full md:h-full border-white border-l-[.3vw] sm:h-[12vw] md:h-full">
          <h1 className="font-bold md:-rotate-90">Dashboard</h1>
        </div>
        <div className="Diary flex items-center sm:w-[10vw] sm:p-[1vw] md:w-[12vw] border-white border-l-[.3vw] sm:h-[12vw] md:h-full">
           Diary
          </div>
        <div className="Repos flex items-center sm:w-[10vw] sm:p-[1vw] md:w-[12vw] border-white border-l-[.3vw] sm:h-[12vw] md:h-full">
          Repos
        </div>
        <div className="Pswd-Mngr flex items-center sm:w-[10vw] sm:p-[1vw] md:w-[12vw] border-white border-l-[.3vw] sm:h-[12vw] md:h-full">
          Pswd-Mngr
        </div>
        <div className="Links flex items-center sm:w-[10vw] sm:p-[1vw] md:w-[12vw] border-white border-l-[.3vw] sm:h-[12vw] md:h-full">
          Links
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
