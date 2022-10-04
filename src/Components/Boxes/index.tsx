import { ThemeContext } from "../../Context/ThemeContext";
import { ThemesInterface } from "../../types/interface";
import React, { useContext } from "react";

interface boxesProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;
}
const Boxes = ({ selectedTheme, theme }: boxesProps) => {
  return (
    <>
      {
        // theme.map((i) => (
        <div
          key={theme[selectedTheme].id}
          style={{ background: theme[selectedTheme].bgSecondary }}
        >
          <h2 style={{ fontSize: theme[selectedTheme].fontSize1 }}>
            {theme[selectedTheme].title}
          </h2>
          <p
            style={{
              color: theme[selectedTheme].secondary,
              fontSize: theme[selectedTheme].fontSize2,
            }}
          >
            {theme[selectedTheme].body}
          </p>
        </div>
        // )
      }
    </>
  );
};

export default Boxes;
