import axios from "axios";
import { CardType } from "./types";

export const fetchCatImages = async (theme: "dog" | "cat", limit: number) => {
  try {
    const response = await axios.get<CardType[]>(
      `https://api.the${theme}api.com/v1/images/search?limit=${limit}`,
      {
        headers: {
          "x-api-key":
            theme === "cat"
              ? process.env.NEXT_PUBLIC_API_KEY_FOR_CATS
              : process.env.NEXT_PUBLIC_API_KEY_FOR_DOGS,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const shuffleArray = (array: CardType[]) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[i],
    ];
  }

  return shuffledArray;
};
