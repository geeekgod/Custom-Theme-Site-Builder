import { ThemesInterface } from "../../types/interface";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Boxes from "./../Boxes/index";

interface displayProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;
}

const Display = ({ selectedTheme, theme }: displayProps) => {
  const themeSelector = (option: Number) => {
    switch (option) {
      case 0:
        return "theme1";
      case 1:
        return "theme2";

      default:
        return "theme1";
    }
  };
  const { setSelectedTheme } = useContext(ThemeContext);

  // const increment=()=>{

  // };

  // const decrement=()=>{

  // }
  return (
    <div
      className={themeSelector(selectedTheme)}
      style={{
        // margin:"5rem",

        background: theme[selectedTheme].bgPrimary,
        height: "100vh",
        fontFamily: `${theme[selectedTheme].font}`,
      }}
    >
      <div className="card">
        <button onClick={() => setSelectedTheme(0)}>First</button>
        <button onClick={() => setSelectedTheme(1)}>Second</button>
        <button onClick={() => setSelectedTheme(2)}>Third</button>
        <button onClick={() => setSelectedTheme(3)}>Fourth</button>
        <button onClick={() => setSelectedTheme(4)}>Fifth</button>

        {/* <div className="size-changer">
       <div className="increment">
           <button>+</button>
       </div>
       <div className="display">
           
       </div>
       <div className="increment">
           <button>-</button>
       </div>
      </div> */}
      </div>

      <Boxes selectedTheme={selectedTheme} theme={theme} />
      {/* <Display  /> */}
    </div>
  );
};

export default Display;
