"use client";
import { useState } from "react";
import CardComponent from "../components/card-component";
import { CardType, SpinType } from "../types";
import Image from "next/image";

const cards = [
  {
    id: "25d",
    url: "https://cdn2.thecatapi.com/images/25d.jpg",
    width: 3872,
    height: 2200,
  },
  {
    id: "2us",
    url: "https://cdn2.thecatapi.com/images/2us.jpg",
    width: 2048,
    height: 1536,
  },
  {
    id: "3sd",
    url: "https://cdn2.thecatapi.com/images/3sd.gif",
    width: 500,
    height: 193,
  },
  {
    id: "8m8",
    url: "https://cdn2.thecatapi.com/images/8m8.jpg",
    width: 2048,
    height: 1536,
  },
  {
    id: "8to",
    url: "https://cdn2.thecatapi.com/images/8to.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "25d",
    url: "https://cdn2.thecatapi.com/images/25d.jpg",
    width: 3872,
    height: 2200,
  },
  {
    id: "2us",
    url: "https://cdn2.thecatapi.com/images/2us.jpg",
    width: 2048,
    height: 1536,
  },
  {
    id: "3sd",
    url: "https://cdn2.thecatapi.com/images/3sd.gif",
    width: 500,
    height: 193,
  },
  {
    id: "8m8",
    url: "https://cdn2.thecatapi.com/images/8m8.jpg",
    width: 2048,
    height: 1536,
  },
  {
    id: "8to",
    url: "https://cdn2.thecatapi.com/images/8to.jpg",
    width: 600,
    height: 600,
  },
  {
    id: "bib",
    url: "https://cdn2.thecatapi.com/images/bib.jpg",
    width: 500,
    height: 338,
  },
  {
    id: "ei4",
    url: "https://cdn2.thecatapi.com/images/ei4.jpg",
    width: 500,
    height: 372,
  },
  {
    id: "MTUwNTk4NQ",
    url: "https://cdn2.thecatapi.com/images/MTUwNTk4NQ.gif",
    width: 500,
    height: 281,
  },
  {
    id: "MTUzNjQwNw",
    url: "https://cdn2.thecatapi.com/images/MTUzNjQwNw.jpg",
    width: 1024,
    height: 679,
  },
  {
    id: "MTcxMzAzOA",
    url: "https://cdn2.thecatapi.com/images/MTcxMzAzOA.jpg",
    width: 640,
    height: 358,
  },
  {
    id: "bib",
    url: "https://cdn2.thecatapi.com/images/bib.jpg",
    width: 500,
    height: 338,
  },
  {
    id: "ei4",
    url: "https://cdn2.thecatapi.com/images/ei4.jpg",
    width: 500,
    height: 372,
  },
  {
    id: "MTUwNTk4NQ",
    url: "https://cdn2.thecatapi.com/images/MTUwNTk4NQ.gif",
    width: 500,
    height: 281,
  },
  {
    id: "MTUzNjQwNw",
    url: "https://cdn2.thecatapi.com/images/MTUzNjQwNw.jpg",
    width: 1024,
    height: 679,
  },
  {
    id: "MTcxMzAzOA",
    url: "https://cdn2.thecatapi.com/images/MTcxMzAzOA.jpg",
    width: 640,
    height: 358,
  },
];

const currentSpinEmptyState = {
  cardId1: undefined,
  cardIndex1: undefined,
  cardId2: undefined,
  cardIndex2: undefined,
};

export default function Home() {
  const [currentSpin, setCurentSpin] = useState<SpinType>(
    currentSpinEmptyState
  );
  const [foundPair, setFoundPair] = useState<string[]>([]);

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
    setFoundPair([]);
  };

  return (
    <div className="relative h-full">
      <Image
        src="/table-bg.jpg"
        alt="Table"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <main className="relative min-h-screen conatiner p-10">
        {foundPair.length === cards.length / 2 ? (
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
        ) : (
          <div className="max-w-[960px] mx-auto">
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
      </main>
    </div>
  );
}
