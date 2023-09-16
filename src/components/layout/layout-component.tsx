import React, { Dispatch, SetStateAction } from "react";
import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import Image from "next/image";
import { CardType, TimerType } from "../../types";

interface LayoutComponentProps {
  children: React.ReactNode;
  isGameStart: boolean;
  mode: "singlePlayer" | "multiPlayer";
  cards: CardType[];
  foundPairPlayerOne: string[];
  movesPlayerOne: number;
  foundPairPlayerTwo: string[];
  movesPlayerTwo: number;
  playerOneName: string;
  playerTwoName: string;
  currentPlayer: 2 | 1;
  handelRestart: () => void;
  handleStartNewGame: () => void;
  showResults: boolean;
  timer: TimerType;
}

const LayoutComponent = (props: LayoutComponentProps) => {
  const {
    children,
    isGameStart,
    mode,
    foundPairPlayerOne,
    cards,
    movesPlayerOne,
    foundPairPlayerTwo,
    movesPlayerTwo,
    playerOneName,
    playerTwoName,
    currentPlayer,
    handelRestart,
    handleStartNewGame,
    showResults,
    timer,
  } = props;
  return (
    <div className="relative h-full">
      <Image src="/table-bg.jpg" alt="Table" fill className="min-h-screen" />
      <HeaderComponent
        isGameStart={isGameStart}
        mode={mode}
        cards={cards}
        foundPairPlayerOne={foundPairPlayerOne}
        movesPlayerOne={movesPlayerOne}
        foundPairPlayerTwo={foundPairPlayerTwo}
        movesPlayerTwo={movesPlayerTwo}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        currentPlayer={currentPlayer}
        timer={timer}
      />
      <div className="container mx-auto">{children}</div>
      <FooterComponent
        isGameStart={isGameStart}
        showResults={showResults}
        handelRestart={handelRestart}
        handleStartNewGame={handleStartNewGame}
      />
    </div>
  );
};

export default LayoutComponent;
