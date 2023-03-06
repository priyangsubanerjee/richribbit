/* eslint-disable @next/next/no-img-element */
import React from "react";

function Compare() {
  return (
    <div className="min-h-[900px] relative mt-56">
      <img
        src="/compare.svg"
        className="absolute right-0 -top-28 h-[500px]"
        alt=""
      />
      <img
        src="/gradients/compareGradient.svg"
        className="absolute right-0 -top-[700px]"
        alt=""
      />
      <div className="absolute h-full w-full inset-0 px-44 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit text-4xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent">
            COMPARE OTHER (APY&apos;S)
          </h1>
          <p className="text-sm text-center text-grayPrimary font-light leading-7 mt-6">
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
            <h1 className="text-greenSecondary text-4xl font-bold">1152,74%</h1>
          </div>
          <p className="text-white mt-4">every year from</p>
          <div className="flex items-center mt-5">
            <img src="/logoPrimary.png" className="h-10" alt="" />
            <span className="text-white">$FRGST</span>
          </div>
        </div>
        <div className="mt-24">
          <p className="text-[#CCCCCC] text-center font-bold">OTHER TOKENS</p>
          <div className="grid grid-cols-2 mt-16">
            <div className="border-r space-y-8 px-20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-8 w-8 grayscale"
                    src="/richQuack.png"
                    alt=""
                  />
                  <p className="text-white font-poppins">Rich Quack</p>
                </div>
                <div>
                  <p className="text-white font-poppins">13.7%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img className="h-8 w-8 grayscale" src="/shb.png" alt="" />
                  <p className="text-white font-poppins">SHIB (shiba inu)</p>
                </div>
                <div>
                  <p className="text-white font-poppins">3.67%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img className="h-8 w-8 grayscale" src="/doge.png" alt="" />
                  <p className="text-white font-poppins">Doge (doge coin)</p>
                </div>
                <div>
                  <p className="text-white font-poppins">10%</p>
                </div>
              </div>
              <div className="flex items-center justify-between -ml-1">
                <div className="flex items-center space-x-4">
                  <img className="h-10 w-10 grayscale" src="/bonk.png" alt="" />
                  <p className="text-white font-poppins">BONK</p>
                </div>
                <div>
                  <p className="text-white font-poppins">7.01%</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 px-20">
              <div className="flex items-center justify-between -ml-4 -mt-4">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-14 w-14 grayscale"
                    src="/voltInu.png"
                    alt=""
                  />
                  <p className="text-white font-poppins">Volt Inu</p>
                </div>
                <div>
                  <p className="text-white font-poppins">10%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-8 w-8 grayscale"
                    src="/saitama.png"
                    alt=""
                  />
                  <p className="text-white font-poppins">Saitama</p>
                </div>
                <div>
                  <p className="text-white font-poppins">12%</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-8 w-8 grayscale"
                    src="/safemoon.png"
                    alt=""
                  />
                  <p className="text-white font-poppins">Safemoon</p>
                </div>
                <div>
                  <p className="text-white font-poppins">2%</p>
                </div>
              </div>
              <div className="flex items-center justify-between -ml-1">
                <div className="flex items-center space-x-4">
                  <img
                    className="h-10 w-10 grayscale"
                    src="/hogeFinance.png"
                    alt=""
                  />
                  <p className="text-white font-poppins">Hoge Finance</p>
                </div>
                <div>
                  <p className="text-white font-poppins">13%</p>
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
