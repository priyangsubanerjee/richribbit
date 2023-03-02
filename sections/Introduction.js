/* eslint-disable @next/next/no-img-element */
import React from "react";

function Introduction() {
  return (
    <div className="min-h-[600px] relative mt-16">
      <div className="absolute h-full w-full inset-0 px-44">
        <div className="flex items-center justify-center">
          <img src="/frog.png" className="h-44" alt="" />
        </div>
        <div className="mt-7">
          <h1 className="text-center text-white font-poppins text-4xl font-semibold leading-[1.4]">
            MONEY NEVER FELT <br /> SO{" "}
            <span className="text-greenPrimary">GREEN.</span>
          </h1>
          <p className="text-sm text-center text-grayPrimary font-light leading-7 mt-6">
            Don&apos;t Settle for Less - Unleash the Power <br /> of $frgst and
            Earn with Our Staking Platform
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center space-x-8">
          <div className="w-56 h-28 relative">
            <img
              src="/rectangle/introSmall.svg"
              className="absolute inset-0 z-0 w-full h-full"
              alt=""
            />
            <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center">
              <p className="text-sm font-thin font-poppins text-graySecondary">
                Total Staked
              </p>
              <p className="text-2xl font-bold text-white mt-3">121,179</p>
            </div>
          </div>
          <div className="w-56 h-28 relative">
            <img
              src="/rectangle/introSmall.svg"
              className="absolute inset-0 z-0 w-full h-full"
              alt=""
            />
            <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center">
              <p className="text-sm font-thin font-poppins text-graySecondary">
                Treasury Balance
              </p>
              <p className="text-2xl font-bold text-white mt-3">$259,172,683</p>
            </div>
          </div>
          <div className="w-56 h-28 relative">
            <img
              src="/rectangle/introSmall.svg"
              className="absolute inset-0 z-0 w-full h-full"
              alt=""
            />
            <div className="absolute w-full h-full inset-0 z-10 flex flex-col items-center justify-center">
              <p className="text-sm font-thin font-poppins text-graySecondary">
                Current APY
              </p>
              <p className="text-2xl font-bold text-white mt-3">69,756.7%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
