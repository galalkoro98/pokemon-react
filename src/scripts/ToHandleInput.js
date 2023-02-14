import { useState } from "react";

// import { GetPokemon } from "./GetPokemon";

// This is a function that will be called when the user types in the input field.

export const ToHandleInput = () => {
  const [input, setInput] = useState("");
  // const { getPokemon } = GetPokemon();

  const handleInput = (e) => {
    setInput(e.target.value);
    // getPokemon(e.target.value);
  };

  return { input, handleInput };
};
