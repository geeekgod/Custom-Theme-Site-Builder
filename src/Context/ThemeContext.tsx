import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { ThemeInterface, ThemesInterface } from "../types/interface";

const defaultContext = {
  theme: [
    {
      primary: "#26547C",
      secondary: "#EF476F",
      bgPrimary: "#FFFCF9",
      bgSecondary: "#FFD166",
      font: `'Poppins', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
    },
    {
      primary: "#272D2D",
      secondary: "#A846A0",
      bgPrimary: "#999A98",
      bgSecondary: "#85EAAF",
      font: `'Oswald', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
    },
    {
      primary: "#29bcbc",
      secondary: "#e109cf",
      bgPrimary: "#e5efdc",
      bgSecondary: "#104f2a",
      font: `'Poppins', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
    },
    {
      primary: "#00ffff",
      secondary: "#A846A0",
      bgPrimary: "#5015be",
      bgSecondary: "#01f165",
      font: `'Oswald', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
    },
    {
      primary: "#274646",
      secondary: "#64085d",
      bgPrimary: "#af7bf1",
      bgSecondary: "#3a1d8a",
      font: `'Poppins', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
    },
  ],
  selectedTheme: 0,
  setSelectedTheme: () => null,
};

const ThemeContext = createContext<ThemeInterface>(defaultContext);

const ThemeContextProvider = ({ children }: any) => {
  const theme: Array<ThemesInterface> = [
    {
      primary: "#26547C",
      secondary: "#EF476F",
      bgPrimary: "#FFFCF9",
      bgSecondary: "#FFD166",
      font: `'Poppins', sans-serif`,
      fontSize1: "1.5rem",
      fontSize2: "2.4rem",
    },
    {
      primary: "#272D2D",
      secondary: "#A846A0",
      bgPrimary: "#999A98",
      bgSecondary: "#85EAAF",
      font: `'Oswald', sans-serif`,
      fontSize1: "1.5rem",
      fontSize2: "2.4rem",
    },
    {
      primary: "#29bcbc",
      secondary: "#e109cf",
      bgPrimary: "#e5efdc",
      bgSecondary: "#104f2a",
      font: `'Noto Sans', sans-serif`,
      fontSize1: "1.5rem",
      fontSize2: "2.4rem",
    },
    {
      primary: "#00ffff",
      secondary: "#A846A0",
      bgPrimary: "#5015be",
      bgSecondary: "#01f165",
      font: `'Oswald', sans-serif`,
      fontSize1: "1.5rem",
      fontSize2: "2.4rem",
    },
    {
      primary: "#274646",
      secondary: "#64085d",
      bgPrimary: "#af7bf1",
      bgSecondary: "#3a1d8a",
      font: `'Poppins', sans-serif`,
      fontSize1: "1.5rem",
      fontSize2: "2.4rem",
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState<number>(0);

  return (
    <ThemeContext.Provider value={{ theme, selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
