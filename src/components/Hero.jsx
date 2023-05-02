import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Contexto } from "./Contexto";

const Hero = () => {

  const {dark, setDark} = useContext(Contexto);

  console.log(dark);

  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${() => (dark ? "black" : "white")};
    color: ${() => (dark ? "black" : "white")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  return (
    <div>
      <Button>Normal</Button>
      <Button onClick={()=>setDark(!dark)}>Primary</Button>
    </div>
  );
};

export default Hero;
