/* eslint-disable @next/next/no-img-element */
import React from "react";

function Rewards() {
  return (
    <div className="min-h-[950px] lg:min-h-[500px] relative mt-44 lg:mt-56">
      <div className="absolute h-full w-full inset-0 lg:px-44 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit text-2xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent">
            REWARDS &amp; BENEFITS
          </h1>
          <p className="hidden lg:block text-sm text-center text-grayPrimary font-light leading-7 mt-6">
            Don&apos;t Settle for Less - Unleash the Power <br /> of $frgst and
            Earn with Our Staking Platform
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-16 lg:space-x-8 space-y-6 lg:space-y-0">
          <div className="w-[90%] lg:w-[350px] h-[250px] relative rounded-xl overflow-hidden hover:scale-[1.05] hover:shadow-2xl hover:shadow-green-900/40 transition-all duration-500">
            <img
              src="/rectangle/reward.svg"
              className="absolute inset-0 h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 h-full w-full p-4">
              <img src="/happyEarnings.png" className="h-20" alt="" />
              <h1 className="text-white font-poppins text-lg font-semibold mt-2">
                Happy Earnings
              </h1>
              <p className="text-graySecondary text-xs leading-6 mt-3">
                Stake $FRGST to jumpstart your profits or help burn the supply.
                Our platform can burn over 10% of the supply, sending those
                flies flying!
              </p>
            </div>
          </div>
          <div className="w-[90%] lg:w-[350px] h-[250px] relative rounded-xl overflow-hidden hover:scale-[1.05] hover:shadow-2xl hover:shadow-green-900/40 transition-all duration-500">
            <img
              src="/rectangle/reward.svg"
              className="absolute inset-0 h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 h-full w-full p-4">
              <img src="/highApy.png" className="h-20" alt="" />
              <h1 className="text-white font-poppins text-lg font-semibold mt-2">
                High APY Rates
              </h1>
              <p className="text-graySecondary text-xs leading-6 mt-3">
                Leap your way to profits with our hop-tastic APY rates. We
                reward our stakers with the best bang for their buck, ribbit!
              </p>
            </div>
          </div>
          <div className="w-[90%] lg:w-[350px] h-[250px] relative rounded-xl overflow-hidden hover:scale-[1.05] hover:shadow-2xl hover:shadow-green-900/40 transition-all duration-500">
            <img
              src="/rectangle/reward.svg"
              className="absolute inset-0 h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 h-full w-full p-4">
              <img src="/stability.png" className="h-28 -mt-5" alt="" />
              <h1 className="text-white font-poppins text-lg font-semibold -mt-1">
                Contribute to Stability
              </h1>
              <p className="text-graySecondary text-xs leading-6 mt-3">
                Earn rewards while giving our hoppy community a solid
                foundation. Your support helps us reach new heights, and keeps
                those lily pads steady.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
