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
      id: 1,
      primary: "#26547C",
      secondary: "#EF476F",
      bgPrimary: "#FFFCF9",
      bgSecondary: "#FFD166",
      font: `'Poppins', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
      title: "template 1",
      description: "TEMPLATE 1 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      primary: "#272D2D",
      secondary: "#A846A0",
      bgPrimary: "#999A98",
      bgSecondary: "#85EAAF",
      font: `'Oswald', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
      title: "template 2",
      description: "TEMPLATE 2 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      primary: "#29bcbc",
      secondary: "#e109cf",
      bgPrimary: "#e5efdc",
      bgSecondary: "#104f2a",
      font: `'Poppins', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
      title: "template 3",
      description: "TEMPLATE 3 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      primary: "#00ffff",
      secondary: "#A846A0",
      bgPrimary: "#5015be",
      bgSecondary: "#01f165",
      font: `'Oswald', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
      title: "template 4",
      description: "TEMPLATE 4 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      primary: "#274646",
      secondary: "#64085d",
      bgPrimary: "#af7bf1",
      bgSecondary: "#3a1d8a",
      font: `'Poppins', sans-serif`,
      fontSize1: "2rem",
      fontSize2: "4rem",
      title: "template 5",
      description: "TEMPLATE 5 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  selectedTheme: 0,
  setSelectedTheme: () => null,
};

const ThemeContext = createContext<ThemeInterface>(defaultContext);

const ThemeContextProvider = ({ children }: any) => {
  const theme: Array<ThemesInterface> = [
    {
      id: 1,
      primary: "#26547C",
      secondary: "#EF476F",
      bgPrimary: "#FFFCF9",
      bgSecondary: "#FFD166",
      font: `'Poppins', sans-serif`,
      fontSize1: ".9rem",
      fontSize2: "1.5rem",
      title: "template 1",
      description: "TEMPLATE 1 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      primary: "#272D2D",
      secondary: "#A846A0",
      bgPrimary: "#999A98",
      bgSecondary: "#85EAAF",
      font: `'Oswald', sans-serif`,
      fontSize1: ".9rem",
      fontSize2: "1.5rem",
      title: "template 2",
      description: "TEMPLATE 2 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      primary: "#29bcbc",
      secondary: "#e109cf",
      bgPrimary: "#e5efdc",
      bgSecondary: "#104f2a",
      font: `'Noto Sans', sans-serif`,
      fontSize1: ".9rem",
      fontSize2: "1.5rem",
      title: "template 3",
      description: "TEMPLATE 3 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      primary: "#00ffff",
      secondary: "#A846A0",
      bgPrimary: "#5015be",
      bgSecondary: "#01f165",
      font: `'Oswald', sans-serif`,
      fontSize1: ".9rem",
      fontSize2: "1.5rem",
      title: "template 4",
      description: "TEMPLATE 4 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      primary: "#274646",
      secondary: "#64085d",
      bgPrimary: "#af7bf1",
      bgSecondary: "#3a1d8a",
      font: `'Poppins', sans-serif`,
      fontSize1: ".9rem",
      fontSize2: "1.5rem",
      title: "template 5",
      description: "TEMPLATE 5 STUFFFFF",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
