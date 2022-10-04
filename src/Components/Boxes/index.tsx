import { ThemeContext } from "../../Context/ThemeContext";
import { ThemesInterface } from "../../types/interface";
import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface boxesProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;
  // setSelectedTheme:number;
}
const Boxes = ({ selectedTheme, theme }: boxesProps) => {
  const [template, setTemplate] = useState(theme[0]);

  const location = useLocation();
  const locationPath = location.pathname.split("/");
  const locationId = parseInt(locationPath[locationPath.length - 1]);

  useEffect(() => {
    const template = theme.find((i) => i.id === locationId);
    if (template) {
      setTemplate(template);
    }
  }, [locationId, theme]);

  const { setSelectedTheme } = useContext(ThemeContext);
  console.log(
    theme &&
      theme.map((i) => {
        i.id;
      })
  );
  console.log(template.title);
  return (
    <>
      {
        // theme.map((i) => (
        <div
          key={template.id}
          className="container"
          style={{ background: theme[selectedTheme].bgPrimary }}
        >
          <h2 style={{ fontSize: theme[selectedTheme].fontSize1 }}>
            {template.title}
          </h2>
          <p
            style={{
              color: theme[selectedTheme].secondary,
              fontSize: theme[selectedTheme].fontSize2,
            }}
          >
            {template.body}
          </p>
        </div>
        // )
      }
    </>
  );
};

export default Boxes;
