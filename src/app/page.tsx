"use client";
import { useEffect, useState } from "react";
import CardComponent from "../components/card-component";
import { CardType, SpinType } from "../types";
import { fetchCatImages, shuffleArray } from "../cat-images-service";
import LayoutComponent from "../components/layout/layout-component";
import LoadingComponent from "../components/loading-component";

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
  const [isGameEnd, setIsGameEnd] = useState<Boolean>(false);
  const [limit, setLimit] = useState<number>(6);
  const [currentSpin, setCurentSpin] = useState<SpinType>(
    currentSpinEmptyState
  );
  const [foundPair, setFoundPair] = useState<string[]>([]);
  const [moves, setMoves] = useState<number>(0);

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
      setMoves((previusNumber) => previusNumber + 1);
      if (currentSpin.cardId1 !== currentSpin.cardId2) {
        setCurentSpin(currentSpinEmptyState);
      } else {
        if (currentSpin.cardId1) {
          foundPair.push(currentSpin.cardId1);
        }
        setCurentSpin(currentSpinEmptyState);
      }
    }
  };

  const checkFound = (id: string) => {
    return foundPair.includes(id);
  };

  const handelRestart = () => {
    setCurentSpin(currentSpinEmptyState);
    setIsGameEnd(false);
    setMoves(0);
    setFoundPair([]);
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
    if (foundPair.length === cards.length) {
      setIsGameEnd(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSpin]);

  return (
    <LayoutComponent
      setLimit={setLimit}
      setTheme={setTheme}
      foundPair={foundPair}
      cards={cards}
      moves={moves}
    >
      <div className="relative conatiner p-2 md:p-5 xl:p-10">
        {isLoading && <LoadingComponent />}
        {foundPair.length === cards.length / 2 && !isLoading && isGameEnd && (
          <div className="text-center my-auto">
            <h2 className="text-purple-500 text-3xl font-bold">
              Congartualtion you win!
            </h2>
            <button
              onClick={() => handelRestart()}
              className="text-whitw uppercase rounded-md bg-purple-500 hover:opacity-75 font-bold px-4 py-2 mt-4"
            >
              restart
            </button>
          </div>
        )}
        {!isLoading && cards.length > 0 && (
          <div className="max-w-[1155px] mx-auto">
            <div className="flex flex-wrap">
              {cards.map((card, i) => (
                <CardComponent
                  key={card.id + i}
                  card={card}
                  currentSpin={currentSpin}
                  handleSpin={handleSpin}
                  index={i + 1}
                  show={checkFound(card.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </LayoutComponent>
  );
}
