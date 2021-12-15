import React, { createContext, useContext, useState } from 'react';
import './App.css';

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark")

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

const useMode = () => {
  return useContext(ModeContext);
}

function WhatIsMode() {
  const { mode, setMode } = useMode();
  const styleByMode = {
    "dark": {
      "color": "white", "background": "black"
    },
    "light": {
      "color": "black", "background": "red"
    }
  };

  return (
    <>
      <button onClick={() => setMode("dark")}>Dark</button>
      <button onClick={() => setMode("light")}>Light</button>
      <p style={styleByMode[mode]}>{mode}</p>
    </>
  )
}

function App() {

  return (
    <ModeProvider>
      <WhatIsMode></WhatIsMode>
    </ModeProvider>
  );
}

export default App;
