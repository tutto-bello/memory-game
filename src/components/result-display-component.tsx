import React from "react";

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
  } = props;

  const findWinner = () => {
    return foundPairPlayerOne.length > foundPairPlayerTwo.length
      ? playerOneName
      : playerTwoName;
  };

  return (
    <div className="text-center my-auto mx-auto md:w-max p-6 bg-white rounded-xl">
      <h2 className="text-purple-500 text-2xl font-bold">
        {mode === "singlePlayer" &&
          "Congratulations on your results " + playerOneName + "!"}
        {mode === "multiPlayer" &&
          "Congratulations " + findWinner() + " you are the winner!"}
      </h2>
      <p className="my-4 text-gray-500">
        {mode === "singlePlayer" &&
          "You have found all " +
            foundPairPlayerOne.length +
            " pairs in a total of " +
            movesPlayerOne +
            " moves."}
        {mode === "multiPlayer" &&
          playerOneName +
            " found " +
            foundPairPlayerOne.length +
            " pairs in a total of " +
            movesPlayerOne +
            " moves."}
      </p>
      {mode === "multiPlayer" && (
        <p className="my-4 text-gray-500">
          {playerTwoName +
            " found " +
            foundPairPlayerTwo.length +
            " pairs in a total of " +
            movesPlayerTwo +
            " moves."}
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
