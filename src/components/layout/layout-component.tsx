import React, { Dispatch, SetStateAction } from "react";
import FooterComponent from "./footer-component";
import HeaderComponent from "./header-component";
import Image from "next/image";
import { CardType } from "../../types";

interface LayoutComponentProps {
  children: React.ReactNode;
  setLimit: Dispatch<SetStateAction<number>>;
  setTheme: Dispatch<SetStateAction<"dog" | "cat">>;
  foundPair: string[];
  cards: CardType[];
  moves: number;
}

const LayoutComponent = (props: LayoutComponentProps) => {
  const { children, setLimit, setTheme, foundPair, cards, moves } = props;
  return (
    <div className="relative h-full">
      <Image
        src="/table-bg.jpg"
        alt="Table"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="min-h-screen"
      />
      <HeaderComponent
        setLimit={setLimit}
        setTheme={setTheme}
        foundPair={foundPair}
        cards={cards}
        moves={moves}
      />
      <div className="container mx-auto">{children}</div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
