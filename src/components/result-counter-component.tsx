import React from "react";
import { giveTime } from "../utils";

interface ResultCounterComponentProps {
  name: string;
  cardsNumber: number;
  foundPairNumber: number;
  movesNumber: number;
  isActive?: boolean;
  time: number;
}

const ResultCounterComponent = (props: ResultCounterComponentProps) => {
  const { name, cardsNumber, foundPairNumber, movesNumber, isActive, time } =
    props;

  return (
    <div
      className={`${
        !isActive && "opacity-75"
      } bg-white rounded-lg p-1 md:p-2 w-max`}
    >
      <div className="flex">
        <p
          className={`text-xl md:text-3xl text-purple-500 my-auto mr-2 md:mr-4 ${
            !isActive && "text-gray-500"
          }`}
        >
          {name}
        </p>
        <div className="mr-2 md:mr-4">
          <p className="text-black text-xs md:text-sm">Points</p>
          <p className="text-black text-md md:text-2xl mt-0.5 md:mt-1">
            {cardsNumber / 2 + "/" + foundPairNumber}
          </p>
        </div>
        <div>
          <p className="text-black text-xs md:text-sm">Moves</p>
          <p className="text-black text-md md:text-2xl mt-0.5 md:mt-1">
            {movesNumber}
          </p>
        </div>
      </div>
      <div className="text-md md:text-2xl text-center mt-1">
        {giveTime(time)}
      </div>
    </div>
  );
};

export default ResultCounterComponent;