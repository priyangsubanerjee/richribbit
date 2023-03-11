/* eslint-disable @next/next/no-img-element */
import Question from "@/components/Question";
import React, { useState } from "react";

function MAQ() {
  const [activeState, setActiveState] = useState(null);
  const Questions = [
    {
      question: "How long has Froggies Token existed?",
      answer: (
        <p>
          FROGGIES Token was initially launched back in November 2021 on the
          Ethereum chain. Later a bridge was created to the BSC to allow for
          cross chain transactions and cheaper gas fees.
          <br />
          In October 2022 Froggies Token decided to migrate the legacy ETH and
          BSC contract into one new BSC contract. The main reasons for this were
          lower gas fees, a stronger liquidity pool, and the greater
          possibilities of on chain development.
        </p>
      ),
    },
    {
      question: "What is our contract address?",
      answer: (
        <p>
          0x7029994f28fd39ff934A96b25591D250A2183f67
          <br />
          Chain: Binance Smart Chain
        </p>
      ),
    },
    {
      question: "How secure is investing in Froggies Token?",
      answer: (
        <div>
          <p>
            During the creation of our smart contract, we have taken investor
            security in mind and we have provided several measures:
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>
              Tax cannot be set higher than 15% state._maxTaxFee = 1500;(1500
              means 15%)
            </li>
            <li>Our Liquidity Pool is fully locked</li>
            <li>
              Our team members have been KYC by Nanuqe: https://t.co/ksVl2DC0XR
            </li>
            <li>Some team members are doxxed</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className=" h-fit mt-44 py-20 mb-56">
      <div className="h-full w-full inset-0 lg:px-44 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit text-2xl lg:text-4xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent">
            MOST ASKED QUESTIONS
          </h1>
        </div>
        <div className="px-6 lg:px-32 mt-7 lg:mt-20 space-y-4">
          {Questions.map((question, index) => {
            return (
              <Question
                activeState={activeState}
                setActivesState={setActiveState}
                key={index}
                question={question.question}
                answer={question.answer}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MAQ;
