/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";
import Question from "@/components/Question";
import React, { useState } from "react";

function FAQ() {
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
    {
      question: "Is Froggies Token listed on a centralized exchange?",
      answer: (
        <div>
          <p>
            Yes, we are listed on the rapidly expanding Asian exchange
            Coinstore. Froggies Token is paired with USDT and can be spot
            traded; https://www.coinstore.com/#/spot/FRGSTUSDT
          </p>
        </div>
      ),
    },
    {
      question: "How to buy Froggies Token through the PancakeSwap website?",
      answer: (
        <div>
          <p>
            Go to:
            <a href=" https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB">
              https://pancakeswap.finance/swap?outputCurrency=0x7029994f28fd39ff934A96b25591D250A2183f67&inputCurrency=BNB
            </a>
            <ul className="list-disc ml-5 mt-2 space-y-2">
              <li>Connect your preferred wallet</li>
              <li>
                Select any input currency (default should be BNB, our pair)
              </li>
              <li>Search for FRGST, if it does not show up:</li>
              <li>Select Manage Tokens</li>
              <li>Go to the second tab &apos;Tokens&apos;</li>
              <li>Fill out the FRGST contract address</li>
              <li>Select Import</li>
              <li>
                Enter the amount of BNB you want to invest, or amount of FRGST
                you want to buy.
              </li>
              <li>
                Make sure under the settings &apos;Slippage Tolerance&apos; is
                set to 12%
              </li>
              <li>Select Swap</li>
              <li>Approve the contract pop-up</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      question: "How to fix the 'insufficient output' error on Pancakeswap?",
      answer: "Increase the slippage tolerance to 12%",
    },
    {
      question:
        "How can I become a liquidity provider and earn a piece of the pool?",
      answer: (
        <div>
          <ul className="list-disc ml-5 mt-2 space-y-2">
            <li>
              Visit the Liquidity page{" "}
              <a href="https://pancakeswap.finance/liquidity">
                (https://pancakeswap.finance/liquidity)
              </a>
            </li>
            <li>Click the Add Liquidity button.</li>
            <li>
              For the top Input, click &apos;Select a currency&apos;. - Choose
              BNB
            </li>
            <li>
              For the bottom input, click &apos;Select a currency&apos;. -
              Choose FRGST
            </li>
            <li>Enter an amount on one of the tokens under “Input”. ...</li>
            <li>If one of the tokens does not have enough balance. ...</li>
            <li>Click the Enable CAKE button.</li>
            <li>DONE!</li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="relative min-h-[1200px]">
        <div className="absolute z-10 inset-0 h-full w-full">
          <div className="px-44 pb-16">
            <h1 className="uppercase mt-20 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/30 to-white">
              Frequently asked questions
            </h1>
            <div className="px-32 space-y-5 mt-16">
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
        <img
          src="/faqGradient.png"
          className="absolute top-0 w-[600px] h-[600px] left-1/2 -translate-x-1/2 scale-[1.4] z-0 blur-xl rounded-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default FAQ;
