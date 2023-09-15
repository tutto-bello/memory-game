import React, { Dispatch, SetStateAction } from "react";
import SelectField from "../select-field";
import { CardType } from "../../types";

interface HeaderComponentProps {
  setLimit: Dispatch<SetStateAction<number>>;
  setTheme: Dispatch<SetStateAction<"dog" | "cat">>;
  foundPair: string[];
  cards: CardType[];
  moves: number;
}

const difficultyOption = [
  { label: "Easy", value: "6" },
  { label: "Medium", value: "9" },
  { label: "Hard", value: "15" },
];

const themeOptions = [
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
];

const HeaderComponent = (props: HeaderComponentProps) => {
  const { setLimit, setTheme, foundPair, cards, moves } = props;
  return (
    <div className="relative w-full items-center bg-transparent container pt-2 mx-auto">
      <div className="bg-white rounded-xl p-2 w-max flex ml-auto">
        <SelectField
          label="Difficulty"
          onChange={setLimit}
          selectOption={difficultyOption}
        />
        <SelectField
          label="Theme"
          onChange={setTheme}
          selectOption={themeOptions}
        />
        <div className="mr-4">
          <p className="text-black text-sm">Points</p>
          <p className="text-black text-2xl mt-2">
            {cards.length / 2 + "/" + foundPair.length}
          </p>
        </div>
        <div>
          <p className="text-black text-sm">Moves</p>
          <p className="text-black text-2xl mt-2">{moves}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
