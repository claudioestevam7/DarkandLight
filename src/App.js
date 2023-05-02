import "./App.css";
import styled from "styled-components";
import Hero from "./components/Hero";
import { Contexto } from "./components/Contexto";
import { useState } from "react";

function App() {

  const [dark, setDark] = useState(true)

  return (
    <Contexto.Provider value={{dark, setDark}}>
        <Hero />
    </Contexto.Provider>
  );
}

export default App;
