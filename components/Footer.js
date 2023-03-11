/* eslint-disable @next/next/no-img-element */
import React from "react";

function Footer() {
  return (
    <div className="h-fit lg:min-h-[365px] relative lg:mt-56 w-full">
      <img
        src="/footerRectangle.png"
        className="h-full w-full inset-0 absolute z-0 object-cover"
        alt=""
      />
      <img
        src="/moonText.png"
        className="absolute top-10 -left-6 z-0 h-32 hidden lg:block"
        alt=""
      />
      <img
        src="/moonText2.png"
        className="absolute bottom-0 -right-6 z-0 h-32 hidden lg:block"
        alt=""
      />
      <div className="lg:absolute h-full w-full inset-0 lg:px-44 z-10 pb-5">
        <div className="flex flex-col items-center justify-center p-10">
          <img src="/logo.svg" className="h-9 lg:h-10" alt="" />
          <h1 className="w-fit mt-5 text-center text-2xl lg:text-3xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent leading-[1.5] lg:leading-[1.4]">
            TO THE MOON
            <br />
            AND NEVER BACK
          </h1>
        </div>
        <ul className="block text-center lg:text-left lg:flex space-x-7 lg:space-x-14 items-center justify-center border-b pb-7">
          <a href="">
            <li className="text-white font-light">Team</li>
          </a>
          <a href="">
            <li className="text-white font-light">Rewards</li>
          </a>
          <a href="">
            <li className="text-white font-light">Rewards</li>
          </a>
          <a href="">
            <li className="text-white font-light">Rewards</li>
          </a>
          <a href="">
            <li className="text-white font-light">Rewards</li>
          </a>
          <a href="">
            <li className="text-white font-light">Staking</li>
          </a>
        </ul>
        <div className="flex items-center justify-between mt-4 px-4">
          <span className="text-graySecondary text-xs">© 2023 RichRibbit</span>
          <span className="text-graySecondary text-xs">
            Partnered with{" "}
            <a className="underline" target={"_blank"} href="https://dtory.in">
              Dtory Studios
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
