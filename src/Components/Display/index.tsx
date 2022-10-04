import React from "react";
import { ThemesInterface } from "../../types/interface";

interface displayProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;
}

const Display = ({ selectedTheme, theme }: displayProps) => {
  return (
    <div
      style={{
        color: theme[selectedTheme].primary,
        fontSize: theme[selectedTheme].fontSize1,
      }}
    >
      <h4 style={{ fontSize: theme[selectedTheme].fontSize1 }}>
        Lorem ipsum dolor sit.
      </h4>
      <p
        style={{
          color: theme[selectedTheme].secondary,
          fontSize: theme[selectedTheme].fontSize2,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum cum
        aliquid quod? Ipsam facilis temporibus sint quia optio voluptatum error,
        consequuntur a nobis veritatis fuga, magnam voluptates saepe asperiores.
      </p>
      <p
        style={{
          color: theme[selectedTheme].secondary,
          fontSize: theme[selectedTheme].fontSize2,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum cum
        aliquid quod? Ipsam facilis temporibus sint quia optio voluptatum error,
        consequuntur a nobis veritatis fuga, magnam voluptates saepe asperiores.
      </p>
      <p
        style={{
          color: theme[selectedTheme].secondary,
          fontSize: theme[selectedTheme].fontSize2,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum cum
        aliquid quod? Ipsam facilis temporibus sint quia optio voluptatum error,
        consequuntur a nobis veritatis fuga, magnam voluptates saepe asperiores.
      </p>
      <p
        style={{
          color: theme[selectedTheme].secondary,
          fontSize: theme[selectedTheme].fontSize2,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id eum cum
        aliquid quod? Ipsam facilis temporibus sint quia optio voluptatum error,
        consequuntur a nobis veritatis fuga, magnam voluptates saepe asperiores.
      </p>
    </div>
  );
};

export default Display;
