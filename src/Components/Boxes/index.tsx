import { ThemeContext } from "../../Context/ThemeContext";
import { ThemesInterface } from "../../types/interface";
import React, { useContext } from "react";

interface boxesProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;
  // setSelectedTheme:number;
}
const Boxes = ({ selectedTheme, theme }: boxesProps) => {
  const { setSelectedTheme } = useContext(ThemeContext);
  console.log(theme[selectedTheme].id);
  console.log(theme[selectedTheme].title);
  return (
    <>
      {
        // theme.map((i) => (
        <div
          key={theme[selectedTheme].id}
          style={{ background: theme[selectedTheme].bgPrimary }}
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
