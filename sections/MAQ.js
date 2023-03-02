/* eslint-disable @next/next/no-img-element */
import Question from "@/components/Question";
import React, { useState } from "react";

function MAQ() {
  const [activeState, setActiveState] = useState(null);
  const Questions = [
    {
      question: "How long has Froggies Token existed?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cum reprehenderit harum quaerat, beatae reiciendis sunt voluptatem deserunt, assumenda sapiente rem omnis repudiandae asperiores quia magnam quod vero! Veritatis, perspiciatis!",
    },
    {
      question: "What is our contract address?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cum reprehenderit harum quaerat, beatae reiciendis sunt voluptatem deserunt, assumenda sapiente rem omnis repudiandae asperiores quia magnam quod vero! Veritatis, perspiciatis!",
    },
    {
      question: "How secure is investing in Froggies Token?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cum reprehenderit harum quaerat, beatae reiciendis sunt voluptatem deserunt, assumenda sapiente rem omnis repudiandae asperiores quia magnam quod vero! Veritatis, perspiciatis!",
    },
  ];

  return (
    <div className="min-h-[900px] relative mt-44">
      <img
        src="/maqGradient.png"
        className="absolute left-1/2 -top-10 -translate-x-1/2 z-0 scale-[1.7] h-full w-[800px] object-cover"
        alt=""
      />
      <div className="absolute h-full w-full inset-0 px-44 z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-fit text-4xl font-bold bg-gradient-to-r bg-clip-text  from-white via-white/30 to-white  text-transparent">
            MOST ASKED QUESTIONS
          </h1>
        </div>
        <div className="px-32 mt-20 space-y-4">
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
