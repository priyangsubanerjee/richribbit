/* eslint-disable @next/next/no-img-element */
import React from "react";

function Calculator() {
  return (
    <div className="min-h-[1000px] lg:min-h-[600px] relative lg:mt-44">
      <img
        src="/gradients/glowRIng.svg"
        className="absolute -top-44 left-0 h-96 brightness-50 hidden lg:block"
        alt=""
      />
      <div className="absolute h-full w-full inset-0 lg:px-44 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit text-3xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent">
            CALCULATOR
          </h1>
          <p className="text-sm text-center text-grayPrimary font-light leading-7 mt-6 hidden lg:block">
            Don&apos;t Settle for Less - Unleash the Power <br /> of $frgst and
            Earn with Our Staking Platform
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-7 lg:mt-16 space-y-7 lg:space-x-8 lg:space-y-0">
          <div className="lg:w-[520px] w-[90%] h-[400px] lg:h-[425px] relative flex rounded-xl overflow-hidden">
            <img
              src="/rectangle/calculator.svg"
              className="absolute inset-0 h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 h-full w-full p-6 lg:p-6">
              <h1 className="text-center text-lg lg:text-xl text-white font-semibold font-poppins mt-2">
                STAKING CALCULATOR
              </h1>
              <div className="flex items-center justify-between mt-8">
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[#ACACAC] text-xs lg:text-sm font-light font-poppins">
                    Your ($FRGST) stake
                  </p>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mt-1">
                    100
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-end">
                  <p className="text-[#ACACAC] text-sm font-light font-poppins">
                    Yearly Return
                  </p>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mt-1">
                    • &nbsp; 9.83%
                  </h1>
                </div>
              </div>
              <div className="border border-white/70 rounded-md mt-6 lg:mt-8 overflow-hidden">
                <input
                  type="text"
                  className="w-full h-full bg-transparent py-2 px-4 text-gray-300"
                  placeholder="100"
                />
              </div>
              <div className="mt-10 space-y-6">
                <div className="grid grid-cols-3 w-full">
                  <p className="text-xs lg:text-sm text-left text-[#ACACAC] tracking-widest">
                    YEARLY
                  </p>
                  <p className="text-xs lg:text-sm text-center text-[#ACACAC] tracking-widest">
                    0.03 $FRGST
                  </p>
                  <p className="text-xs lg:text-sm text-[#ACACAC] tracking-widest text-right">
                    $2.51
                  </p>
                </div>
                <div className="grid grid-cols-3 w-full">
                  <p className="text-xs lg:text-sm text-left text-[#ACACAC] tracking-widest">
                    MONTHLY
                  </p>
                  <p className="text-xs lg:text-sm text-center text-[#ACACAC] tracking-widest">
                    0.82 $FRGST
                  </p>
                  <p className="text-xs lg:text-sm text-[#ACACAC] tracking-widest text-right">
                    $68.55
                  </p>
                </div>
                <div className="grid grid-cols-3 w-full">
                  <p className="text-xs lg:text-sm text-left text-[#ACACAC] tracking-widest">
                    DAILY
                  </p>
                  <p className="text-xs lg:text-sm text-center text-[#ACACAC] tracking-widest">
                    9.83 $FRGST
                  </p>
                  <p className="text-xs lg:text-sm text-[#ACACAC] tracking-widest text-right">
                    $821.79
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[520px] w-[90%] h-[400px] lg:h-[425px] relative flex rounded-xl overflow-hidden">
            <img
              src="/rectangle/calculator.svg"
              className="absolute inset-0 h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 h-full w-full p-6">
              <div className="flex items-center justify-between font-poppins">
                <h1 className="text-sm text-center lg:text-base text-white font-medium font-poppins mt-2">
                  Results over a year
                </h1>
                <button className="flex items-center space-x-2">
                  <span className="text-white font-medium text-sm">Yearly</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
