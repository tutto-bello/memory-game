export interface CardType {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface SpinType {
  cardId1: string | undefined;
  cardIndex1: number | undefined;
  cardId2: string | undefined;
  cardIndex2: number | undefined;
}

export interface FoundPairType {
  playerOne: string[];
  playerTwo: string[];
}

export interface MovesType {
  playerOne: number;
  playerTwo: number;
}

export interface TimerType {
  playerOne: number;
  playerTwo: number;
}
