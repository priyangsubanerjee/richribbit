/* eslint-disable @next/next/no-img-element */
import React from "react";

function Community() {
  return (
    <div className="min-h-[500px] relative -mt-32">
      <div className="absolute h-full w-full inset-0 px-44 z-10">
        <div className="flex items-center justify-center">
          <div className="w-[1148px] h-[380px] bg-gradient-to-r from-green-700/10 via-green-600/20 to-green-700/10 rounded-xl overflow-hidden relative">
            <img
              src="/lines.png"
              className="absolute inset-0 h-full w-full"
              alt=""
            />
            <div className="absolute inset-0 z-10 h-full w-full flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-white text-center leading-[1.4]">
                JOIN THE COMMUNITY
                <br />
                TODAY & <span className="text-greenSecondary">GET GREEN</span>
              </h1>
              <p className="text-sm text-center text-grayPrimary font-light leading-7 mt-4">
                Don&apos;t Settle for Less - Unleash the Power <br /> of $frgst
                and Earn with Our Staking Platform
              </p>
              <button className="bg-greenPrimary px-7 h-[40px] text-black rounded text-sm mt-10">
                Stake now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
