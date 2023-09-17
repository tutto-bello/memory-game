import React from "react";
import { CardType, SpinType } from "../types";
import Image from "next/image";

interface CardComponentProps {
  card: CardType;
  currentSpin: SpinType;
  handleSpin: (id: string, cardIndex: number) => void;
  index: number;
  found: boolean;
}

const CardComponent = (props: CardComponentProps) => {
  const {
    card: { id, url },
    currentSpin,
    handleSpin,
    index,
    found,
  } = props;

  const checkId = (index: number) => {
    if (currentSpin.cardIndex1 === index) {
      return true;
    }
    if (currentSpin.cardIndex2 === index) {
      return true;
    }
    return false;
  };

  return (
    <div
      className={`group h-20 w-20 md:h-28 md:w-28 xl:h-40 xl:w-40 m-1 md:m-2 xl:m-4 cursor-pointer duration-500 [perspective:1000px] ${
        found && "opacity-0 cursor-auto"
      }`}
      onClick={!found ? () => handleSpin(id, index) : undefined}
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          checkId(index) && "[transform:rotateY(180deg)]"
        }`}
      >
        <div className="absolute inset-0">
          <Image
            className={`h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 bg-gray-300 ${
              found && "hidden"
            }`}
            src="/card-bg.png"
            alt="Card Background"
            width={112}
            height={112}
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            width={112}
            height={112}
            loading="eager"
            src={url}
            alt={url}
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
