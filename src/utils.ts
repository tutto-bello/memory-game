export const giveTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds
  );
};

export const DEFAULT_SPIN_STATE = {
  cardId1: undefined,
  cardIndex1: undefined,
  cardId2: undefined,
  cardIndex2: undefined,
};

export const modeOptions = [
  { label: "One Player", value: "singlePlayer" },
  { label: "Two Player", value: "multiPlayer" },
];

export const themeOptions = [
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
];

export const difficultyOption = [
  { label: "Easy", value: "6" },
  { label: "Medium", value: "9" },
  { label: "Hard", value: "15" },
];
