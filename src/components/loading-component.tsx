import React from "react";

const placeholderNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const LoadingComponent = () => {
  return (
    <div className="max-w-[1155px] mx-auto">
      <div className="flex flex-wrap">
        {placeholderNumber.map((number) => (
          <div
            key={number}
            className="animate-pulse h-20 w-20 md:h-28 md:w-28 xl:h-40 xl:w-40 m-1 md:m-2 xl:m-4 bg-gray-200 rounded-xl shadow-xl "
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingComponent;
