import React from "react";

const placeholderNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const LoadingComponent = () => {
  return (
    <div className="max-w-[960px] mx-auto">
      <div className="flex flex-wrap">
        {placeholderNumber.map((number) => (
          <div
            key={number}
            className="animate-pulse h-40 w-40 m-4 bg-gray-200 rounded-xl shadow-xl "
          >
            {/* <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src="/card-bg.png"
              alt=""
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingComponent;
