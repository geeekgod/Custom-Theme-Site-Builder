import React, { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import "./App.css";
import Display from "./Components/Display/index";
import Cards from "./Components/Cards/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const { theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route path="cards">
              <Route
                index
                element={<Cards selectedTheme={selectedTheme} theme={theme} />}
              />
              <Route
                path=":id"
                element={
                  <Display selectedTheme={selectedTheme} theme={theme} />
                }
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
