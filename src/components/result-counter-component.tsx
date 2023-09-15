import React from "react";

interface ResultCounterComponentProps {
  name: string;
  cardsNumber: number;
  foundPairNumber: number;
  movesNumber: number;
}

const ResultCounterComponent = (props: ResultCounterComponentProps) => {
  const { name, cardsNumber, foundPairNumber, movesNumber } = props;

  return (
    <div className="bg-white rounded-xl p-2 w-max flex ml-auto">
      <p className="text-3xl text-purple-500 my-auto mr-4">{name}</p>
      <div className="mr-4">
        <p className="text-black text-sm">Points</p>
        <p className="text-black text-2xl mt-1">
          {cardsNumber / 2 + "/" + foundPairNumber}
        </p>
      </div>
      <div>
        <p className="text-black text-sm">Moves</p>
        <p className="text-black text-2xl mt-1">{movesNumber}</p>
      </div>
    </div>
  );
};

export default ResultCounterComponent;
