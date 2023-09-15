import React, { Dispatch, SetStateAction } from "react";
import { CardType } from "../../types";
import ResultCounterComponent from "../result-counter-component";

interface HeaderComponentProps {
  isGameStart: boolean;
  cards: CardType[];
  foundPairPlayerOne: string[];
  movesPlayerOne: number;
  foundPairPlayerTwo: string[];
  movesPlayerTwo: number;
  mode: "singlePlayer" | "multiPlayer";
  playerOneName: string;
  playerTwoName: string;
}

const HeaderComponent = (props: HeaderComponentProps) => {
  const {
    foundPairPlayerOne,
    isGameStart,
    mode,
    cards,
    movesPlayerOne,
    foundPairPlayerTwo,
    movesPlayerTwo,
    playerOneName,
    playerTwoName,
  } = props;
  if (!isGameStart) {
    return null;
  }
  return (
    <div className="relative w-full items-center bg-transparent container pt-2 mx-auto px-2 py-2 flex">
      {mode === "multiPlayer" && (
        // <div className="bg-white rounded-xl p-2 w-max flex">
        //   <div className="mr-4">
        //     <p className="text-black text-sm">Points</p>
        //     <p className="text-black text-2xl mt-1">
        //       {cards.length / 2 + "/" + foundPairPlayerTwo.length}
        //     </p>
        //   </div>
        //   <div>
        //     <p className="text-black text-sm">Moves</p>
        //     <p className="text-black text-2xl mt-1">{movesPlayerTwo}</p>
        //   </div>
        // </div>
        <ResultCounterComponent
          name={playerTwoName}
          cardsNumber={cards.length}
          foundPairNumber={foundPairPlayerTwo.length}
          movesNumber={movesPlayerTwo}
        />
      )}
      {/* <div className="bg-white rounded-xl p-2 w-max flex ml-auto">
        <div className="mr-4">
          <p className="text-black text-sm">Points</p>
          <p className="text-black text-2xl mt-1">
            {cards.length / 2 + "/" + foundPairPlayerOne.length}
          </p>
        </div>
        <div>
          <p className="text-black text-sm">Moves</p>
          <p className="text-black text-2xl mt-1">{movesPlayerOne}</p>
        </div>
      </div> */}
      <ResultCounterComponent
        name={playerOneName}
        cardsNumber={cards.length}
        foundPairNumber={foundPairPlayerOne.length}
        movesNumber={movesPlayerOne}
      />
    </div>
  );
};

export default HeaderComponent;
