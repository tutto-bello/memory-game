import React from "react";

interface FooterComponentProps {
  handelRestart: () => void;
  handleStartNewGame: () => void;
  showResults: boolean;
  isGameStart: boolean;
}

const FooterComponent = (props: FooterComponentProps) => {
  const { handleStartNewGame, handelRestart, showResults, isGameStart } = props;
  return (
    <div className="relative container mx-auto text-center p-6 px-3">
      {!showResults && isGameStart && (
        <div className="flex justify-center mb-6">
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
      )}
      <p className="text-black text-sm">
        {`${new Date().getFullYear()} | tuttobello™`}
      </p>
    </div>
  );
};

export default FooterComponent;
