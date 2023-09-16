"use client";
import { useEffect, useState } from "react";
import CardComponent from "../components/card-component";
import {
  CardType,
  FoundPairType,
  MovesType,
  SpinType,
  TimerType,
} from "../types";
import { fetchCatImages, shuffleArray } from "../images-service";
import LayoutComponent from "../components/layout/layout-component";
import LoadingComponent from "../components/loading-component";
import DashboardComponent from "../components/dashboard-component";
import ResultDisplayComponent from "../components/result-display-component";
import { DEFAULT_SPIN_STATE } from "../utils";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [cards, setCards] = useState<CardType[]>([]);
  const [theme, setTheme] = useState<"cat" | "dog">("dog");
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [currentSpin, setCurentSpin] = useState<SpinType>(DEFAULT_SPIN_STATE);
  const [mode, setMode] = useState<"singlePlayer" | "multiPlayer">(
    "singlePlayer"
  );
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2>(1);
  const [playerOneName, setPlayerOneName] = useState<string>("");
  const [playerTwoName, setPlayerTwoName] = useState<string>("");

  const [foundPairs, setFoundPairs] = useState<FoundPairType>({
    playerOne: [],
    playerTwo: [],
  });

  const [moves, setMoves] = useState<MovesType>({
    playerOne: 0,
    playerTwo: 0,
  });

  const [timer, setTimer] = useState<TimerType>({
    playerOne: 0,
    playerTwo: 0,
  });

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
        setMoves((previusNumbers) => ({
          playerOne: previusNumbers.playerOne + 1,
          playerTwo: previusNumbers.playerTwo,
        }));
      } else {
        setMoves((previusNumbers) => ({
          playerOne: previusNumbers.playerOne,
          playerTwo: previusNumbers.playerTwo + 1,
        }));
      }
      if (currentSpin.cardId1 !== currentSpin.cardId2) {
        if (mode === "multiPlayer") {
          setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
        }
        setCurentSpin(DEFAULT_SPIN_STATE);
      } else {
        if (mode === "singlePlayer") {
          foundPairs.playerOne.push(currentSpin.cardId1!);
        }
        if (mode === "multiPlayer") {
          currentPlayer === 1
            ? foundPairs.playerOne.push(currentSpin.cardId1!)
            : foundPairs.playerTwo.push(currentSpin.cardId1!);
        }
        setCurentSpin(DEFAULT_SPIN_STATE);
      }
    }
  };

  const checkFound = (id: string) => {
    return (
      foundPairs.playerOne.includes(id) || foundPairs.playerTwo.includes(id)
    );
  };

  const handelRestart = () => {
    setCurentSpin(DEFAULT_SPIN_STATE);
    setIsGameStart(true);
    setShowResults(false);
    setMoves({ playerOne: 0, playerTwo: 0 });
    setTimer({ playerOne: 0, playerTwo: 0 });
    setFoundPairs({ playerOne: [], playerTwo: [] });
  };

  const handleStartNewGame = () => {
    setCurentSpin(DEFAULT_SPIN_STATE);
    setPlayerOneName("");
    setPlayerTwoName("");
    setMoves({ playerOne: 0, playerTwo: 0 });
    setTimer({ playerOne: 0, playerTwo: 0 });
    setFoundPairs({ playerOne: [], playerTwo: [] });
    setIsGameStart(false);
    setShowResults(false);
  };

  useEffect(() => {
    setLoading(true);
    setCurentSpin(DEFAULT_SPIN_STATE);
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
      if (foundPairs.playerOne.length === cards.length / 2) {
        setShowResults(true);
        setIsGameStart(false);
      }
      if (
        foundPairs.playerOne.length + foundPairs.playerTwo.length ===
        cards.length / 2
      ) {
        setShowResults(true);
        setIsGameStart(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSpin]);

  useEffect(() => {
    if (isGameStart) {
      if (currentPlayer === 1) {
        const intervalId = setInterval(() => {
          setTimer((prevTimer) => ({
            playerOne: prevTimer.playerOne + 1,
            playerTwo: prevTimer.playerTwo,
          }));
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }
      if (currentPlayer === 2) {
        const intervalId = setInterval(() => {
          setTimer((prevTimer) => ({
            playerOne: prevTimer.playerOne,
            playerTwo: prevTimer.playerTwo + 1,
          }));
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }
    }
  }, [currentPlayer, isGameStart]);

  return (
    <LayoutComponent
      isGameStart={isGameStart}
      mode={mode}
      cards={cards}
      foundPairPlayerOne={foundPairs.playerOne}
      movesPlayerOne={moves.playerTwo}
      foundPairPlayerTwo={foundPairs.playerTwo}
      movesPlayerTwo={moves.playerTwo}
      playerOneName={playerOneName}
      playerTwoName={playerTwoName}
      currentPlayer={currentPlayer}
      handelRestart={handelRestart}
      handleStartNewGame={handleStartNewGame}
      showResults={showResults}
      timer={timer}
    >
      <div className="relative conatiner p-2 md:p-5 xl:p-10">
        {isLoading && isGameStart && <LoadingComponent />}

        {!isGameStart && !showResults && (
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
            foundPairPlayerOne={foundPairs.playerOne}
            foundPairPlayerTwo={foundPairs.playerTwo}
            movesPlayerOne={moves.playerOne}
            movesPlayerTwo={moves.playerTwo}
            timer={timer}
          />
        )}
      </div>
    </LayoutComponent>
  );
}
