import React from "react";
import { giveTime } from "../utils";
import { TimerType } from "../types";

interface ResultDisplayComponentProps {
  handelRestart: () => void;
  handleStartNewGame: () => void;
  mode: "singlePlayer" | "multiPlayer";
  playerOneName: string;
  playerTwoName: string;
  foundPairPlayerOne: string[];
  foundPairPlayerTwo: string[];
  movesPlayerOne: number;
  movesPlayerTwo: number;
  timer: TimerType;
}

const ResultDisplayComponent = (props: ResultDisplayComponentProps) => {
  const {
    handelRestart,
    handleStartNewGame,
    mode,
    playerOneName,
    playerTwoName,
    foundPairPlayerOne,
    foundPairPlayerTwo,
    movesPlayerOne,
    movesPlayerTwo,
    timer,
  } = props;

  const findWinner = () => {
    const playerOneScore =
      foundPairPlayerOne.length - movesPlayerOne * 0.1 + timer.playerOne * 0.01;
    const playerTwoScore =
      foundPairPlayerTwo.length - movesPlayerTwo * 0.1 + timer.playerTwo * 0.01;

    if (playerOneScore > playerTwoScore) {
      return "Congratulations " + playerOneName + " you are the winner!";
    } else if (playerTwoScore > playerOneScore) {
      return "Congratulations " + playerTwoName + " you are the winner!";
    } else {
      return "It's a tie!";
    }
  };

  return (
    <div className="text-center my-auto mx-auto md:w-max p-6 bg-white rounded-xl">
      <h2 className="text-purple-500 text-2xl font-bold">
        {mode === "singlePlayer" &&
          "Congratulations on your results " + playerOneName + "!"}
        {mode === "multiPlayer" && findWinner()}
      </h2>
      <p className="my-4 text-gray-500">
        {mode === "singlePlayer" &&
          "You have found all " +
            foundPairPlayerOne.length +
            " pairs in a total of " +
            movesPlayerOne +
            " moves with in " +
            giveTime(timer.playerOne) +
            " time."}

        {mode === "multiPlayer" &&
          playerOneName +
            " found " +
            foundPairPlayerOne.length +
            " pairs in a total of " +
            movesPlayerOne +
            " moves with in " +
            giveTime(timer.playerOne) +
            " time."}
      </p>
      {mode === "multiPlayer" && (
        <p className="my-4 text-gray-500">
          {playerTwoName +
            " found " +
            foundPairPlayerTwo.length +
            " pairs in a total of " +
            movesPlayerTwo +
            " moves with in " +
            giveTime(timer.playerTwo) +
            " time."}
        </p>
      )}
      <div className="flex justify-center">
        <button
          onClick={() => handleStartNewGame()}
          className="uppercase rounded-md border-2 border-purple-500 hover:opacity-75 font-bold px-4 py-2 mt-4 text-purple-500 mr-4"
        >
          new game
        </button>
        <button
          onClick={() => handelRestart()}
          className="uppercase rounded-md border-2 border-purple-500 bg-purple-500 hover:opacity-75 font-bold px-4 py-2 mt-4 text-white"
        >
          restart
        </button>
      </div>
    </div>
  );
};

export default ResultDisplayComponent;
