/* eslint-disable @next/next/no-img-element */
import React from "react";

function Compare() {
  return (
    <div className="min-h-[950px] lg:min-h-[900px] relative lg:mt-56">
      <img
        src="/compare.svg"
        className="absolute right-0 -top-28 h-[500px] hidden lg:block"
        alt=""
      />
      <img
        src="/gradients/compareGradient.svg"
        className="absolute right-0 -top-[700px] hidden lg:block"
        alt=""
      />
      <div className="absolute h-full w-full inset-0 lg:px-44 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit text-2xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent">
            COMPARE OTHER (APY&apos;S)
          </h1>
          <p className="text-xs lg:text-sm text-center text-grayPrimary font-light leading-7 mt-6">
            Don&apos;t Settle for Less - Unleash the Power <br /> of $frgst and
            Earn with Our Staking Platform
          </p>
          <p className="text-white mt-5">EARN</p>
          <div className="relative mt-4 text-center">
            <img
              src="/arrawAnnote.png"
              className="absolute -right-8 h-16 top-16"
              alt=""
            />
            <h1 className="text-greenSecondary text-3xl lg:text-4xl font-bold">
              1152,74%
            </h1>
          </div>
          <p className="text-white mt-4">every year from</p>
          <div className="flex items-center mt-5">
            <img src="/logoPrimary.png" className="h-10" alt="" />
            <span className="text-white">$FRGST</span>
          </div>
        </div>
        <div className="mt-24">
          <p className="text-[#CCCCCC] text-center font-bold">OTHER TOKENS</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-16">
            <div className="lg:border-r space-y-8 px-10 lg:px-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-8 w-8 grayscale"
                    src="/richQuack.png"
                    alt=""
                  />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    Rich Quack
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    13.7%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img className="h-8 w-8 grayscale" src="/shb.png" alt="" />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    SHIB (shiba inu)
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    3.67%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img className="h-8 w-8 grayscale" src="/doge.png" alt="" />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    Doge (doge coin)
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    10%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between -ml-1">
                <div className="flex items-center space-x-4">
                  <img className="h-10 w-10 grayscale" src="/bonk.png" alt="" />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    BONK
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    7.01%
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:space-y-8 px-10 lg:px-20">
              <div className="flex items-center justify-between -ml-4 mt-5 lg:-mt-4">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-14 w-14 grayscale"
                    src="/voltInu.png"
                    alt=""
                  />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    Volt Inu
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    10%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-8 w-8 grayscale"
                    src="/saitama.png"
                    alt=""
                  />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    Saitama
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    12%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-8 w-8 grayscale"
                    src="/safemoon.png"
                    alt=""
                  />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    Safemoon
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    2%
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between -ml-1">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-10 w-10 grayscale"
                    src="/hogeFinance.png"
                    alt=""
                  />
                  <p className="text-white font-poppins text-sm lg:text-base">
                    Hoge Finance
                  </p>
                </div>
                <div>
                  <p className="text-white font-poppins text-sm lg:text-base">
                    13%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
