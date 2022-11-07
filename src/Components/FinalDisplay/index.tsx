import { ThemeContext } from "../../Context/ThemeContext";
import { ThemesInterface } from "../../types/interface";
import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import ReactDOM from "react-dom";
import App from "../../App";
import { TextField } from "@mui/material";

interface finaldisplayProps {
  selectedTheme: number;
  theme: Array<ThemesInterface>;
}

const FinalDisplay = ({ selectedTheme, theme }: finaldisplayProps) => {
  const [template, setTemplate] = useState(theme[0]);
  const [text, setText] = useState(`${template.body}`);
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();
  const locationPath = location.pathname.split("/");
  const locationId = parseInt(locationPath[locationPath.length - 1]);

  useEffect(() => {
    const template = theme.find((i) => i.id === locationId);
    if (template) {
      setTemplate(template);
    }
  }, [locationId, theme]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(text, "text");
    const data = {
      text1: text,
    };
  };
  useEffect(() => {}, []);

  const { setSelectedTheme } = useContext(ThemeContext);
  return (
    <>
      {
        <div
          key={template.id}
          className="container"
          style={{ background: theme[selectedTheme].bgPrimary }}
        >
          <h2 style={{ fontSize: theme[selectedTheme].fontSize1 }}>
            {template.title}
          </h2>

          <TextField
            style={{
              color: theme[selectedTheme].secondary,
              backgroundColor: theme[selectedTheme].bgPrimary,
              fontSize: theme[selectedTheme].fontSize2,
              border: "none",
            }}
          >
            {}
          </TextField>

          <button onClick={handleSubmit}>Save</button>
        </div>
        // )
      }
    </>
  );
};

export default FinalDisplay;
