"use client";
import { useEffect, useState } from "react";
import CardComponent from "../components/card-component";
import { CardType, SpinType } from "../types";
import { fetchCatImages, shuffleArray } from "../cat-images-service";
import LayoutComponent from "../components/layout/layout-component";
import LoadingComponent from "../components/loading-component";
import DashboardComponent from "../components/dashboard-component";
import ResultDisplayComponent from "../components/result-display-component";

const currentSpinEmptyState = {
  cardId1: undefined,
  cardIndex1: undefined,
  cardId2: undefined,
  cardIndex2: undefined,
};

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);
  const [theme, setTheme] = useState<"cat" | "dog">("dog");
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [currentSpin, setCurentSpin] = useState<SpinType>(
    currentSpinEmptyState
  );
  const [mode, setMode] = useState<"singlePlayer" | "multiPlayer">(
    "singlePlayer"
  );
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [playerOneName, setPlayerOneName] = useState<string>("");
  const [playerTwoName, setPlayerTwoName] = useState<string>("");

  const [foundPairPlayerOne, setFoundPairPlayerOne] = useState<string[]>([]);
  const [movesPlayerOne, setMovesPlayerOne] = useState<number>(0);

  const [foundPairPlayerTwo, setFoundPairPlayerTwo] = useState<string[]>([]);
  const [movesPlayerTwo, setMovesPlayerTwo] = useState<number>(0);

  const handleSpin = (id: string, cardIndex: number) => {
    if (currentSpin.cardIndex1 === undefined) {
      setCurentSpin({
        cardId1: id,
        cardIndex1: cardIndex,
        cardId2: undefined,
        cardIndex2: undefined,
      });
    } else if (
      currentSpin.cardIndex1 !== cardIndex &&
      currentSpin.cardIndex2 === undefined
    ) {
      setCurentSpin({
        cardId1: currentSpin.cardId1,
        cardIndex1: currentSpin.cardIndex1,
        cardId2: id,
        cardIndex2: cardIndex,
      });
    } else if (
      currentSpin.cardIndex1 !== undefined &&
      currentSpin.cardIndex2 !== undefined
    ) {
      if (currentPlayer === 1) {
        setMovesPlayerOne((previusNumber) => previusNumber + 1);
      } else {
        setMovesPlayerTwo((previusNumber) => previusNumber + 1);
      }
      if (currentSpin.cardId1 !== currentSpin.cardId2) {
        if (mode === "multiPlayer") {
          setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
        }
        setCurentSpin(currentSpinEmptyState);
      } else {
        if (mode === "singlePlayer") {
          foundPairPlayerOne.push(currentSpin.cardId1!);
        }
        if (mode === "multiPlayer") {
          currentPlayer === 1
            ? foundPairPlayerOne.push(currentSpin.cardId1!)
            : foundPairPlayerTwo.push(currentSpin.cardId1!);
        }
        setCurentSpin(currentSpinEmptyState);
      }
    }
  };

  const checkFound = (id: string) => {
    return foundPairPlayerOne.includes(id) || foundPairPlayerTwo.includes(id);
  };

  console.log(foundPairPlayerOne, "foundPairPlayerOne");
  console.log(foundPairPlayerTwo, "foundPairPlayerTwo");

  const handelRestart = () => {
    setCurentSpin(currentSpinEmptyState);
    setIsGameStart(true);
    setShowResults(false);
    setMovesPlayerOne(0);
    setMovesPlayerTwo(0);
    setFoundPairPlayerOne([]);
    setFoundPairPlayerTwo([]);
  };

  const handleStartNewGame = () => {
    setCurentSpin(currentSpinEmptyState);
    setPlayerOneName("");
    setPlayerTwoName("");
    setMovesPlayerOne(0);
    setMovesPlayerTwo(0);
    setFoundPairPlayerOne([]);
    setFoundPairPlayerTwo([]);
    setIsGameStart(false);
    setShowResults(false);
  };

  useEffect(() => {
    setLoading(true);
    setCurentSpin(currentSpinEmptyState);
    fetchCatImages(theme, limit)
      .then((data) => {
        if (data) {
          setCards(shuffleArray([...data, ...data]));
        }
      })
      .finally(() => setLoading(false));
  }, [limit, theme]);

  useEffect(() => {
    if (
      currentSpin.cardId1 !== undefined &&
      currentSpin.cardId1 === currentSpin.cardId2
    ) {
      setTimeout(
        () => handleSpin(currentSpin.cardId1!, currentSpin.cardIndex1!),
        500
      );
    }
    if (cards.length > 0) {
      if (foundPairPlayerOne.length === cards.length / 2) {
        setShowResults(true);
      }
      if (
        foundPairPlayerOne.length + foundPairPlayerTwo.length ===
        cards.length / 2
      ) {
        setShowResults(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSpin]);

  return (
    <LayoutComponent
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
      handelRestart={handelRestart}
      handleStartNewGame={handleStartNewGame}
      showResults={showResults}
    >
      <div className="relative conatiner p-2 md:p-5 xl:p-10">
        {!isGameStart && (
          <DashboardComponent
            mode={mode}
            setLimit={setLimit}
            setMode={setMode}
            theme={theme}
            setTheme={setTheme}
            setIsGameStart={setIsGameStart}
            setPlayerOneName={setPlayerOneName}
            setPlayerTwoName={setPlayerTwoName}
            playerOneName={playerOneName}
            playerTwoName={playerTwoName}
          />
        )}

        {isLoading && isGameStart && <LoadingComponent />}

        {!isLoading && cards.length > 0 && isGameStart && !showResults && (
          <div className="max-w-[264px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1155px] mx-auto">
            <div className="flex flex-wrap">
              {cards.map((card, i) => (
                <CardComponent
                  key={card.id + i}
                  card={card}
                  currentSpin={currentSpin}
                  handleSpin={handleSpin}
                  index={i + 1}
                  found={checkFound(card.id)}
                />
              ))}
            </div>
          </div>
        )}

        {!isLoading && showResults && (
          <ResultDisplayComponent
            handelRestart={handelRestart}
            handleStartNewGame={handleStartNewGame}
            mode={mode}
            playerOneName={playerOneName}
            playerTwoName={playerTwoName}
            foundPairPlayerOne={foundPairPlayerOne}
            foundPairPlayerTwo={foundPairPlayerTwo}
            movesPlayerOne={movesPlayerOne}
            movesPlayerTwo={movesPlayerTwo}
          />
        )}
      </div>
    </LayoutComponent>
  );
}
