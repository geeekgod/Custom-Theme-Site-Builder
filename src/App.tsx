import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import "./App.css";
import Display from "./Components/Display/index";

const App = () => {
  const { theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

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

  return (
    <div
      className={themeSelector(selectedTheme)}
      style={{
        background: theme[selectedTheme].bgPrimary,
        height: "100vh",
        fontFamily: `${theme[selectedTheme].font}`,
      }}
    >
      {/* <h1 style={{ color: theme[selectedTheme].primary }}>Hello</h1> */}
      <button onClick={() => setSelectedTheme(0)}>First</button>
      <button onClick={() => setSelectedTheme(1)}>Second</button>
      <button onClick={() => setSelectedTheme(2)}>Third</button>
      <button onClick={() => setSelectedTheme(3)}>Fourth</button>
      <button onClick={() => setSelectedTheme(4)}>Fifth</button>
      <Display theme={theme} selectedTheme={selectedTheme} />
    </div>
  );
};

export default App;
