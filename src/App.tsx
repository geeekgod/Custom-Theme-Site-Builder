import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';

const App = () => {

  const { theme, selectedTheme, setSelectedTheme } = useContext(ThemeContext)

  return (
    <div style={{ background: theme[selectedTheme].bgPrimary, height: "100vh" }}>
      <h1 style={{ color: theme[selectedTheme].primary }}>Hello</h1>
      <button onClick={() => setSelectedTheme(0)}>First</button>
      <button onClick={() => setSelectedTheme(1)}>Second</button>
    </div>
  );
}

export default App;
