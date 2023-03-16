/* eslint-disable @next/next/no-img-element */
import React from "react";

function Staking() {
  return (
    <div className=" h-fit mt-20 py-20 lg:mb-10">
      <div className="h-full w-full inset-0 lg:px-44 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit text-2xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent">
            STAKING
          </h1>
          <p className="lg:text-sm text-xs text-center text-grayPrimary font-light leading-7 lg:leading-7 mt-6">
            Don&apos;t Settle for Less - Unleash the Power <br /> of $frgst and
            Earn with Our Staking Platform
          </p>
          <div className="mt-16">
            <img
              className=" pointer-events-none select-none"
              src="/gradients/stakingDashboard.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staking;
