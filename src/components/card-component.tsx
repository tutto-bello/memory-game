import React from "react";
import { CardType, SpinType } from "../types";

interface CardComponentProps {
  card: CardType;
  currentSpin: SpinType;
  handleSpin: (id: string, cardIndex: number) => void;
  index: number;
  show: boolean;
}

const CardComponent = (props: CardComponentProps) => {
  const {
    card: { id, url },
    currentSpin,
    handleSpin,
    index,
    show,
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
      className={`group h-40 w-40 m-4 cursor-pointer duration-500 [perspective:1000px] ${
        show && "opacity-0"
      }`}
      onClick={() => handleSpin(id, index)}
    >
      <div
        className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          checkId(index) && "[transform:rotateY(180deg)]"
        }`}
      >
        <div className="absolute inset-0">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src="/card-bg.png"
            alt=""
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            src={url}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
