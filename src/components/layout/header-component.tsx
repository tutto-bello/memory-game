import React from "react";
import { CardType, TimerType } from "../../types";
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
  currentPlayer: 2 | 1;
  timer: TimerType;
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
    currentPlayer,
    timer,
  } = props;
  if (!isGameStart) {
    return null;
  }
  return (
    <div className="relative w-full items-center bg-transparent container pt-2 mx-auto px-2 py-2 flex">
      {mode === "multiPlayer" && (
        <ResultCounterComponent
          name={playerTwoName}
          cardsNumber={cards.length}
          foundPairNumber={foundPairPlayerTwo.length}
          movesNumber={movesPlayerTwo}
          isActive={currentPlayer === 2}
          time={timer.playerTwo}
        />
      )}
      <div className="ml-auto">
        <ResultCounterComponent
          name={playerOneName}
          cardsNumber={cards.length}
          foundPairNumber={foundPairPlayerOne.length}
          movesNumber={movesPlayerOne}
          isActive={currentPlayer === 1}
          time={timer.playerOne}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
