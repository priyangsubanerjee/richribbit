/* eslint-disable @next/next/no-img-element */
import React from "react";

function Introduction() {
  return (
    <div className="min-h-[700px] lg:min-h-[600px] relative mt-16">
      <div className="absolute h-full w-full inset-0 lg:px-44">
        <div className="flex items-center justify-center">
          <img src="/frog.png" className="h-32 lg:h-44 animate-pulse" alt="" />
        </div>
        <div className="mt-7">
          <h1 className="text-center text-white font-poppins text-2xl lg:text-4xl font-medium lg:font-semibold leading-[1.4]">
            MONEY NEVER FELT <br /> SO{" "}
            <span className="text-greenPrimary">GREEN.</span>
          </h1>
          <p className="lg:text-sm text-xs text-center text-grayPrimary font-light leading-7 mt-6">
            Don&apos;t Settle for Less - Unleash the Power <br /> of $frgst and
            Earn with Our Staking Platform
          </p>
        </div>
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-x-8 lg:space-y-0">
          <div className="w-56 h-28 relative hover:scale-[1.10] transition-all duration-500 group">
            <img
              src="/rectangle/introSmall.svg"
              className="absolute inset-0 z-0 w-full h-full"
              alt=""
            />
            <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center ">
              <p className="text-xs lg:text-sm font-thin font-poppins text-graySecondary">
                Total Staked
              </p>
              <p className="text-xl lg:text-2xl font-bold text-white mt-3 group-hover:text-greenPrimary transition-all duration-500">
                121,179
              </p>
            </div>
          </div>
          <div className="w-56 h-28 relative hover:scale-[1.10] transition-all duration-500 group">
            <img
              src="/rectangle/introSmall.svg"
              className="absolute inset-0 z-0 w-full h-full"
              alt=""
            />
            <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center">
              <p className="text-xs lg:text-sm font-thin font-poppins text-graySecondary">
                Treasury Balance
              </p>
              <p className="text-xl lg:text-2xl font-bold text-white mt-3  group-hover:text-greenPrimary transition-all duration-500">
                $259,172,683
              </p>
            </div>
          </div>
          <div className="w-56 h-28 relative hover:scale-[1.10] transition-all duration-500 group">
            <img
              src="/rectangle/introSmall.svg"
              className="absolute inset-0 z-0 w-full h-full"
              alt=""
            />
            <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center">
              <p className="text-xs lg:text-sm font-thin font-poppins text-graySecondary">
                Current APY
              </p>
              <p className="text-xl lg:text-2xl font-bold text-white mt-3  group-hover:text-greenPrimary transition-all duration-500">
                69,756.7%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
