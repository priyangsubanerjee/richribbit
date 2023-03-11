/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-full h-28 relative">
      <img
        src="/gradients/nav.svg"
        className="absolute right-0 top-0 z-0 h-[450px]"
        alt=""
      />
      <div className="h-full w-full z-10 flex items-center lg:justify-between px-5 lg:px-28 absolute inset-0">
        <div>
          <Link href="/">
            <img src="/logo.svg" className="h-10 lg:h-12" alt="" />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center font-poppins text-sm space-x-9">
            <li className="text-white">Team</li>
            <li className="text-white">Rewards</li>
            <li className="text-white">Staking</li>
            <li className="text-white">Calculator</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="bg-greenPrimary hover:opacity-50 px-7 h-[40px] text-black rounded text-sm transition-all duration-500">
            Stake now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
