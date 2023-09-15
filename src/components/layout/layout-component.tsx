import React, { Dispatch, SetStateAction } from "react";
import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import Image from "next/image";
import { CardType } from "../../types";

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
      />
      <div className="container mx-auto">{children}</div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
