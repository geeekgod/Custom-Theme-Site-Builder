import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ThemesInterface {
  primary: string;
  secondary: string;
  bgPrimary: string;
  bgSecondary: string;
  font: string;
}

interface ThemeInterface {
  theme: Array<ThemesInterface>;
  selectedTheme: any;
  setSelectedTheme: Dispatch<SetStateAction<any>>;
}

const defaultContext = {
  theme: [
    {
      primary: "#26547C",
      secondary: "#EF476F",
      bgPrimary: "#FFFCF9",
      bgSecondary: "#FFD166",
      font: `'Poppins', sans-serif`,
    },
    {
      primary: "#272D2D",
      secondary: "#A846A0",
      bgPrimary: "#999A98",
      bgSecondary: "#85EAAF",
      font: `'Oswald', sans-serif`,
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
    },
    {
      primary: "#272D2D",
      secondary: "#A846A0",
      bgPrimary: "#999A98",
      bgSecondary: "#85EAAF",
      font: `'Oswald', sans-serif`,
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState<any>(0);

  return (
    <ThemeContext.Provider value={{ theme, selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
