import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import "./App.css";

const App = () => {
  const { theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <div
      className={selectedTheme === 0 ? "theme1" : "theme2"}
      style={{
        background: theme[selectedTheme].bgPrimary,
        height: "100vh",
        fontFamily: `${theme[selectedTheme].font}`,
      }}
    >
      <h1 style={{ color: theme[selectedTheme].primary }}>Hello</h1>
      <button onClick={() => setSelectedTheme(0)}>First</button>
      <button onClick={() => setSelectedTheme(1)}>Second</button>
    </div>
  );
};

export default App;
