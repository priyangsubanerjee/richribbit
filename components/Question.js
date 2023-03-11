import React from "react";

function Question({ activeState, setActivesState, index, question, answer }) {
  return (
    <div
      onClick={() => setActivesState(activeState == index ? null : index)}
      className="border-b py-4 px-4 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-sm lg:text-lg font-medium text-white">
          {question}
        </h1>
        <span className="text-white">
          {activeState == index ? (
            <iconify-icon
              height="20"
              width="20"
              icon="material-symbols:remove"
            ></iconify-icon>
          ) : (
            <iconify-icon
              height="20"
              width="20"
              icon="material-symbols:add"
            ></iconify-icon>
          )}
        </span>
      </div>
      {activeState == index && (
        <p className="text-grayPrimary leading-8 text-sm mt-3">{answer}</p>
      )}
    </div>
  );
}

export default Question;
